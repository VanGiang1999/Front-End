var listProductApi = "http://localhost:3000/lists";

function start(){
    getListProduct(renderProduct);
    handleCreateForm();
}

start();

function getListProduct(callback){
  fetch(listProductApi)
  .then(function(response){
    return response.json();
  })
  .then(callback)
}

function createProduct(data, callback){
    var options ={
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    };
    fetch(listProductApi, options)
    .then(function(response){
        return response.json();
    })
    .then(function(){
        getListProduct(renderProduct);
    });
}

function handleDeleteProduct(id){
    var options ={
        method: "DELETE",
        headers:{
            'Content-Type': 'application/json'
        }
    };
    fetch(listProductApi + "/" + id, options)
    .then(function(response){
        return response.json();
    })
    .then(function(){
        getListProduct(renderProduct);
    });
}

function renderProduct(lists){
   var listProduct = document.querySelector("#list-product");
   var htmls = lists.map(function(list){
    return `
     <li>${list.productName}</li>
     <li>${list.productSummary}</li>
     <button onclick="handleDeleteProduct(${list.id})">Xóa</button>
     `
   });
   listProduct.innerHTML = htmls.join();    
}

function handleCreateForm(){
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function(e){
        e.preventDefault()
        var productName = document.querySelector('input[name="productName"]').value;
        var productSummary = document.querySelector('input[name="productSummary"]').value;
        var formData = {
            productName: productName,
            productSummary: productSummary
        }
        createProduct(formData,function(){
             getListProduct(renderProduct);
        })
    }
}