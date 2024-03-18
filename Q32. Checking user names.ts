let current_users: string[] =['ajiya','baneen','fatima','ammarah','admin'];
let new_users: string[] =['Bilal','TaHa','Dawood','fatima','ajiya'];
new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLocaleLowerCase();
        if (current_users.map(c_user => c_user.toLocaleLowerCase().includes(lowerCase))){
            console.log(`The username ${newUsername} is not available. please write a different username`);
        }
        else{
            console.log(`The username ${newUsername} is available.`);
        }
    });
