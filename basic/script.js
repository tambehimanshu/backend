var arr=[1,2,3,4];
var ans = arr.map(function(val){
    return val*2;
})
var wr = arr.filter(function(val){
    if(val>2){
        return true;
    }
    else return false;
})
var fd = arr.find(function(val){
    if(val == 3) return val;
})

// objects in js

var obj ={
    name:'himanshu',
    age:20,
}

function abcd(){
    return 12;
}
// var iof = arr.indexOf(3);
// console.log(obj.name);
// console.log(obj['age']);

async function hello() {
    var blob = await fetch('https://randomuser.me/api/');
    var ans = blob.json();

    console.log(ans.results[0].name);
    
}
hello()
var as=abcd();
console.log(as);