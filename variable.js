const name = "avinash"
let last_name ="vishwkarmna"
// console.log(name, last_name);
const current = new Date()
// console.log("date",current);
let obj ={
    name:'shubh',
    maurya:'mauryua',
    address:{
        city:'renukoot',
        dist:'sonebhadra',
        state:'sfsfs',
        pin:23424242
    }

}
//console.log(obj.address.city)

const myArr =["name","mauy","renukoot","sonebhadra","male"]
const arr =[{name:"name"},{name:"name",mauruy:"mauy",city:"renukoot"}]

// ÷\console.log(myArr[0],myArr[1],myArr[2],myArr[3],myArr[4],myArr.length)

// for(let i = 0; i < myArr.length; i++){
//     const item =myArr[i]
//     console.log("index:",i,"element:",item);
// }


for (const key in obj) {
    console.log("the key:",key,"value:",obj[key]);
}


