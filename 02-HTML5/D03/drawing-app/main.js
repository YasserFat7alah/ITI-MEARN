window.addEventListener('load', ()=>{
    // Canvas
    let canvas = document.getElementById('drawcanvas');
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;

    let context = canvas.getContext('2d');
    let drawingColor = localStorage.getItem('drawingColor') || 'black';
    let radius = localStorage.getItem('radius') || 10;
    let colorsArr = ['black', 'red', 'green', 'blue',
                     'grey', 'yellow', 'magenta', 'purple',
                     'cyan', 'lightsalmon'
                    ];
    let colorbar = document.getElementById('colorbar');

    let changeColor = (e) => {
        let oldColor =document.getElementsByClassName('active')[0];
        if(oldColor){
            oldColor.classList.remove('active');
        }
        let newColor = e.target.style.backgroundColor;
        context.fillStyle = newColor ;
        e.target.classList.add('active');
        localStorage.setItem('drawingColor', newColor);
    }

    colorsArr.forEach((color)=> {
        let clrdiv = document.createElement('div');
        clrdiv.style.backgroundColor = color;
        clrdiv.addEventListener('click' , changeColor);
        clrdiv.classList.add('color');

        if (color == drawingColor)  clrdiv.classList.add('active');

        colorbar.appendChild(clrdiv);
    })
    context.fillStyle = drawingColor ;

    let draw =false;

    let inc = document.getElementById('inc');
    let dec = document.getElementById('dec');
    let radslot = document.getElementById('radius');
    radslot.innerHTML = radius;


    /* increase radius */
    inc.addEventListener('click', () => {
        if (radius < 50) {
            radius++;
            radslot.innerHTML = radius;
            localStorage.setItem('radius', radius);
        }
    });
    /* decrease radius */
    dec.addEventListener('click', () => {
        if (radius > 0) {
            radius--;
            radslot.innerHTML = radius;
            localStorage.setItem('radius', radius);
        }
    });

    
    canvas.addEventListener('mousedown', e => draw= true);
    canvas.addEventListener('mouseup', e => draw =false);
    // draw circle
    canvas.addEventListener('mousemove', e => {
        if (draw) {
            context.beginPath();
            context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
            context.fill();
            context.closePath();
        }
    });
});