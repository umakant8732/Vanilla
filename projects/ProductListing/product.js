let productTag = document.querySelector(".product");
let categoryListBox = document.querySelector(".categoryList");
let filteredCategories = [];

let displayProducts = async (checkedCategories = []) => {
    productTag.innerHTML = "";

    let product = await fetch("https://fakestoreapi.com/products/");
    let response = await product.json();

    response.forEach((item) => {

        //showing categories
        if (!filteredCategories.includes(item.category)) {
            filteredCategories.push(item.category);
            categoryListBox.innerHTML += ` <label for="">
        <input type="checkBox" onclick='onlyCheckedCategories()' value = "${item.category}"> ${item.category}
    </label>`;
        }



        if (checkedCategories.length == 0) {
            checkedCategories = filteredCategories;
        }



        //showing all products
        if (checkedCategories.includes(item.category)) {
            productTag.innerHTML += `<div class="productItems">
        <img src="${item.image}"
            alt="">
            <h4>${item.category}</h4>
        <p>Price : ${item.price} | rating : ${item.rating.rate}</p>
        <h3>${item.title}</h3>
    </div>
`;
        }
    });
};

displayProducts();



let onlyCheckedCategories = (e) => {
    let categories = document.querySelectorAll("input[type='checkbox']");
    let onlyCheckedCategories = [];
    categories.forEach((e) => {
        if (e.checked) {
            onlyCheckedCategories.push(e.value);
        }
    });
    displayProducts(onlyCheckedCategories);
}



