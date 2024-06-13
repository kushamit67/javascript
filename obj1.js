const JsUser ={
    "full name":"Amit Kush",
    age: 235,
    email: "creativeimaginator01@test.com"
}
console.log(JsUser["full name"])
console.log(JsUser["email"])
console.log(JsUser["age"])

//object.freeze is to use to freeze or to stop adding or updating the information
//sysmbol has to be denoted with [] in an object to consider as symbol

JsUser.greeting= function(){
    console.log("Hello JS User")
}

JsUser.greeting2= function(){
    console.log(`Hello JsUser, ${this["full name"]}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
