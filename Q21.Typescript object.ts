interface item {
    name:string
    price:number
}
// create two object 
const book: item ={
    name:'ESSENTIAL TYPESCRIPT',
    price:550
}
const apple: item ={
    name: 'OXFORD ENGLISH',
    price:350
}
console.log(`book name: ${book.name}, price: ${book.price}`)
console.log(`apple name: ${apple.name}, price: ${apple.price}`)