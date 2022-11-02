abstract class Multiply { 
 
    // abstract methods 
    // sub class must implement these methods 
    public abstract int MultiplyTwo (int n1, int n2); 
    public abstract int MultiplyThree (int n1, int n2, int n3); 
    
    // regular method with body 
    public void show() { 
    System.out.println ("Method of abstract class Multiply"); 
    } 
   } 
   // Regular class extends abstract class 
   class AbstractMethodEx1 extends Multiply { 
    
    // if the abstract methods are not implemented, compiler will give an error 
    public int MultiplyTwo (int num1, int num2) { 
    return num1 * num2; 
    } 
    public int MultiplyThree (int num1, int num2, int num3) { 
    return num1 * num2 * num3; 
    } 
    
    // main method 
    public static void main (String args[]) { 
    Multiply obj = new AbstractMethodEx1(); 
    System.out.println ("Multiplication of 2 numbers: " + obj.MultiplyTwo (10, 50)); 
    System.out.println ("Multiplication of 3 numbers: " + obj.MultiplyThree (5, 8, 10)); 
    obj.show(); 
    } 
   }