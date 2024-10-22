import java.util.Scanner;

public class prime_number {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        System.out.println("Enter the number:");
        int n =sc.nextInt();
        boolean prime_number = true;
        for(int i=2;i<n;i++){
            if(n%i==0){
                prime_number=false;
                break;
            }
        }
        System.out.println(prime_number);

    }
}
