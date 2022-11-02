class a
{
    static void addNum(int x, int y)
        {   int p=x;
            int q=y;
            System.out.println(p+q);
        }
        static void addNum(int x, int y, int z)
        {   int p=x;
            int q=y;
            int r=z;
            System.out.println(p+q+r);
        }
}
public class mol 
{
    public static void main(String[] args) throws Exception 
    {
        System.out.println("Hello, World!");
        a.addNum(1,3);
        a.addNum(1,3,2);
    }
}
