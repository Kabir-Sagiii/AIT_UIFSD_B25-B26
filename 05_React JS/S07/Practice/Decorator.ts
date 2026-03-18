function Logger(target:any,propertyName:string,descriptor: PropertyDescriptor){

    console.log(target, " ", propertyName,descriptor)
}

class User {
    @Logger
    getUser(){
        console.log("user data")
    }
}