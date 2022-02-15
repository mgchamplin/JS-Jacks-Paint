function configureListeners() {
    var images = document.getElementsByTagName('img');    

     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)        
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    document.getElementById('ppg').textContent = '';
    document.getElementById('color').textContent = '';

    event.preventDefault();    
}

function changeImage(elementId) {
    let image = document.getElementById('imgDisplay');
    image.src = elementId.src;
}

function getProductInfo(partNumber) {
    switch (partNumber) {
        case 'pn1':           
            updatePrice('Lime Green', '$19.99')           
            break;           
        case 'pn2':
            updatePrice('Medium Brown', '$12.99')     
            break;            
        case 'pn3':
            updatePrice('Royal Blue', '$11.99')   
            break;   
        case 'pn4':        
            updatePrice('Bright Red', '$14.99')   
            break;   
        case 'pn5':
            updatePrice('Solid White', '$9.99')              
            break;   
        case 'pn6':
            updatePrice('Solid Black', '$15.99')            
            break;   
        case 'pn7':    
            updatePrice('Medium Blue', '$8.99')        
            break;   
        case 'pn8':      
            updatePrice('Light Purple', '$16.99')         
            break;   
        case 'pn9':                     
            updatePrice('Bright Yellow', '$17.99')   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        document.getElementById('ppg').textContent = price;
        document.getElementById('color').textContent = colorName;
    }
    
}
