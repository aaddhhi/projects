public class array {
    public static void main(String[] args) {
        int arr[]={70,50,41,23,74};
        int max=arr[0];
        for(int i=0;i<arr.length;i++)
        {
            if(max<arr[i]){
                max=arr[i];
            }
        }
        System.out.println(max);
    }

}
