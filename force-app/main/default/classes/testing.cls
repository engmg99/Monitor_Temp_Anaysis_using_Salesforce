public class testing {
    public static integer a;
    public static integer b;
    public static integer c;
    public integer d,e,f;
    public testing(){
        //constructor
    }
    public static void add()  //static method
    {
        a=5;
        b=5;
        c=a+b;
        system.debug('sum= '+c);
    }
    public void s()  //method
    {
        a=5;
        b=6;
        c=a+b;
        system.debug('sum= '+c);
    }
    public integer ad()// return type method
    {
        return 8;
    }
    public void bb(integer k,integer m)
    {
        integer g=k+m;
        system.debug(g);
    }
}