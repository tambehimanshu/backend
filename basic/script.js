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
console.log(fd);