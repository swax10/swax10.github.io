class car
{
    car()
    {
        System.out.println("Getting ready for race");
    }
    public void rave()
    {
        System.out.println("Vroom Vroom");
    }
}

class porsh extends car
{
    porsh()
    {
        super.rave();
        System.out.println("Porsh is ready");
    }
}

class porcho extends porsh
{
    public void speed()
    {
        System.out.println("Porcho is running at 3000 km/sec");
    }
}

public class Multilevel 
{
    public static void main(String[] args) 
    {
        porcho porch = new porcho();
        porch.speed();
    }
}
