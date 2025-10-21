class JSONReader{
    readjson(){
        console.log("Read json file");
        
    }
}
class XMLReader{
    readxml(){
        console.log("Read xml file");
        
    }
}

class fileReaderAdapter{
    constructor(reader){
        this.reader=reader;

    }
    readFile(){
        if(this.reader instanceof  JSONReader){
           return this.reader.readjson();
        }

        else if(this.reader instanceof XMLReader){
            return this.reader.readxml();
        }
    }
}

var jsonfile=new JSONReader();
var fileadapter=new fileReaderAdapter(jsonfile);
fileadapter.readFile();