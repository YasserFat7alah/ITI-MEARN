class YoutubeChannle{
    constructor(){
        this.subscribers=[];
        this.videoTitle="";
    }
    subscribe(sub){
        this.subscribers.push(sub);
    }
    unsubscribe(subscriber){

       this.subscribers=this.subscribers.filter((sub)=>sub!=subscriber);
    }
    addNewVideo(title){

        this.videoTitle=title;
        this.notifyAllSubscribers();
    }
    notifyAllSubscribers(){

        this.subscribers.forEach((sub)=>sub.update(this));
    }
}


class User {
    update(channel){
        console.log(`New video Added ${channel.videoTitle}`);
        
    }
}

var MERNChannel=new YoutubeChannle();
var Ali=new User();
var Tarek=new User();
var sara=new User();
MERNChannel.subscribe(Ali);
MERNChannel.subscribe(Tarek);
MERNChannel.subscribe(sara);
MERNChannel.addNewVideo("Angular Service");
MERNChannel.unsubscribe(sara);
MERNChannel.addNewVideo("JS Promises");
