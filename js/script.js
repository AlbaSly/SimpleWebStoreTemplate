var prize = 0.0;
var amount = 1;
var total = 0.0;

function setProductInfo(id) {
    sessionStorage.setItem('productId', id);
    sessionStorage.setItem('productName', document.getElementById('pn' + id).innerHTML);
    sessionStorage.setItem('productImgSrc', 'img/'+id+'.jpg');
    sessionStorage.setItem('productPrize', document.getElementById('pp' + id).innerHTML);
}

function fillContent() {
    document.getElementById('product-name').innerHTML = sessionStorage.getItem('productName');
    document.getElementById('product-photo').src = sessionStorage.getItem('productImgSrc');
    document.getElementById('total').innerHTML = sessionStorage.getItem('productPrize');
    prize = parseFloat(sessionStorage.getItem('productPrize').replace('$', ''));
    total = prize;
}

function setTotal() {
    amount = document.getElementById('amount').value;
    total = prize * (amount == NaN ? 0 : amount);
    document.getElementById('total').innerHTML = '$' + total;
}

function showDetailedMessage() {
    alert('ITEM: ' + sessionStorage.getItem('productName') + 'T-SHIRT\nAMOUNT: ' + amount + '\nTOTAL: $' + total);
}