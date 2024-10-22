public class fibanocci {
    public static void main(String[] args) {
        int n=15;
        int a=0,b=1;
        System.out.println(a+ " "+b+ " ");
        int nextTerm;
        for(int i=2;i<n;i++){
            nextTerm=a+b;
            a=b;
            b=nextTerm;
            System.out.println(nextTerm+"");
        }
    }
    
}
