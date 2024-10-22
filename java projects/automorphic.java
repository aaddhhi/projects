public class automorphic {
    public static void main(String[] args) {
        int n=5;
        int y=n*n;
        if(y%10==n%10){
            System.out.println("It is automorphic");
        }
        else{
            System.out.println("Not automorphic");
        }
    }
}
