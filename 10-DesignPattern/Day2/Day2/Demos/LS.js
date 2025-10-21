class Limitedacces{
    Limitedacces(){
        console.log("Limited access");
        
    }
}

class FullAccess{
    FullAccess(){
        console.log("Full access");

    }
}

class Admin extends FullAccess{

}
class Subadmin extends Limitedacces{
    
}