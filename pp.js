// function convertTemp(cel){
//     let cel=getUserInput();
//     let fCel=parseFloat(cel);
//     let F= (fCel * 9/5)+32;
//     return F;
    
//     // console.log(F);
// }



// function getUserInput(){
//     let input=prompt("Please enter value in Celcius");
//     return input;
// }


// function display(){
//     let cel=getUserInput();

//     let finalRes=convertTemp();
//     console.log(`${cel} Celsius =${finalRes} Fahreheit`);
// }

// display();


// let arr=[20,85,74,65,25];


// function average(arr){
//     let sum=0;
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i];

//     }
//     let average=sum/arr.length;
//     return average;
// }


// function highest(arr){
//     let curHigh=arr[0];
//     for(i=0;i<arr.length;i++){
//         if(curHigh<arr[i]){
//             curHigh=arr[i];
//         }
      

//     }
//    return curHigh;

// }


// function grades(arr){
//     let newArr=[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>=90 && arr[i]<=100 ){
//             newArr.push('A')
//         }else if(arr[i]>=80 && arr[i]<=89 ){
//             newArr.push('B')
//         }else if(arr[i]>=70 && arr[i]<=79 ){
//             newArr.push('C')
//         }else if(arr[i]>=60 && arr[i]<=69 ){
//             newArr.push('D')
//         }else if(arr[i]<60  ){
//             newArr.push('F');
//         }else{
//             console.log("invalid input");
//         }
//     }
//     return newArr;


// }


// function display(arr){
//     let array=arr;
//     let avg=average(array);
//     let high=highest(array);
//     let grade=grades(array);

//     console.log(`Averge Score: ${parseFloat(avg)}\nHighest score: ${parseFloat(high)}\nGrades: ${grade}`)


// }

// display(arr);


let arr=[];

function addItem(){


    let askUser=prompt("please add name of item that you want to add");

    arr.push(askUser);
    console.log(`Added to list: ${askUser}`);

    return arr;

}

function remove(){
    if (arr.length===0){
        console.log("NO items in list")
        
    }
    console.log("============================");
    console.log("Current items:");
    for(i=0;i<arr.length;i++){
        console.log(`${i+1}:${arr[i]} `);
    }
    console.log("============================");
    let askuser=prompt("enter index you want to remove");
    let index=parseInt(askuser,10);

    if(index>=0 && index<arr.length){
        arr.splice(index,1);
        console.log(`Item removed. Updated list: ${arr}`);
    
    }else{
        console.log("Invalid index. please try again")
    }

    
}


function display(){
    for(i=0;i<arr.length;i++){
        console.log(`${i+1}:${arr[i]} `);
    }
}


function userInput(){
    let Input;

    while(true){

        Input=prompt("Please enter task you want to do\n such as Add,Remove,Display");
        if (Input==="Add" || Input==="add"){
            addItem();
 
        }else if (Input==="Remove" || Input==="remove"){
            remove();
           
        }else if (Input==="display" || Input==="Display"){
            display();
        }else if(Input==="Exit" || Input==="exit"){
            console.log("exiting");
            break;
        }else {
            console.log("invalid input please enter again")
        }
        
    }
}


userInput();