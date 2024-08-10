



const showFoundResult = (result) => {
  

   
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
            return;
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