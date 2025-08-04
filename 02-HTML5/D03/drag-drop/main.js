

 window.addEventListener('load', update);//end of load

 /* FLAG */
let moved = false;
let dragged = null;

/* UPDATE FUNCTION */
function update() {
            // get all images then register : dragstart , dragened
            allimages = document.images;
            for (var i = 0; i < allimages.length; i++) {
                allimages[i].removeEventListener("dragstart", startdrag);
                allimages[i].removeEventListener("dragend", enddrag);
                allimages[i].addEventListener('dragstart', startdrag);
                allimages[i].addEventListener('dragend', enddrag);
            }
            // first container
            first = this.document.getElementById('first');
            if (first.children.length == 1){
                first.innerHTML = "<p>Empty</p>";
            }
            priceCalc(first);


            
            first.addEventListener('dragenter', enterdrag);
            first.addEventListener('dragover', overdrag);
            first.addEventListener('dragleave', leavedrag);
            first.addEventListener('drop', dropped);
            
            // second container
            second = this.document.getElementById('second');
            if (second.children.length == 1){
                second.innerHTML += "<p>Empty</p>";
            }
            priceCalc(second);

            
            second.addEventListener('dragenter', enterdrag);
            second.addEventListener('dragover', overdrag);
            second.addEventListener('dragleave', leavedrag);
            second.addEventListener('drop', dropped);


}

/* ITEM FUNCTIONS */
function startdrag(e) {
    dragged = e.target;
    e.dataTransfer.setData('dragged/img',e.target.outerHTML);
}

function enddrag(e) {
    e.preventDefault();

    if(moved){
        let draggedstock = parseInt(dragged.dataset.stock);
        if(!draggedstock) {
            dragged.remove();
        }
        update();
    }

    moved = false;
}

/* SECTION FUNCTIONS */
function dropped(e) {
    // prevent default for browser against drop 
    e.preventDefault();

    if(this.innerHTML.trim().indexOf("<p>Empty</p>") >=0 ){
        this.removeChild(this.getElementsByTagName('p')[0]);
    }

    let sourceStock = parseInt(dragged.dataset.stock);

    // Check if image already exists in target container
    let targetImages = this.getElementsByTagName('img') || [];

    let existingImage = Array.from(targetImages).find(img => img.src === dragged.src);
        
    if(existingImage) {
        // Increase stock of existing image
        existingImage.dataset.stock = (parseInt(existingImage.dataset.stock) + 1).toString();

    }else{
        let newItem = dragged.cloneNode(true);
        newItem.dataset.stock = "1";
        this.innerHTML += newItem.outerHTML;
    }
        

    //decrease stock
    dragged.dataset.stock = (sourceStock - 1).toString();
    moved = true;
    
}

function overdrag(e) {    
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"; 
}

function enterdrag(e) { e.preventDefault(); }

function leavedrag(e) { e.preventDefault(); }

function priceCalc(tag) {
    let stock = Array.from(tag.getElementsByTagName('img'));
            let totalStock = 0
            stock.forEach(img => {
                let imgstock = +(img.dataset.stock);
                let price = +(img.dataset.price);
                totalStock += (imgstock*price);
            })
            let totalTag = tag.getElementsByTagName('div')[0];
            totalTag.innerHTML = `total price: ${totalStock}`;
}