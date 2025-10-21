class Dashboard {
    fullaccess() {
        // console.log("full access for member");

    }
    limitedAccess() {
        // console.log("limited access for member");

    }
}

class Admin extends Dashboard {
    fullaccess() {
        console.log("full access for member");

    }
}
class SubAdmin extends Dashboard{
    limitedAccess(){
        console.log("limited access for member");

    }
}