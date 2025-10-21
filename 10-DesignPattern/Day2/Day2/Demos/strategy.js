// templates => wordpress , angular,bootstrap
class WordpressTemplate {
    calcTemplatePrice(details) {
        console.log(`Deatils ${details}`);
        return '20$';


    }
}
class AngularTemplate {
    calcTemplatePrice(details) {
        console.log(`Deatils ${details}`);
        return '30$';


    }
}
class BootstrapTemplate {
    calcTemplatePrice(details) {
        console.log(`Deatils ${details}`);
        return '25$';


    }
}

class SetTemplateStrategy{
    setStrategy(temp){
        this.temp=temp;

    }
    mainCalc(details){
        this.temp.calcTemplatePrice(details);
    }
}

var temp1=new WordpressTemplate();
var temp2=new BootstrapTemplate();
var temp3=new AngularTemplate();
var strategy1=new SetTemplateStrategy();
var details={
    support:'6 month',
    numOfPages:10,
    futureUpdates:true
}

strategy1.setStrategy(temp1);
strategy1.mainCalc(details.numOfPages);

strategy1.setStrategy(temp2);
strategy1.mainCalc(details.numOfPages)

