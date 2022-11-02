 class car
 {
    int price()
    {
        return 0;
    }
 }

 class porsh extends car
 {
    int price()
    {
        return 9000;
    }
 }
 public class mor 
{
    public static void main(String[] args) 
    {
        porsh p = new porsh();
        System.out.println(p.price());
    } 
}
