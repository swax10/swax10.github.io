
public class Stringbuffer {
    
    public static void main(String[] args) 
    {
        StringBuffer r = new StringBuffer();
        int l = r.length();
        int c = r.capacity();
        System.out.println("before append "+l+c);
        
        r.append("sssssssssssssssssssss");
        System.out.println("after append  "+l+c);
        
        r.append("ssssssssssssssss");

    }
}
