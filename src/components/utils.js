class user {
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getUserSalary = ()=>this.age * 100
    isEli=()=>{
      if(this.age > 18) return true
        return false;
    }
}

user1 = new user('manish', 10, 'india'); // create new instace ( object ) of a class
user2 = new user('ravi', 20, 'india')
user3 = new user('user3', 2, 'india')
console.log(user3.getUserSalary());

// let user1 = {
//     name: 'manish',
//     age: 10,
//     address: 'india',
//     getUserSalary: ()=>{
//         return this.age * 100
//     },
//     isEli(){
//         if(this.age > 18)return true
//         return false
//     },
//     isPassed(){
//         if(this.getUserSalary() > 1000)  return true;
//         else return false
//     }
// }

// let user2 = {
//     name: 'ravi',
//     age: 20,
//     address: 'india',
//     getUserSalary: function(){
//         return this.age * 100
//     },
//     isEli(){
//         if(this.age > 18)return true
//         return false
//     },
//     isPassed(){
//         if(this.getUserSalary() > 1000)  return true;
//         else return false
//     }
// }

// let user3 = {
//     name: 'user3',
//     age: 20,
//     address: 'india',
//     getUserSalary: function(){
//         return this.age * 100
//     },
//     isEli(){
//         if(this.age > 18)return true
//         return false
//     }
// }
// console.log(user1.isEli())


















function name(){

}


let name = new Function(); // new ins


let name = () => {}

