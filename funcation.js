function myFun(firstname,lastname){
    console.log("fistname:",firstname,"last name:",lastname);

}


const myArr= [{name:"s",lastname:'v'},{name:"m",lastname:'p'},{name:"n",lastname:'q'},{name:"t",lastname:'q'}]

const obj ={
    name:'s',
    lastname:'v'
}
// myFun(obj.name,obj.lastname)

for(let i=0;i<myArr.length;i++){
    console.log("item",i,myArr[i]);
    let fname=myArr[i].name
    const lname=myArr[i].lastname
    console.log("first name:",fname,"last name:",lname);
    //myFun(fname,lname)
}
