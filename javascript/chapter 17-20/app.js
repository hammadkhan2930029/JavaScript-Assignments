// // chapter 17-20
// // task 1

// var multiDim=[[],[],[]];

// document.write("task 1 <br>[[],[],[]]; <br>");

// // task 2

// var array=[[0,1,2,3],[1,0,1,2],[2,0,1,3]];

// for(var i=0; i < array.length; i++){
//     for(var j=0; j < array[i].length; j++){
//         console.log(array[i][j]);
//         document.write(array[i][j]);
//     }
//     document.write("<br>")
    
// }



// // task 3


// for(var i=1; i <= 10; i++){
//     document.write("<br>" +i);
// }

// task 8
// largest value k lia 

// var arr=[12,55,42,88,41,61,87,69,32,51,];
// var max=0;

// for(var i=0; i < arr.length; i++){
//     if(max < arr[i]){
//         max =arr[i]
//     }
// }
// console.log(max);

// task 8
// smallest value k lia 


// var arr=[12,55,42,88,41,61,87,69,32,51];
// var min=0;

// for(var i=0; i > arr.length; i++){
//     if(min > arr[i]){
//         min =arr[i]
//     }
// }
// console.log(min);

// task 8
// for loop

// var array =[4,5,79,4,3,78,98]
// var largest = array[0];

// for(i=0;i<=array.length;i++){

//     if(largest<=array[i]){

//         largest = array[i];

//     }
// }
// console.log(largest)


// task 8
// normal

// var array =[4,5,79,4,3,78,98]

// console.log(array)

// var sorted = array.sort().reverse();
// console.log(sorted[0])

// task 4

// var table =+prompt("enter table no");
// var tableLenght =+prompt("enter table lenght");
// document.write(`Multiplication table of ${table}<br> lenght ${tableLenght}`);

// for(var i=1; i<=tableLenght; i++)
// {
//     // console.log(table * i);
//     document.write(table + "x" + i + "=" + table * i + "<br>");

// }

// sab sy choti value get karni hay

var arr =[24,25,81,5,2,85,1,36,95];
// var max=0;

// for(var i=1; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
//     console.log(max);
// }

var min = arr[0]
for(var i=arr.length; i>0; i--){
    if(min>arr[i])
    {
        min=arr[i]
    }
}
console.log(min)


