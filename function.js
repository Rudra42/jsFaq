function evenify(num){
    
    if(num % 2 == 0){
        console.log(num,' is Even');
    }
    else{
        console.log(num, ' is odd');
    }
}
function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; 
        evenify(num);
}
}
nums = [5,12,89,45,18,8];
evenify_all(nums);


