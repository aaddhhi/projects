public class sorting_array {
    public static void main(String[] args) {
        int arr[]={78,21,96,3,46,21,41,1};
        int n=arr.length;
        int temp;
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n/2;j++){
                if(arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }

            }   
        }
        for(int j=n/2;j<n-1;j++){
            if(arr[j]<arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        for(int i=0;i<n;i++)
        System.out.println(arr[i]+" ");
    }
    
}
