let productInfo = [,,];

function setProductInfo(id) {
    sessionStorage.setItem('productId', id);
    sessionStorage.setItem('productName', document.getElementById('pn' + id).innerHTML);
    sessionStorage.setItem('productImgSrc', 'img/'+id+'.jpg');
}

function fillContent() {
    document.getElementById('product-name').innerHTML = sessionStorage.getItem('productName');
    document.getElementById('product-photo').src = sessionStorage.getItem('productImgSrc');
}