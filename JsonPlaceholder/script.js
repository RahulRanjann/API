function one(){
    console.log(1);
}

async function two(){
   await setTimeout(()=>{
        console.log(2)
    },2000)
}
 function three() {
    setTimeout(()=>{
        console.log(3)
    },0)
 }

function four(){
    console.log(4)
}
function five(){
console.log(5)
}
async function main(){
    one();
   await two()
   await three()
    four()
    five()
}
main()
/*
    Rahul Output: 
    1,4,5,3,2
*/