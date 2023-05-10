package Advance_JavaScript;

class A {
    public A() {
        System.out.println("Constructor from A");
    }

}

class B extends A{
    public B() {
        System.out.println("Constructor from B");
    }

}

public class C extends B{

    public C() {
        System.out.println("Constructor from C");
    }
    
}
