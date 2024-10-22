import java.util.Scanner;

public class sum_of_num_in_given_range {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the first num:");
        int num1 = sc.nextInt();
        System.out.println("Enter the next number:");
        int num2 = sc.nextInt();
        int sum =0;
        for(int i=num1;i <=num2;i++)
        sum=sum+i;
        System.out.println("the sum is:"+sum);
    }
}
