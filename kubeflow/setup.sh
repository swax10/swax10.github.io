#!/bin/bash
wget -q https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar -xvzf ngrok-v3-stable-linux-amd64.tgz
sudo cp ngrok /usr/local/bin/
chmod +x /usr/local/bin/ngrok
echo "Ngrok Successfully Installed"

export PIPELINE_VERSION=2.0.3
kubectl apply -k "github.com/kubeflow/pipelines/manifests/kustomize/cluster-scoped-resources?ref=$PIPELINE_VERSION"
kubectl wait --for condition=established --timeout=60s crd/applications.app.k8s.io
kubectl apply -k "github.com/kubeflow/pipelines/manifests/kustomize/env/platform-agnostic-pns?ref=$PIPELINE_VERSION"

export NGROK_AUTHTOKEN=$1
export NGROK_API_KEY=$2

mkdir hello-ngrok
cd hello-ngrok
helm repo add ngrok https://ngrok.github.io/kubernetes-ingress-controller
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh

helm install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
	--namespace ngrok-ingress-controller \
	--create-namespace \
	--set credentials.apiKey=$NGROK_API_KEY \
	--set credentials.authtoken=$NGROK_AUTHTOKEN

touch ngrok-manifest.yaml
cat << EOF > ngrok-manifest.yml
# Setup a K8s 2048 Game Example
# See the guide linked below
apiVersion: v1
kind: Service
metadata:
  name: AGI
  namespace: ngrok-ingress-controller
spec:
  ports:
    - name: http
      port: 8080
      targetPort: 8080
  selector:
    app: AGI
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: AGI
  namespace: ngrok-ingress-controller
spec:
  replicas: 1
  selector:
    matchLabels:
      app: AGI
  template:
    metadata:
      labels:
        app: AGI
    spec:
      containers:
        - name: backend
          image: alexwhen/docker-2048
          ports:
            - name: http
              containerPort: 80
---
# ngrok Ingress Controller Configuration
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: AGI-ingress
  namespace: ngrok-ingress-controller
spec:
  ingressClassName: ngrok
  rules:
    - host: sensibly-vast-mammoth.ngrok-free.app
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: AGI
                port:
                  number: 80
EOF

kubectl apply -f ngrok-manifest.yml
