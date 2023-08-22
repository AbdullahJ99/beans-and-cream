class item {
    constructor(name, desc, price, url) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.url = url;
    }

    toString() {
        return "[" + this.name + ", " + this.desc + ", " + this.price + ", " + this.url + "]";
    }

}
class orders {
    constructor(array) {
        this.array = array;
    }

    push(x) {
        this.array.push(x);
    }
}
var Tea = [new item("Black Tea", "Strong black tea.", 5, "img/Tea/black.jpg"),
new item("Bubble Tea", "Milk tea with tapioca pearls.", 8, "img/Tea/bubble.jpg"),
new item("Chai Tea", "Spiced tea brewed with soy milk.", 7, "img/Tea/chai.jpg"),
new item("Earl Gray", "Fragrant tea most popular in England.", 6, "img/Tea/earlgray.jpg"),
new item("Ginger Tea", "Tea made from fresh ginger.", 6, "img/Tea/ginger.jpg"),
new item("Green Tea", "Bittersweet, floral tea.", 5, "img/Tea/green.jpg"),
new item("Herbal Tea", "Tea made from varying herbs.", 7, "img/Tea/herbal.jpg"),
new item("Iced Tea", "Unsweetened iced black tea.", 6, "img/Tea/iced.jpg"),
new item("White Tea", "Tea made from white tea fibers.", 7, "img/Tea/white.jpg"),
new item("Yellow Tea", "Tea made using Chinese methods.", 7, "img/Tea/yellow.jpg")];
var Coffee = [new item("Americano", "Diluted espresso.", 6, "img/Coffee/americano.jpg"),
new item("Arabica Coffee", "Strong thick coffee.", 7, "img/Coffee/arabica.jpg"),
new item("Black Coffee", "Your normal cup of joe.", 5, "img/Coffee/black.jpg"),
new item("Cappuccino", "Espresso and steamed milk.", 7, "img/Coffee/capp.jpg"),
new item("Cold Brew Coffee", "Black coffee brewed cold.", 7, "img/Coffee/coldbrew.jpg"),
new item("Espresso", "Strong coffee full of caffeine.", 6, "img/Coffee/espresso.jpg"),
new item("Frappe", "Cold, sweet coffee with milk.", 7, "img/Coffee/frappe.jpg"),
new item("Iced Coffee", "Cold coffee with cream.", 6, "img/Coffee/iced.jpg"),
new item("Latte", "Like Cappuccinos, but more milk.", 7, "img/Coffee/latte.jpg"),
new item("Mocha", "Chocolate-flavored coffee.", 7, "img/Coffee/mocha.jpg")];
var Pastries = [new item("Biscotti", "Double-baked biscuit for dunking.", 2, "img/Pastries/biscotti.jpg"),
new item("Chocolate Biscotti", "Biscotti, but chocolate.", 2, "img/Pastries/biscottichoc.jpg"),
new item("Blondie", "Soft brown sugar dessert bar.", 7, "img/Pastries/blondie.jpg"),
new item("Brownie", "Soft, melty chocolate dessert bar.", 7, "img/Pastries/brownie.jpg"),
new item("Vanilla Cake Pop", "Spherical cake bite on a stick.", 3, "img/Pastries/cakepop.jpg"),
new item("Chocolate Cake Pop", "Chocolate cake bite on a stick.", 3, "img/Pastries/cakepopchoc.jpg"),
new item("Croissant", "Soft, airy, flaky pastry.", 5, "img/Pastries/croissant.jpg"),
new item("Blueberry Muffin", "Soft baked treat made with blueberries.", 7, "img/Pastries/muffinblue.jpg"),
new item("Chocolate Muffin", "Chocolate muffin with chocolate chips.", 7, "img/Pastries/muffinchoc.jpg"),
new item("Raspberry Scone", "Soft Dutch pastry dotted with raspberries.", 4, "img/Pastries/sconerasp.jpg")];
var Merch = [new item("Insulated Bottle", "Keeps drinks cold or warm.", 20, "img/Merch/bottle.jpg"),
new item("Color-changing Mug", "Mug that changes color with heat.", 12, "img/Merch/colormug.jpg"),
new item("B&C Hoodie", "Warm Beans and Cream hoodie.", 32, "img/Merch/hoodie.jpg"),
new item("B&C Sweater", "Sweater with Beans and Cream logo.", 26, "img/Merch/longsleeve.jpg"),
new item("B&C Mug", "Ceramic mug great for coffee.", 7, "img/Merch/mug.jpg"),
new item("B&C Phone Case", "Protective case for an iPhone X.", 12, "img/Merch/phonecase.jpg"),
new item("B&C Pop Socket", "Pop Socket with signature B&C cup.", 15, "img/Merch/popsocket.jpg"),
new item("B&C Socks", "100% cotton Beans and Cream socks.", 12, "img/Merch/socks.jpg"),
new item("B&C Travel Mug", "Mug keeps your coffee warm on the go.", 21, "img/Merch/travelmug.jpg"),
new item("B&C T-Shirt", "Light Beans and Cream T-Shirt.", 21, "img/Merch/tshirt.jpg")];
if (localStorage.getItem("teas") == undefined) {
    localStorage.setItem("teas", JSON.stringify(Tea));
} else {
    Tea = JSON.parse(localStorage.getItem("teas"));
}
if (localStorage.getItem("coffees") == undefined) {
    localStorage.setItem("coffees", JSON.stringify(Coffee));
} else {
    Coffee = JSON.parse(localStorage.getItem("coffees"));
}
if (localStorage.getItem("pastries") == undefined) {
    localStorage.setItem("pastries", JSON.stringify(Pastries));
} else {
    Pastries = JSON.parse(localStorage.getItem("pastries"));
}
if (localStorage.getItem("merch") == undefined) {
    localStorage.setItem("merch", JSON.stringify(Merch));
} else {
    Merch = JSON.parse(localStorage.getItem("merch"));
}
var cart = [];
var wholeOrder = [];

// Functions

window.onload = function () {

    var categoryChange = function () {

        document.getElementById("containerDiv").innerHTML = "";

        var category = document.getElementById("selectionItemCategory").value;
        var count;
        if (category == "Coffee") {
            count = Coffee.length;
        } else if (category == "Tea") {
            count = Tea.length;
        } else if (category == "Pastries") {
            count = Pastries.length;
        } else if (category == "Merch") {
            count = Merch.length;
        }

        for (var i = 0; i < count; i++) {
            var itemDiv = document.createElement("div");
            itemDiv.setAttribute("class", "item");
            itemDiv.setAttribute("id", "div" + i);
            document.getElementById("containerDiv").appendChild(itemDiv);

            var itemTitle = document.createElement("h3");
            var titleText;
            if (category == "Coffee") {
                titleText = document.createTextNode(Coffee[i].name);
            } else if (category == "Tea") {
                titleText = document.createTextNode(Tea[i].name);
            } else if (category == "Pastries") {
                titleText = document.createTextNode(Pastries[i].name);
            } else if (category == "Merch") {
                titleText = document.createTextNode(Merch[i].name);
            }
            itemTitle.appendChild(titleText);

            var itemImage = document.createElement("img");
            if (category == "Coffee") {
                itemImage.setAttribute("src", Coffee[i].url);
            } else if (category == "Tea") {
                itemImage.setAttribute("src", Tea[i].url);
            } else if (category == "Pastries") {
                itemImage.setAttribute("src", Pastries[i].url);
            } else if (category == "Merch") {
                itemImage.setAttribute("src", Merch[i].url);
            }
            itemImage.setAttribute("class", "itemimage");

            var itemDesc;
            if (category == "Coffee") {
                itemDesc = document.createTextNode(Coffee[i].desc);
            } else if (category == "Tea") {
                itemDesc = document.createTextNode(Tea[i].desc);
            } else if (category == "Pastries") {
                itemDesc = document.createTextNode(Pastries[i].desc);
            } else if (category == "Merch") {
                itemDesc = document.createTextNode(Merch[i].desc);
            }

            var blank = document.createElement("br");

            var itemPrice;
            if (category == "Coffee") {
                itemPrice = document.createTextNode("$" + Coffee[i].price + " ");
            } else if (category == "Tea") {
                itemPrice = document.createTextNode("$" + Tea[i].price + " ");
            } else if (category == "Pastries") {
                itemPrice = document.createTextNode("$" + Pastries[i].price + " ");
            } else if (category == "Merch") {
                itemPrice = document.createTextNode("$" + Merch[i].price + " ");
            }

            var itemButton = document.createElement("input");
            itemButton.setAttribute("id", "btn" + i);
            itemButton.setAttribute("name", "btn" + i);
            itemButton.setAttribute("type", "button");
            itemButton.setAttribute("value", "Add to Cart");
            itemButton.addEventListener("click", addToCart_Click);

            document.getElementById("div" + i).appendChild(itemTitle);
            document.getElementById("div" + i).appendChild(itemImage);
            document.getElementById("div" + i).appendChild(itemDesc);
            document.getElementById("div" + i).appendChild(blank);
            document.getElementById("div" + i).appendChild(itemPrice);
            document.getElementById("div" + i).appendChild(itemButton);
        }

    };

    function addToCart_Click() {
        var category = document.getElementById("selectionItemCategory").value;
        var index = this.id.replace("btn", "");
        var addedItem;
        var cartItem;
        if (category == "Coffee") {
            addedItem = Coffee[index];
            console.log(addedItem);
            cartItem = "Coffee " + index;
            console.log(cartItem);
        } else if (category == "Tea") {
            addedItem = Tea[index];
            cartItem = "Tea " + index;
        } else if (category == "Pastries") {
            addedItem = Pastries[index];
            cartItem = "Pastries " + index;
        } else if (category == "Merch") {
            addedItem = Merch[index];
            cartItem = "Merch " + index;
        }
        cart.push(addedItem);
        wholeOrder.push(cartItem);
        document.getElementById("shoppingCart").innerHTML = "";
        var total = 0;
        var tax = 0;
        for (var i = 0; i < cart.length; i++) {
            var item = document.createTextNode("- " + cart[i].name);
            var blank = document.createElement("br");
            document.getElementById("shoppingCart").appendChild(item);
            document.getElementById("shoppingCart").appendChild(blank);
            total = total + cart[i].price;
        }
        tax = total * .06;
        total = total + tax;
        tax = tax.toFixed(2);
        total = total.toFixed(2);
        document.getElementById("tax").innerHTML = "";
        document.getElementById("tax").appendChild(document.createTextNode("Tax: $" + tax));
        document.getElementById("total").innerHTML = "";
        document.getElementById("total").appendChild(document.createTextNode("Total: $" + total));
    }

    $("#btnPay").click(function () {
        if (wholeOrder.length < 1) {
            alert("You didn't order anything yet, you beans-for-brains!");
        } else {
            sessionStorage.removeItem("order");
            sessionStorage.setItem("order", JSON.stringify(wholeOrder));
            window.location.href = "Order.html";
        }
    });

    document.getElementById("selectionItemCategory").onchange = categoryChange;

};