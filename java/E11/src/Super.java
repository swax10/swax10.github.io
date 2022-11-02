class A 
{
    String a = "I am super variable";
    void show()
    {
         System.out.println("I am super method");
    }
}

class B extends A
{
     void show()
     {  
        String a = "I am sub variable";
        System.out.println(super.a);
        System.out.println(a);
        super.show();
        System.out.println("I am sub method");
     }
}
public class Super 
{
    public static void main(String[] args) {
        B b = new B();
        b.show();
    }
}
