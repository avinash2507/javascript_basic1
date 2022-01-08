
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sum = document.getElementById('total');
num1.addEventListener('change',(e)=>{
    console.log("the event is",e.target.value);
})



function myAddFunc(action){
    console.log("the action is",action);
    
    switch (action) {
        case 'add':
            const totalSum =Number(num1.value)+Number(num2.value);
            sum.innerHTML="the sum is: "+totalSum
            
            break;
        case 'sub':
            const totalMinus =Number(num1.value)-Number(num2.value);
            sum.innerHTML="the subtraction is: "+totalMinus
    
        default:
            break;
    }
    
}
