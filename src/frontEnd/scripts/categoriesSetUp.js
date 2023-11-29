const categories = document.querySelectorAll("[class='category']");
// console.log(category);
categories.forEach((category) => {
    category.onclick = function(){
        // alert(`Category ${category.getAttribute("id")}`)

        location.assign(`/category?v=${category.getAttribute("id")}`);
        // fetch(`/category?v=${category.getAttribute("id")}`,{method: "GET"});
    }
});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("v");

const categoryDiv = document.getElementById(`${category}`);
// console.log(categoryDiv);
// categoryDiv.textContent = "Testing"
// categoryDiv.style.borderBottom = "0.2em solid rgba(204, 54, 54);";
categoryDiv.style.borderBottomWidth = "0.2em";
categoryDiv.style.borderBottomStyle = "solid";
categoryDiv.style.borderBottomColor = "rgba(204, 54, 54)";


// categoryDiv.style.backgroundColor = "red";
// console.log(category);

// console.log(queryString);

