
const createTableCell = (content, isImage = false, classname = "") => {
    const cell = document.createElement("td");

    if(isImage) {
        const img = document.createElement("IMG");
        img.setAttribute("src", content);
        img.classList.add(classname);
        cell.appendChild(img);
    }
    else{
        const textNode = document.createTextNode(content); // Create a text node
        cell.appendChild(textNode );
    }


    return cell;
}

const showFoundResult = (result) => {
    console.log(result);

    const tableBody = document.getElementById("table-body");
    let i = 1;

    tableBody.innerHTML = "";

    result.forEach(item => {
        const tableRow = document.createElement("tr");

        tableRow.appendChild(createTableCell(i++));
        tableRow.appendChild(createTableCell(item.image, true, "prodImage"));
        tableRow.appendChild(createTableCell(item.title));
        tableRow.appendChild(createTableCell(item.category));
        tableRow.appendChild(createTableCell(`Rs. ${item.price}`))    

        tableBody.appendChild(tableRow);
    });
}


//this is the function which will debounce
const debouce = (funcToBeCall, wait) => {
    let timeout;
    return function funcToBeExecuted(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            funcToBeCall(...args);
        }, wait);
    }
}


//this is the function which we have to call
const fetchApi = async (query) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${query}`);
        const data = await response.json();

        if (data.length > 0) {
            showFoundResult(data);
        }

        else {
            document.getElementById("table-body").innerHTML = "";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


//debouncedFetchApi will be the returned function where we have to pass search input
const debouncedFetchApi = debouce(fetchApi, 2000)

//taking element by id and add event listener to it
const searchField = document.getElementById("searchField");
searchField.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query) {
        debouncedFetchApi(query)
    }
})