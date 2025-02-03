var search = document.querySelector(".search");
var searchIcon = document.querySelector("#search-icon");
var searchInput = document.querySelector(".search input");

// console.log("🚀 ~ search:", search);
// console.log("🚀 ~ searchIcon:", searchIcon);
// console.log("🚀 ~ searchInput:", searchInput);

search.addEventListener("click", () => {
    search.style.width = "42rem";
    searchInput.style.display = "block";
    searchInput.focus();
});

searchInput.addEventListener("blur", () => {
    search.style.width = "2.25rem";
    searchInput.style.display = "none";
})
