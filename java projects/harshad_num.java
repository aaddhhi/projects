import java.util.Scanner;
class harshad_num{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the num:");
        int num=sc.nextInt();
        int originalNum = num;
        int sum=0;
        while(num!=0){
            int last=num%10;
            sum=sum+last;
            num=num/10;
        }
        if(originalNum%sum==0){
            System.out.println("Harshad number");
        }
        else{
            System.out.println("Not a harshad number");
        }
    }
}