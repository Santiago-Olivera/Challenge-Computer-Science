var moveZeroes = function(nums) {
    let zero=0; //Auxiliar pointer to keep track of zero elements
    for(let i=0;i<nums.length;i++){ //traverse the array
        if(nums[i] == 0){           //checks the moment we found a 0
            if(nums[zero] !==  0){  //if zero is pointing to a non 0 element ...
                zero=i;             // update zero to point to the current element which is a zero
                continue;           //Go no next iteration
            }
        }
        if(nums[i] != 0 && nums[zero] == 0){ //if current element != 0 and zero pointing to a 0 element
            let aux=nums[i]
            nums[i]=nums[zero]
            nums[zero]=aux 
            //Lines 16 17 18 make a swap between the current element and the element zero is pointing at. 
            zero++ //increment zero by 1 to point at the next index. 
        }
    } // End of for
};