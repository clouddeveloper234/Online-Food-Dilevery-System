let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    let totalElement = document.getElementById("total-price");
    
    cartList.innerHTML = "";
    cart.forEach((product, index) => {
        let listItem = document.createElement("li");
        listItem.innerText = `${product.item} - $${product.price}`;
        cartList.appendChild(listItem);
    });

    totalElement.innerText = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Order placed successfully! Total: $${totalPrice}`);
        cart = [];
        totalPrice = 0;
        updateCart();
    }
}
