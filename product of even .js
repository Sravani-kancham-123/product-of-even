let arr = [1,2,3,4,6,7,8,4,5,6];
let product = 1;
for(let i = 0; i <= arr.length; i++)
{
    if(arr[i]%2==0) {
        product = product*arr[i];
    }
}
console.log("the product of all the even numbers in an array is")
console.log(product)