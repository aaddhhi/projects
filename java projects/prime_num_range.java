import java.util.Scanner;

public class prime_num_range {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the starting num:");
        int min=sc.nextInt();
        System.out.println("Enter the last number:");
        int max=sc.nextInt();

        for(int n=min;n<=max;n++){
            boolean prime_num_range=true;

            for(int i=2;i<n;i++){
                if(n%i==0){
                    prime_num_range=false;
                    break;
                }
            }
            if(prime_num_range==true){
                System.out.println(n+ " ");
            }
        }
    }
    
}
