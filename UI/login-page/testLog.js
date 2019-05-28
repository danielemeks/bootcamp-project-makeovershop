/*Array of Objects holding Users details*/

const users = [
    { firstname: "Ken", lasttname: "Green", password: "password1", username: "Test1" },
    { firstname: "Ben", lasttname: "John", password: "password2", username: "Test2" },
    { firstname: "John", lasttname: "Brown", password: "password3", username: "Test3" },
    { firstname: "Dan", lasttname: "Adebayo", password: "password4", username: "Test4" },
    { firstname: "Peter", lasttname: "Ezeobi", password: "password5", username: "Test5" },
    { firstname: "Desmond", lasttname: "Uzoh", password: "password6", username: "Test6" },
    { firstname: "Bayo", lasttname: "Mark", password: "password7", username: "Test7" },
    { firstname: "Dele", lasttname: "Austin", password: "password8", username: "Test8" },
    { firstname: "Ike", lasttname: "George", password: "password9", username: "Test9" },
    { firstname: "Mayor", lasttname: "Godson", password: "password10", username: "Test10" },
    { firstname: "Joy", lasttname: "Briggs", password: "password11", username: "Test11" },
    { firstname: "Jane", lasttname: "Jane", password: "password12", username: "Test12" }

];

/*Array of Objects holding Product details*/

const products = [
    { image: "./images/product-a.jpg", product_name: "Product1", Price: "$150", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-b.jpg", product_name: "Product2", Price: "$250", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-c.jpg", product_name: "Product3", Price: "$350", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-d.jpg", product_name: "Product4", Price: "$150", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-e.jpg", product_name: "Product5", Price: "$450", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-f.jpg", product_name: "Product6", Price: "$200", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-g.jpg", product_name: "Product7", Price: "$280", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-h.jpg", product_name: "Product8", Price: "$300", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-i.jpg", product_name: "Product9", Price: "$250", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-j.jpg", product_name: "Product10", Price: "$400", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-k.jpg", product_name: "Product11", Price: "$250", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-l.jpg", product_name: "Product12", Price: "$100", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-m.jpg", product_name: "Product13", Price: "$270", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-n.jpg", product_name: "Product14", Price: "$290", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-o.jpg", product_name: "Product15", Price: "$500", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-c.jpg", product_name: "Product16", Price: "$300", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-d.jpg", product_name: "Product17", Price: "$150", description: "Lorem ipsum dolor sit amet" },
    { image: "./images/product-f.jpg", product_name: "Product18", Price: "$200", description: "Lorem ipsum dolor sit amet" }

];

document.getElementById("login-button").addEventListener("click", checkUser);



function checkUser() {
    let user_name = document.getElementById("login-username").value;
    let user_password = document.getElementById("login-password").value;

    users.forEach(function (u_name) {

        if (u_name.username === user_name && u_name.password === user_password) {
            hideLogin();
            
            //console.log(u_name.username);
            // console.log(u_name.password);
            //console.log(u_name.firstname);
            //console.log(u_name.lasttname); 
            //newFname = u_name.firstname;
            //newLname = u_name.lasttname;
            //loadProducts();
            //displayUserName();
            //loadProductPage();

            //console.log(newFname);
            //console.log(newLnam);
            //alert("You Will be Redirected to the Product List Page"); 
            //loginFname.textContent = [u_name.firstname];
            //loginLname.textConten = [u_name.lasttname];

            //loginFname.textContent = [u_name.firstname];
            //loginLname.textConten = [u_name.lasttname];
            //console.log(u_name.lasttname);
            //alert("I am here");   
            //alert("You Will be Redirected to the Product List Page");

        }
    });

}

function loadProductPage() {
    window.open("product-display.html", "_self");
}

/*function displayUserName() {
    //let loginFname = document.getElementById("fname");
    //let loginLname = document.getElementById("lname");
    //let newFname = "";
    //let newLname = "";
    //loginFnam.textContent = "Obi";
    //loginFnam.textContent = "Law";
    //alert("Obi");
}*/

function hideLogin() {
    let divOne = document.getElementById('login');
    divOne.classList.add("myStyle");
}



//document.getElementById("loadPage").addEventListener("click", loadProducts);

const list_product = document.querySelector(".list-product");

function loadProducts() {
    products.forEach(function (new_product) {

        list_product.innerHTML += `<div class="box">
             <img src=${new_product.image} />
             <h3>${new_product.product_name} ${new_product.Price}</h3>
             <p>${new_product.description}</p>
             </div>`;

    });

}




