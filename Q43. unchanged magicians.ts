let magician : string[] =['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function copyArry(arr:string[]){

    return [...arr]

}

function make_great (magicianArry:string[] ){

    for(let i=0; i<magicianArry.length; i++){

           magicianArry[i] = ' The Great ' + magicianArry[i]
    }

}

function show_magicians(magicians: string[]){

    magicians.forEach(Element => {

        console.log(Element);

    });
}

const copyMacgicianArry = copyArry(magician);

make_great(copyMacgicianArry);

console.log("This is my original array:");

show_magicians(magician);

console.log("\n\n This is my modified copy of the array:");

show_magicians(copyMacgicianArry)