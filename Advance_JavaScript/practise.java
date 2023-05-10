package Advance_JavaScript;

import java.util.*;

public class practise {

    public static void main(String[] args) {
        
        // int[] arr = {4, 5, 10, -11, -10, 6, 10};
        int[] arr = {-2, -4, 7, 8, -7, -6, -2};

        int i = 0;

        for(int j = 0; j < arr.length; j++) {
            if(arr[j] < 0) {
                swap(i, j, arr);
                
                i++;

                while(arr[i] < 0) {
                    i++;
                }
            }
        }

        System.out.println(Arrays.toString(arr));

    }
    



public static void swap(int i, int j, int[] arr) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

}