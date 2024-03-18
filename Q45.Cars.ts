function carDetails (manufacture: string, modelName: string, ...additionalInfo){

    const car ={manufacture, modelName,...Object.fromEntries(additionalInfo)};

    return car;

}

const mycarDetails = carDetails('Toyota','Corolla', ['Color', 'Black'],['Year',2023]);

console.log(mycarDetails);