class Employees
{
    int id;
    String name;
    int age;
    void info(int id, String name, int age )
    {
        id = id;
        name = name;
        age = age;
        System.out.println(id);
        System.out.println(name);
        System.out.println(age);
    }

}

public class e3
{
    public static void main(String[] args) {
        Employees e1 = new Employees();
        e1.info(27, "gau", 36);
    }
}
