window.onload = function() {
    displayCart();
};

// FILTER
function filterProducts(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// ADD TO CART
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// DISPLAY CART + TOTAL
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cartItems");
    let total = 0;

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerText = item.name + " - ₹" + item.price;

        total += item.price;

        li.onclick = function() {
            removeItem(index);
        };

        cartList.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// CHECKOUT SYSTEM
function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉");

    localStorage.removeItem("cart");
    displayCart();
}