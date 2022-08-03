


const quantityRefItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityRefItem.length}`);

quantityRefItem.forEach(categories => {
    console.log(`Category: ${categories.children[0].textContent}`);
    console.log(`Elements: ${categories.children[1].children.length}`);
})



// const ulItemRef = document.querySelectorAll(".item");
// console.log("Number of categories:", ulItemRef.length);
// ulItemRef.forEach((item) => {
// const titleRef = item.querySelector("h2");
// const getElementLi = item.querySelectorAll("li");
// console.log("Category:", titleRef.textContent);
// console.log("Elements:", getElementLi.length);});





// const firstRefChildItem = quantityRefItem.firstElementChild
// const categoryRefAnimal = document.querySelector('h2');
// console.log('Category:', categoryRefAnimal.textContent);

// const firstRefChildH2 = categoryRefAnimal.children
// const childRefCategoryH2Animal = document.querySelectorAll('ul')

// const firstRefChild1 = childRefCategoryH2Animal.firstElementChild
// const quantityRefBranchH2Li1 = document.querySelectorAll('li')
// console.log('Elements:', childRefCategoryH2Animal.length);




