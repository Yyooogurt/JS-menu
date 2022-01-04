let pizzas = [];
  class Pizza{
    constructor(id, name, price, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        pizzas.push(this);
       
    }
  }
new Pizza(1, "Маргарита", 125, "/img/margo.webp");
new Pizza(2, "Фунги", 145, "/img/chicken.webp");
new Pizza(3, "Донна", 145, "/img/gavai.webp");
new Pizza(4, "Мюнхен", 165, "/img/meat.webp");
new Pizza(5, "Пепперони", 165, "/img/peperoni.webp");
new Pizza(6, "Вайт пепп", 165, "/img/simena.webp");
new Pizza(7, "Гаваи 2.0", 165, "/img/margo.webp");
new Pizza(8, "Четыре сыра", 175, "/img/cheese.webp");
new Pizza(9, "Парма", 175, "/img/margo.webp");
new Pizza(10, "Четыре мяса ", 195, "/img/margo.webp");
new Pizza(11, "Бирне", 195, "/img/margo.webp");
new Pizza(12, "Сальмоне", 215, "/img/margo.webp");



function renderCatalog(){
  pizzas.forEach(pizza => {
    let div = `<div id="pizza_${pizza.id}" class="card mb-3 mb-sm-0 col-sm-6 col-lg-4 col-xl-3">
    <div class="card_block">
        <p class="card_name">${pizza.name}</p>
        <button id="delete" onclick="deleteCart(${pizza.id})"> <i class="fas fa-times"></i></button> 
    </div>
    <img class="card_image" src="${pizza.image}" alt="">
    <div class="card_block">
    <div class="card_item">
      <p class="card_price">${pizza.price} грн</p>
      <i onclick="addCart(${pizza.price},${pizza.id})" class="fas fa-plus"></i>
      </div>
      </div>
    </div>`;
    document.getElementById("menu_cards").innerHTML += div;
  });
}
renderCatalog();


function openBasket(){
    let basket = document.getElementById("basket");
    if (basket.style.visibility == "hidden") {
      basket.style.visibility = "visible";
    } else {
      basket.style.visibility = "hidden";
    }
}

function addCart(price, id){
    let navbar = parseFloat(document.getElementById("navbar_price").textContent);
    let result = price + navbar;
    document.getElementById("navbar_price").innerHTML = result; 
    let div2 = `<div id="pizza_${pizzas[id].id}" class="card ">
    <div class="card_block">
        <p class="card_name">${pizzas[id].name}</p>
        <button id="delete" onclick="deleteCartFromBasket(${pizzas[id].id})"> <i class="fas fa-times"></i></button> 
    </div>
      <p class="card_price">${pizzas[id].price} грн</p>
      <i onclick="addCart(${pizzas[id].price},${pizzas[id].id})" class="fas fa-plus"></i>
      </div>`;
      document.getElementById("basket").innerHTML += div2;
  }
  function deleteCartFromBasket(id){
    let basket = document.getElementById("basket #");
    console.log(basket.querySelector("#pizza_"+id));
   // document.getElementById("pizza_" + id).style.display="none";
  }
function deleteCart(id){
  document.getElementById("pizza_" + id).style.display="none";
}

// Search Cart
let search = document.getElementById("search");
search.addEventListener("click", function() {
  let value = document.getElementById("input").value;
   pizzas.forEach(pizza => {
     if(value == 0){
      document.getElementById("pizza_" + pizza.id).style.display="block";
     }else{
        if(value == pizza.name){
          document.getElementById("pizza_" + pizza.id).style.display="block";
        }else {
          document.getElementById("pizza_" + pizza.id).style.display="none";
        } 
     }
   });
});



// (томатный соус, моцарелла, черри)

// (сливочный соус, моцарелла, куриная грудка, грибы)

// (томатный соус, моцарелла, ветчина, куриная грудка, грибы)

// (томатный соус, моцарелла, пепперони, колбаски охотничьи, синий лук, дижонская горчица)

// (томатный соус, моцарелла, пепперони)

// (сливочный соус, моцарелла, дорблю, пепперони)

// (сливочный соус, моцарелла, дорблю, куриная грудка, ветчина, ананас, груша)

// (сливочный соус, моцарелла, дорблю, эмменталь, пармезан)

// (томатный соус, моцарелла, пармезан, прошутто, оливковое масло, черри, руккола)

// (томатный соус, моцарелла, ветчина, куриная грудка, пепперони, прошутто, руккола)

// (сливочный соус, моцарелла, дорблю, прошутто, груша, руккола)

// (сливочный соус, моцарелла, слабосоленый лосось, сыр Филадельфия, оливковое масло, руккола)