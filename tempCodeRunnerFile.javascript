
function add(a){
    function inner(b){
        return a+b;
    }
    return inner;
}

console.log(add(2)(3));