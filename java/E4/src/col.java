public class col 
{   int i;
    
    col() {
    }

    {
        System.out.println("Default Worker");
    }

    col(int id)
    {
      i=id;
    }
    public static void main(String[] args) 
    {
        col w1 = new col(27);
        System.out.println(w1.i);
    }
}
