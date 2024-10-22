public class palindrome {
    public static void main(String[] args) {
        int num=121,rev=0,rem;
        int temp=num;
        while(temp!=0){
            rem=temp%10;
            rev=rev*10+rem;
            temp=temp/10;
        }
        if(num==rev){
            System.out.println(num+"is palindrome");
        }
        else{
            System.out.println(num+"is not palindrome");
        }
    }
    
}
