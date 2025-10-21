interface Dashboard{
    FullAccess:()=>void;
    limitedAccess:()=>void;
}
class Admin implements Dashboard{
    FullAccess(){
        console.log("full access on dasboard");
        
    }
    limitedAccess(){
        throw console.error("Admin not limited access");
        
    }

}
class Subadmin implements Dashboard{
    FullAccess(){
        throw console.error("sub Admin not full access");

    } 
    limitedAccess(){
        console.log("subadmin limited access");
        
    }
}

var admin=new Admin();
admin.FullAccess();
