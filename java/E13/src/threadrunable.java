/* using runable interface */

class Thread1 implements Runnable {
    public void run() {
    for (int i = 0; i <= 20; i++) {
    System.out.println("Tx1");
    }
    }
   }
   class Thread2 implements Runnable {
    public void run() {
    for (int i = 0; i <= 20; i++) {
    System.out.println("Tx2");
    }
    }
   }
public class threadrunable 
{
    public static void main(String[] args) 
    {
        Thread1 t1 = new Thread1();
        Thread th1 = new Thread(t1);
        Thread2 t2 = new Thread2();
        Thread th2 = new Thread(t2);
        th1.start();
        th2.start();
    }
}
