var data = JSON.parse(localStorage.getItem('product'))
     document.querySelector("#counter").innerText="Total Products : "+products.length;
     function displayData(data){
        
      data.forEach((data,index) => {
        document.querySelector("#container").innerHTML=""
          var box = document.createElement('div');
          box.setAttribute('class','box')

          var img = document.createElement("img");
          img.src = data.image

          var name = document.createElement("h3");
          name.innerText = data.name

          var price = document.createElement('p')
          price.innerText = data.price

          var category = document.createElement('p');
          category.innerText = data.category

          var gender = document.createElement('p');
          gender.innerText = data.gender

          var sold=document.createElement("button");
            sold.innerText="sold";
            if(data.sold=="true")
            {
                sold.style.color="red"
            }else{
                sold.style.color="green"
            }
            box.append(img,name,price,category,gender,sold)
            document.querySelector('#container').append(box)


      });

     }
     console.log(data)
     displayData(data)