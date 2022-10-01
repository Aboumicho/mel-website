export const getCustomer = (parentValue, args) =>{
    
    //Hardcoded data FETCH
    const customers = [
    {id: '1' , name: 'John Doe', email: 'jdoe@gmail.com' , age: 30 }
]

    //FOLDER data-sources
    for(let i=0; i<customers.length; i++){
        if(customers[i].id == args.id){
            return customers[i];
        }
    }
}