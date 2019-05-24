/*Array of Objects holding Product details*/

const products = [
    { image: "./images/product-a.jpg", product_name: "Product1", Price: "$150", description: "Lorem ipsum dolor sit amet"},
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


document.getElementById("loadPage").addEventListener("click", loadProducts);

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

