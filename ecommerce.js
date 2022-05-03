function user(name,category,image,price,gender,sold){
    this.name = name,
    this.category = category,
    this.image = image,
    this.price = price,
    this.gender = gender,
    this.sold = sold
 }

 let product = JSON.parse(localStorage.getItem('product')) || [];
 document.querySelector('form').addEventListener('submit',function(){
     event.preventDefault()
     let newObj = new user(document.querySelector('#product').value,document.querySelector('#catogry').value,document.querySelector('#url').value,document.querySelector('#price').value,document.querySelector('#select').value,document.querySelector('#check').value,)

  product.push(newObj)
  alert('Item added successfully')
localStorage.setItem('product',JSON.stringify(product))
 window.location.href = 'admin.html'
 })
console.log(product)