public class smallest_array {
    public static void main(String[] args) {
        int arr[]={85,41,2,65};
        int min=arr[0];
        for(int i=0;i<arr.length;i++){
            if(min>arr[i]){
                min=arr[i];
            }
        }
        System.out.println(min);
    }
}
