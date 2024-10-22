public class small_large {
    public static void main(String[] args) {
        int arr[]={42,158,32,2,89};
        int small=arr[0];
        int large=arr[0];
        for(int i=0;i<arr.length;i++){
            if(large<arr[i]){
                large=arr[i];
            }
            if(small>arr[i]){
                small=arr[i];
            }

            }
            System.out.println("The largest num is:"+large);
            System.out.println("The smallest num is:"+small);
        }
    }

