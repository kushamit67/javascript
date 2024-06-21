//IIFE (Immediately Invoked Function Expression)

(function chai(){
    console.log("Hello coder")
})();//; is must to end the IIFE


(() =>{
    console.log("hello coder 2")
})();

((name) =>{
    console.log(`big boy ${name}`)
})("Amit");