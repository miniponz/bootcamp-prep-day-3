var x = 14;

if(x > 12) {
    console.log(x);
    console.log('if if if if if');
}

else {
    console.log('too small. sad face.');
}

/* 
1. Initialize
2, condition
3. post loop action 
*/

for(var i = 0; i < x; i++) {
    
    if(i % 2 === 0) {
        console.log(i);
    }
    else {
        console.log('cheeseburgers');
    }
}
function sayHello(){
    console.log('hi');
}
if(x % 2 === 0){
    sayHello();
}

// eslint-disable-next-line
function evenOrOdd(){

    var input = document.getElementById('number');
 
    var y = input.value;

    if(y % 2 === 0){
        console.log('even');
    }
    else {
        console.log('odd');
    }
}




/* 
1. Click a Button
2, Return a function
3. User input box.
*/