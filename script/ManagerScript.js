class item {
    constructor(name, desc, price, url) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.url = url;
    }
    price() {
        return this.price;
    }
    name() {
        return this.name;
    }

    toString() {
        return "[" + this.name + ", " + this.desc + ", " + this.price + ", " + this.url + "]";
    }

}

var Tea = [new item("Black Tea", "Strong black tea.", 5, "../img/Tea/black.jpg"),
new item("Bubble Tea", "Milk tea with tapioca pearls.", 8, "../img/Tea/bubble.jpg"),
new item("Chai Tea", "Spiced tea brewed with soy milk.", 7, "../img/Tea/chai.jpg"),
new item("Earl Gray", "Fragrant tea most popular in England.", 6, "../img/Tea/earlgray.jpg"),
new item("Ginger Tea", "Tea made from fresh ginger.", 6, "../img/Tea/ginger.jpg"),
new item("Green Tea", "Bittersweet, floral tea.", 5, "../img/Tea/green.jpg"),
new item("Herbal Tea", "Tea made from varying herbs.", 7, "../img/Tea/herbal.jpg"),
new item("Iced Tea", "Unsweetened iced black tea.", 6, "../img/Tea/iced.jpg"),
new item("White Tea", "Tea made from white tea fibers.", 7, "../img/Tea/white.jpg"),
new item("Yellow Tea", "Tea made using Chinese methods.", 7, "../img/Tea/yellow.jpg")];
var Coffee = [new item("Americano", "Diluted espresso.", 6, "../img/Coffee/americano.jpg"),
new item("Arabica Coffee", "Strong thick coffee.", 7, "../img/Coffee/arabica.jpg"),
new item("Black Coffee", "Your normal cup of joe.", 5, "../img/Coffee/black.jpg"),
new item("Cappuccino", "Espresso and steamed milk.", 7, "../img/Coffee/capp.jpg"),
new item("Cold Brew Coffee", "Black coffee brewed cold.", 7, "../img/Coffee/coldbrew.jpg"),
new item("Espresso", "Strong coffee full of caffeine.", 6, "../img/Coffee/espresso.jpg"),
new item("Frappe", "Cold, sweet coffee with milk.", 7, "../img/Coffee/frappe.jpg"),
new item("Iced Coffee", "Cold coffee with cream.", 6, "../img/Coffee/iced.jpg"),
new item("Latte", "Like Cappuccinos, but more milk.", 7, "../img/Coffee/latte.jpg"),
new item("Mocha", "Chocolate-flavored coffee.", 7, "../img/Coffee/mocha.jpg")];
var Pastries = [new item("Biscotti", "Double-baked biscuit for dunking.", 2, "../img/Pastries/biscotti.jpg"),
new item("Chocolate Biscotti", "Biscotti, but chocolate.", 2, "../img/Pastries/biscottichoc.jpg"),
new item("Blondie", "Soft brown sugar dessert bar.", 7, "../img/Pastries/blondie.jpg"),
new item("Brownie", "Soft, melty chocolate dessert bar.", 7, "../img/Pastries/brownie.jpg"),
new item("Vanilla Cake Pop", "Spherical cake bite on a stick.", 3, "../img/Pastries/cakepop.jpg"),
new item("Chocolate Cake Pop", "Chocolate cake bite on a stick.", 3, "../img/Pastries/cakepopchoc.jpg"),
new item("Croissant", "Soft, airy, flaky pastry.", 5, "../img/Pastries/croissant.jpg"),
new item("Blueberry Muffin", "Soft baked treat made with blueberries.", 7, "../img/Pastries/muffinblue.jpg"),
new item("Chocolate Muffin", "Chocolate muffin with chocolate chips.", 7, "../img/Pastries/muffinchoc.jpg"),
new item("Raspberry Scone", "Soft Dutch pastry dotted with raspberries.", 4, "../img/Pastries/sconerasp.jpg")];
var Merch = [new item("Insulated Bottle", "Keeps drinks cold or warm.", 20, "../img/Merch/bottle.jpg"),
new item("Color-changing Mug", "Mug that changes color with heat.", 12, "../img/Merch/colormug.jpg"),
new item("B&C Hoodie", "Warm Beans and Cream hoodie.", 32, "../img/Merch/hoodie.jpg"),
new item("B&C Sweater", "Sweater with Beans and Cream logo.", 26, "../img/Merch/longsleeve.jpg"),
new item("B&C Mug", "Ceramic mug great for coffee.", 7, "../img/Merch/mug.jpg"),
new item("B&C Phone Case", "Protective case for an iPhone X.", 12, "../img/Merch/phonecase.jpg"),
new item("B&C Pop Socket", "Pop Socket with signature B&C cup.", 15, "../img/Merch/popsocket.jpg"),
new item("B&C Socks", "100% cotton Beans and Cream socks.", 12, "../img/Merch/socks.jpg"),
new item("B&C Travel Mug", "Mug keeps your coffee warm on the go.", 21, "../img/Merch/travelmug.jpg"),
new item("B&C T-Shirt", "Light Beans and Cream T-Shirt.", 21, "../img/Merch/tshirt.jpg")];
class orders {
    constructor(order) {
        this.order = order;
    }
}
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




$(document).ready(function () {

    //Manager Page

    $("[value=None]").attr("selected", "true");
    $("#containerDiv").hide();

    var actionChange = function () {

        $("[value=None]").hide();
        $("#containerDiv").show();
        $("#containerDiv").html("");

        var category = $("#selectionManagerAction").val();

        if (category == "Add") {
            $("#containerDiv").append("<h1 id='title'>Add an Item</h1>")
                .append("<label class='mainLabel'>Item Category:</label><br /><select id='itemCategory'><option value = 'Tea'>Tea</option><option value='Coffee'>Coffee</option><option value='Pastries'>Pastries</option><option value='Merch'>Merch</option></select><span></span><br />")
                .append("<label class='mainLabel'>Item Name:</label><input type='text' id='itemName' name='itemName'><span></span><br />")
                .append("<label class='mainLabel'>Item Description:</label><textarea id='itemDesc' name='itemDesc'></textarea><span></span><br />")
                .append("<label class='mainLabel'>Item Price:</label><input type='number' id='itemPrice' name='itemPrice'><span></span><br />")
                .append("<label class='mainLabel'>Item URL:</label><input type='text' id='itemURL' name='itemURL'><span></span><br />")
                .append("<button id='addItem'>Add Item</button><br />");
            $("#addItem").click(function () {
                var category = $("#itemCategory").val();
                var name = $("#itemName").val();
                var desc = $("#itemDesc").val();
                var price = Number($("#itemPrice").val());
                var url = $("#itemURL").val();
                var canSubmit = true;
                if (name == "") {
                    $("#itemName").next().text("Please enter a name.");
                    canSubmit = false;
                } else {
                    $("#itemName").next().text("");
                }
                if (desc == "") {
                    $("#itemDesc").next().text("Please enter a description.");
                    canSubmit = false;
                } else {
                    $("#itemDesc").next().text("");
                }
                if (price == "") {
                    $("#itemPrice").next().text("Please enter a price.");
                    canSubmit = false;
                } else {
                    $("#itemPrice").next().text("");
                }
                if (url == "") {
                    $("#itemURL").next().text("Please enter a URL.");
                    canSubmit = false;
                } else {
                    $("#itemURL").next().text("");
                }
                if (canSubmit) {
                    if (category == "Tea") {
                        Tea.push(new item(name, desc, price, url));
                        localStorage.setItem("teas", JSON.stringify(Tea));
                    } else if (category == "Coffee") {
                        Coffee.push(new item(name, desc, price, url));
                        localStorage.setItem("coffees", JSON.stringify(Coffee));
                    } else if (category == "Pastries") {
                        Pastries.push(new item(name, desc, price, url));
                        localStorage.setItem("pastries", JSON.stringify(Pastries));
                    } else if (category == "Merch") {
                        Merch.push(new item(name, desc, price, url));
                        localStorage.setItem("merch", JSON.stringify(Merch));
                    }
                    alert("Item added!");
                    $("#itemName").val("");
                    $("#itemDesc").val("");
                    $("#itemPrice").val("");
                    $("#itemURL").val("");
                } else {
                    alert("Please fill out the required fields before continuing.");
                }
            });
        } else if (category == "Modify") {
            $("#containerDiv").append("<h1>Modify an Item</h1>")
                .append("<select id='selectionItemModify'><optgroup label='Tea'></optgroup><optgroup label='Coffee'></optgroup><optgroup label='Pastries'></optgroup><optgroup label='Merch'></optgroup></select><br/>");
            for (var i = 0; i < Tea.length; i++) {
                $("[label=Tea]").append("<option value='Tea " + i + "'>" + Tea[i].name + "</option>");
            }
            for (var i = 0; i < Coffee.length; i++) {
                $("[label=Coffee]").append("<option value='Coffee " + i + "'>" + Coffee[i].name + "</option>");
            }
            for (var i = 0; i < Pastries.length; i++) {
                $("[label=Pastries]").append("<option value='Pastries " + i + "'>" + Pastries[i].name + "</option>");
            }
            for (var i = 0; i < Merch.length; i++) {
                $("[label=Merch]").append("<option value='Merch " + i + "'>" + Merch[i].name + "</option>");
            }

            var modifyChange = function () {
                $(".mainLabel, #itemName, #itemDesc, #itemPrice, #itemURL, #save, br, span").remove();
                $("#containerDiv").append("<br /><label class='mainLabel'>Item Name:</label><input type='text' id='itemName' name='itemName'><span></span><br />")
                    .append("<label class='mainLabel'>Item Description:</label><textarea id='itemDesc' name='itemDesc'></textarea><span></span><br />")
                    .append("<label class='mainLabel'>Item Price:</label><input type='number' id='itemPrice' name='itemPrice'><span></span><br />")
                    .append("<label class='mainLabel'>Item URL:</label><input type='text' id='itemURL' name='itemURL'><span></span><br />")
                    .append("<button id='save'>Save</button>");

                var chosen = $("#selectionItemModify").val().split(" ");
                if (chosen[0] == "Tea") {
                    $("#itemName").val(Tea[chosen[1]].name);
                    $("#itemPrice").val(Tea[chosen[1]].price);
                    $("#itemDesc").val(Tea[chosen[1]].desc);
                    $("#itemURL").val(Tea[chosen[1]].url);
                } else if (chosen[0] == "Coffee") {
                    $("#itemName").val(Coffee[chosen[1]].name);
                    $("#itemPrice").val(Coffee[chosen[1]].price);
                    $("#itemDesc").val(Coffee[chosen[1]].desc);
                    $("#itemURL").val(Coffee[chosen[1]].url);
                } else if (chosen[0] == "Pastries") {
                    $("#itemName").val(Pastries[chosen[1]].name);
                    $("#itemPrice").val(Pastries[chosen[1]].price);
                    $("#itemDesc").val(Pastries[chosen[1]].desc);
                    $("#itemURL").val(Pastries[chosen[1]].url);
                } else if (chosen[0] == "Merch") {
                    $("#itemName").val(Merch[chosen[1]].name);
                    $("#itemPrice").val(Merch[chosen[1]].price);
                    $("#itemDesc").val(Merch[chosen[1]].desc);
                    $("#itemURL").val(Merch[chosen[1]].url);
                }

                $("#save").click(function () {
                    var name = $("#itemName").val();
                    var desc = $("#itemDesc").val();
                    var price = Number($("#itemPrice").val());
                    var url = $("#itemURL").val();
                    var canSubmit = true;
                    if (name == "") {
                        $("#itemName").next().text("Please enter a name.");
                        canSubmit = false;
                    } else {
                        $("#itemName").next().text("");
                    }
                    if (desc == "") {
                        $("#itemDesc").next().text("Please enter a description.");
                        canSubmit = false;
                    } else {
                        $("#itemDesc").next().text("");
                    }
                    if (price == "") {
                        $("#itemPrice").next().text("Please enter a price.");
                        canSubmit = false;
                    } else {
                        $("#itemPrice").next().text("");
                    }
                    if (url == "") {
                        $("#itemURL").next().text("Please enter a URL.");
                        canSubmit = false;
                    } else {
                        $("#itemURL").next().text("");
                    }
                    if (canSubmit) {
                        if (chosen[0] == "Tea") {
                            Tea[chosen[1]] = new item(name, desc, price, url);
                            localStorage.setItem("teas", JSON.stringify(Tea));
                        } else if (chosen[0] == "Coffee") {
                            Coffee[chosen[1]] = new item(name, desc, price, url);
                            localStorage.setItem("coffees", JSON.stringify(Coffee));
                        } else if (chosen[0] == "Pastries") {
                            Pastries[chosen[1]] = new item(name, desc, price, url);
                            localStorage.setItem("pastries", JSON.stringify(Pastries));
                        } else if (chosen[0] == "Merch") {
                            Merch[chosen[1]] = new item(name, desc, price, url);
                            localStorage.setItem("merch", JSON.stringify(Merch));
                        }
                        alert("Item Saved!");
                    } else {
                        alert("Please fill out the required fields before continuing.");
                    }
                });

            }

            document.getElementById("selectionItemModify").onchange = modifyChange;

        } else if (category == "Delete") {

            $("#containerDiv").html("");
            $("#containerDiv").append("<h1>Delete an Item</h1>")
                .append("<select id='selectionItemDelete'><optgroup label='Tea'></optgroup><optgroup label='Coffee'></optgroup><optgroup label='Pastries'></optgroup><optgroup label='Merch'></optgroup></select><br/>")
                .append("<button id='delete'>Delete Item</button>");
            for (var i = 0; i < Tea.length; i++) {
                $("[label=Tea]").append("<option value='Tea " + i + "'>" + Tea[i].name + "</option>");
            }
            for (var i = 0; i < Coffee.length; i++) {
                $("[label=Coffee]").append("<option value='Coffee " + i + "'>" + Coffee[i].name + "</option>");
            }
            for (var i = 0; i < Pastries.length; i++) {
                $("[label=Pastries]").append("<option value='Pastries " + i + "'>" + Pastries[i].name + "</option>");
            }
            for (var i = 0; i < Merch.length; i++) {
                $("[label=Merch]").append("<option value='Merch " + i + "'>" + Merch[i].name + "</option>");
            }
            $("#delete").click(function () {
                var chosen = $("#selectionItemDelete").val().split(" ");
                var name;
                if (chosen[0] == "Tea") {
                    name = Tea[chosen[1]].name;
                } else if (chosen[0] == "Coffee") {
                    name = Coffee[chosen[1]].name;
                } else if (chosen[0] == "Pastries") {
                    name = Pastries[chosen[1]].name;
                } else if (chosen[0] == "Merch") {
                    name = Merch[chosen[1]].name;
                }
                if (confirm("Are you sure you want to delete " + name + "?")) {
                    if (chosen[0] == "Tea") {
                        Tea.splice(chosen[1], 1);
                        localStorage.setItem("teas", JSON.stringify(Tea));
                        $("[label=Tea] > option").remove();
                        for (var i = 0; i < Tea.length; i++) {
                            $("[label=Tea]").append("<option value='Tea " + i + "'>" + Tea[i].name + "</option>");
                        }
                    } else if (chosen[0] == "Coffee") {
                        Coffee.splice(chosen[1], 1);
                        localStorage.setItem("coffees", JSON.stringify(Coffee));
                        $("[label=Coffee] > option").remove();
                        for (var i = 0; i < Coffee.length; i++) {
                            $("[label=Coffee]").append("<option value='Coffee " + i + "'>" + Coffee[i].name + "</option>");
                        }
                    } else if (chosen[0] == "Pastries") {
                        Pastries.splice(chosen[1], 1);
                        localStorage.setItem("pastries", JSON.stringify(Pastries));
                        $("[label=Pastries] > option").remove();
                        for (var i = 0; i < Pastries.length; i++) {
                            $("[label=Pastries]").append("<option value='Pastries " + i + "'>" + Pastries[i].name + "</option>");
                        }
                    } else if (chosen[0] == "Merch") {
                        Merch.splice(chosen[1], 1);
                        localStorage.setItem("merch", JSON.stringify(Merch));
                        $("[label=Merch] > option").remove();
                        for (var i = 0; i < Merch.length; i++) {
                            $("[label=Merch]").append("<option value='Merch " + i + "'>" + Merch[i].name + "</option>");
                        }
                    }

                }
            });
        }
    }

    document.getElementById("selectionManagerAction").onchange = actionChange;

});

$(document).ready(function () {

    //Order Page
    if (localStorage.getItem("id") == undefined) {
        localStorage.setItem("id", 0);
    }

    $("#backStore").hide();
    var order = JSON.parse(sessionStorage.getItem("order"));
    var cart = [];
    $("#orderDiv").append("<ul id='listOrder'></ul>");
    for (var i = 0; i < order.length; i++) {
        var splitItem = order[i].split(" ");
        if (splitItem[0] == "Coffee") {
            $("#listOrder").append("<li id='order" + i + "'>$" + Coffee[splitItem[1]].price + " " + Coffee[splitItem[1]].name + "</li >");
            cart.push(Coffee[splitItem[1]]);
        } else if (splitItem[0] == "Tea") {
            $("#listOrder").append("<li id='order" + i + "'>$" + Tea[splitItem[1]].price + " " + Tea[splitItem[1]].name + "</li >");
            cart.push(Tea[splitItem[1]]);
        } else if (splitItem[0] == "Pastries") {
            $("#listOrder").append("<li id='order" + i + "'>$" + Pastries[splitItem[1]].price + " " + Pastries[splitItem[1]].name + "</li >");
            cart.push(Pastries[splitItem[1]]);
        } else if (splitItem[0] == "Merch") {
            $("#listOrder").append("<li id='order" + i + "'>$" + Merch[splitItem[1]].price + " " + Merch[splitItem[1]].name + "</li >");
            cart.push(Merch[splitItem[1]]);
        }
        $("#order" + i).prepend("<button id='" + i + "'>X</button>");
    }
    $("#orderDiv").append("<div id='tax'></div>").append("<div id='total'></div>");
    $("button").click(removeItem);
    calculateTotal();

    $("#orderDiv").after("<div id='paymentDiv'></div>");

    $("#paymentDiv").append("<br /><label class='mainLabel'>Card Number:</label><input type='text' id='cardNum' name='cardNum'><span></span><br />")
        .append("<label class='mainLabel'>CVV Code:</label><input type='text' id='cvv' name='cvv'><span></span><br />")
        .append("<label class='mainLabel'>ZIP Code:</label><input type='text' id='zip' name='zip'><span></span><br />")
        .append("<label class='mainLabel'>Expiration Date:</label><input type='text' id='expDate' name='expDate'><span></span><br />")
        .append("<button id='pay'>Pay</button>");

    $("#pay").click(function () {
        var num = $("#cardNum").val();
        var cvv = $("#cvv").val();
        var zip = $("#zip").val();
        var exp = $("#expDate").val();
        var canSubmit = true;
        if (num == "") {
            $("#cardNum").next().text("Please enter a card number.");
            canSubmit = false;
        } else {
            $("#cardNum").next().text("");
        }
        if (cvv == "") {
            $("#cvv").next().text("Please enter a CVV code.");
            canSubmit = false;
        } else {
            $("#cvv").next().text("");
        }
        if (zip == "") {
            $("#zip").next().text("Please enter a ZIP code.");
            canSubmit = false;
        } else {
            $("#zip").next().text("");
        }
        if (exp == "") {
            $("#expDate").next().text("Please enter an expiration date.");
            canSubmit = false;
        } else {
            $("#expDate").next().text("");
        }
        if (canSubmit) {
            sessionStorage.removeItem("order");
            var id = localStorage.getItem("id");
            localStorage.setItem("order" + id, JSON.stringify(cart));
            id++;
            localStorage.setItem("id", id);
            $("#paymentDiv").remove();
            $("#orderDiv").replaceWith("<h1>Order placed!</h1>");
            $("#backStore").show();
        } else {
            alert("Please fill out the required fields before continuing.");
        }
    });

    function removeItem() {
        cart.splice($(this).attr("id"), 1);
        order.splice($(this).attr("id"), 1);
        $("#listOrder > li").remove();
        for (var i = 0; i < cart.length; i++) {
            var splitItem = order[i].split(" ");
            if (splitItem[0] == "Coffee") {
                $("#listOrder").append("<li id='order" + i + "'>$" + Coffee[splitItem[1]].price + " " + Coffee[splitItem[1]].name + "</li >");
            } else if (splitItem[0] == "Tea") {
                $("#listOrder").append("<li id='order" + i + "'>$" + Tea[splitItem[1]].price + " " + Tea[splitItem[1]].name + "</li >");
            } else if (splitItem[0] == "Pastries") {
                $("#listOrder").append("<li id='order" + i + "'>$" + Pastries[splitItem[1]].price + " " + Pastries[splitItem[1]].name + "</li >");
            } else if (splitItem[0] == "Merch") {
                $("#listOrder").append("<li id='order" + i + "'>$" + Merch[splitItem[1]].price + " " + Merch[splitItem[1]].name + "</li >");
            }
            $("#order" + i).prepend("<button id='" + i + "'>X</button>");
        }
        calculateTotal();
        $("button").click(removeItem);
    }

    function calculateTotal() {
        var total = 0;
        var tax = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total = total + cart[i].price;
            }
        } else {
            sessionStorage.removeItem("order");
            $("#paymentDiv").remove();
            $("#orderDiv").replaceWith("<h1>Order cancelled.</h1>");
            $("#backStore").show();
        }
        tax = total * .06;
        total = total + tax;
        tax = tax.toFixed(2);
        total = total.toFixed(2);
        $("#tax").text("Tax: $" + tax);
        $("#total").text("Total: $" + total);
    }
});