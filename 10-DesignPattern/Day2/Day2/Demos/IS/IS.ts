interface FullAccess{
    fullAcces():void;

}
interface LimitedAccess{
    limitedAccess():void;
}
class Admin implements FullAccess{
    fullAcces(): void {
        console.log("Full access");
        
    }
}
class SubAdmin implements LimitedAccess{
    limitedAccess(): void {
        console.log("limited access");
        
    }
}

var sub=new SubAdmin();
sub.limitedAccess();

var admin=new Admin();
admin.fullAcces();