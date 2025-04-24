const tinder = new Object()
tinder.id = 1;
tinder.name = "pratham"
tinder.isLogin = false

console.log(tinder);

const regularUser = {
    email : "somegami.com",
    fullname : {
        username : {
            firstname : "takshvi",
            lastname : "Gehlot"
        }
    }
}
console.log(regularUser.fullname.username.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({ },obj1,obj2) 
const obj4 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        mail : "some1@gmail.com"
    },
    {
        id : 1,
        mail : "some1@gmail.com"
    },
    {
        id : 1,
        mail : "some1@gmail.com"
    }
]

console.log(Object.keys(users));