const container = document.querySelector('.booking-form');

const ecoPlus = document.querySelector('.economy-plus');
const ecoMinus = document.querySelector('.economy-minus');

const firPlus = document.querySelector('.firstClass-plus');
const firMinus = document.querySelector('.firstClass-minus');

const firValue = document.getElementById('firstClass-value');
const ecoValue = document.getElementById('economy-value');

const subtotalUI = document.querySelector('.subtotal');
const vatUI = document.querySelector('.vat');
const totalUI = document.querySelector('.total');

const submit = document.querySelector('.submit');

const target = document.querySelector('.target');
const confirmation = document.querySelector('.confirmation');


const init = function(){
    
    firValue.value = 0;
    ecoValue.value = 0;
    subtotalUI.textContent = 0;
    vatUI.textContent = 0;
    totalUI.textContent = 0;
}
const updateUI = function(){
    const PriceOfFirstClass = 150;
    const PriceOfEconomy = 100;
    let subTotal = 0;
    if(ecoValue.value>=0){
        subTotal += +(ecoValue.value)*PriceOfEconomy;
    
    }
    if(firValue.value>=0){
        subTotal += +(firValue.value)*PriceOfFirstClass;
    
    }
    subtotalUI.textContent = subTotal;
    vatUI.textContent = subTotal*.1;
    totalUI.textContent = subTotal+ (subTotal*.1);
}

const changeQuantity = function(flag,from){
    
    let quantity ;
    if(from == 'eco'){
        quantity = +(ecoValue.value);
    }else if(from == 'first'){
        quantity = +(firValue.value);
    }
    if(flag == 'inc'){
        if(quantity<0){
            quantity=1;
        }else{
            quantity++;
            
        }
    }else if(flag == 'dec'){
        quantity--;
        if(quantity<0) return;
    }
    if(from == 'eco'){
        ecoValue.value = quantity;
    }else if(from == 'first'){
        firValue.value = quantity;
    }
    
    updateUI();
    }


init();

ecoPlus.addEventListener('click',function(e){
 
    changeQuantity('inc','eco');

});

ecoMinus.addEventListener('click',function(e){

    changeQuantity('dec','eco');
    
});

firPlus.addEventListener('click',function(e){

    changeQuantity('inc','first');
});

firMinus.addEventListener('click',function(e){

    changeQuantity('dec','first');
});

submit.addEventListener('click',function(e){
//    console.log(e);
    if(ecoValue.value > 0 || firValue.value > 0){
        target.style.display = 'none';  
        confirmation.insertAdjacentHTML('afterbegin',`<h4>Thank You, Mr.X!</h4><h4>For choosing us and being so awesome all at once. </h4><h3>Your Total bill is $${totalUI.textContent}.</h3><h4>You can collect additional information from nearest counter.</h4>`);
    }
    
});
//
//ecoMinus.addEventListener('click',function(e){
//    
//});