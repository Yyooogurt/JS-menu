let pizzas = [];
let basket =[];
let result = 0;
let count = 18;
  class Pizza{
    constructor(id, name, price, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        pizzas.push(this);
       
    }
  }
// Pizzas
new Pizza(0, "Маргарита", 125, "/img/margo.webp");
new Pizza(1, "Фунги", 145, "/img/chicken.webp");
new Pizza(2, "Донна", 145, "/img/gavai.webp");
new Pizza(3, "Мюнхен", 165, "/img/meat.webp");
new Pizza(4, "Пепперони", 165, "/img/peperoni.webp");
new Pizza(5, "Вайт пепп", 165, "/img/simena.webp");
new Pizza(6, "Гаваи 2.0", 165, "/img/margo.webp");
new Pizza(7, "Четыре сыра", 175, "/img/cheese.webp");
new Pizza(8, "Парма", 175, "/img/margo.webp");
new Pizza(9, "Четыре мяса ", 195, "/img/margo.webp");
new Pizza(10, "Бирне", 195, "/img/margo.webp");
new Pizza(11, "Сальмоне", 215, "/img/margo.webp");
// Coctails 
new Pizza(12, "Апероль", 90, "/img/aperol.jpeg");
new Pizza(13, "Мохито", 90, "/img/mohito.jpeg");
new Pizza(14, "Джин тоник", 125, "/img/gin.jpeg");
new Pizza(15, "Секс на пляже", 90, "/img/sex.jpeg");
new Pizza(16, "Маргарита", 90, "/img/margo.jpeg");
new Pizza(17, "Текила санрайз", 90, "/img/tecila.jpeg");
new Pizza(18, "Негрони", 90, "/img/negroni.jpeg");


// --------------------------    Render catalog    --------------------------
function renderCatalog(){
  pizzas.forEach(pizza => {
    let div = `<div id="pizza_${pizza.id}" class="card mb-3 mb-sm-0 col-sm-6 col-lg-4 col-xl-3">
    <div class="card_block">
        <p class="card_name">${pizza.name}</p>
        <button id="delete" class="delete" onclick="deleteCart(${pizza.id})"> <i class="fas fa-times"></i></button> 
    </div>
    <img class="card_image" src="${pizza.image}" alt="">
    <div class="card_block">
    <div class="card_item">
      <p class="card_price">${pizza.price} грн</p>
      <i onclick="addCart(${pizzas.price, pizza.id})" class="fas fa-plus"></i>
      </div>
      </div>
    </div>`;
    document.getElementById("menu_cards").innerHTML += div;
  });
}
renderCatalog();

// --------------------------    Show Total Price    --------------------------
function renderPrice(result){
    document.getElementById("navbar_price").innerHTML = result; 
}

// --------------------------    Open Basket    --------------------------
function openBasket(){
  let basket = document.getElementById("basket");
  if (basket.style.visibility == "hidden") {
    basket.style.visibility = "visible";
  } else {
    basket.style.visibility = "hidden";
  }
}

// --------------------------    Create New Product    --------------------------
function createNewCart(){
  let input_name = document.getElementById("input_name").value;
  let input_price = parseInt(document.getElementById("input_price").value);
  count = count + 1;
  console.log(count);
  new Pizza(count, input_name, input_price, "/img/margo.webp");
  document.getElementById("menu_cards").innerHTML = "";
  renderCatalog();
}

// --------------------------    Open Menu     --------------------------
function openMenu(){
  let burger = document.getElementById("burger");
  if (burger.style.visibility == "hidden") {
    burger.style.visibility = "visible";
  } else {
    burger.style.visibility = "hidden";
  }
}
// --------------------------    Check User    --------------------------
function onlyOne(checkbox){
  let id = checkbox.id;
  if(id == "user"){
    console.log("User");
      if(document.getElementById("user").hasAttribute("checked") == true){
        let  button = document.querySelectorAll(".menu_cards .card_block button");
        button.forEach(function(but) {
          but.style.visibility="hidden";
        });
        document.getElementById("form").style.visibility="hidden";
      }else{
        console.log("user unchecked");
      }
  }else if (id = "admin"){
    console.log("Admin");
      if(document.getElementById("user").hasAttribute("checked") == true){
        console.log("Admin checked");
        let  button = document.querySelectorAll(".menu_cards .card_block button");
        button.forEach(function(but) {
          but.style.visibility="visible";
        });
        document.getElementById("form").style.visibility="visible";
      }else{
        console.log("admin unchecked");
      }
  }
}
onlyOne(document.getElementById("user"));

// --------------------------    Add product to basket    --------------------------
function addCart(id){
      console.log(pizzas[id]);
      basket.push(pizzas[id]);
      let div2 = `
      <div id="basket_${pizzas[id].id}" class="card ">
          <div class="card_block">
              <p class="card_name">${pizzas[id].name}</p> 
              <p class="card_price">${pizzas[id].price} грн</p>
              <button id="delete" onclick="deleteCartFromBasket(${pizzas[id].id})"> <i class="fas fa-times"></i></button> 
          </div>
          
      </div>`;
      document.getElementById("basket").innerHTML += div2;
      let navbar = parseFloat(document.getElementById("navbar_price").textContent);
      result = parseInt(navbar + pizzas[id].price);
      renderPrice(result);
  }
  
  // --------------------------    Delete product from basket    --------------------------
function deleteCartFromBasket(id){
    let bas = document.getElementById("basket");
    let piz = document.getElementById(`basket_${id}`);
    bas.removeChild(piz);
    basket.splice(id,1);
    let navbar = parseFloat(document.getElementById("navbar_price").textContent);
    result = result - pizzas[id].price;
    renderPrice(result);
}

// --------------------------    Hide product from catalog    --------------------------
function deleteCart(id){
  let menu = document.getElementById("menu_cards");
  let piz = document.getElementById(`pizza_${id}`);
  menu.removeChild(piz);
  pizzas.splice(id,1);
}

// --------------------------    Search Cart    --------------------------
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

