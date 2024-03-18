let guest_list : string [] = ['aliza','batool','kinza','fatima'];
//for (let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\n We invited you on dinner tomorrow.\nThank you\n')
//}
let not_present : string = 'batool';
let new_guest : string = 'baneen';
guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\n We invited you on dinner tomorrow.\nThank you\n')
//}
guest_list.unshift('aeliya','ajiya','laila');
//for(let i=0; i<guest_list.length; i++){
//    console.log('Respectecd Madam ' + guest_list[i] + ',\n We invited you on dinner tomorrow.\nThank you\n')
//}
console.log('\n Unfortunately we can not arrange big table , only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
console.log('Sorry Madam.${remove_guest} You are not invited for dinner.');
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] +',\n Yes you are still invited on dinner tomorrow.\nthank you\n')
}
guest_list.splice(0,2)
console.log(guest_list)