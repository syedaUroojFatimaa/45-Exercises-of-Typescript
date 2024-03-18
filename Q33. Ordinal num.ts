let numbers: number[] =[1,2,3,4,5,6,7,8,9];

for(let num of numbers){

    let ordinaEnding:string;

    if(num ===1){
        ordinaEnding = "st";
    
    }else if(num ===2){
        ordinaEnding = "nd";

    }else if(num === 3){
        ordinaEnding = "rd";

    }else{
        ordinaEnding = "th";
    }

    console.log(`${num}${ordinaEnding}`);

}