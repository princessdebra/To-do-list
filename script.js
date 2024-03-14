(() => {
    // state variables 
    let toDoListArray = [];
    //ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");
    // event Listeners
    form.addEventListener("submit", (e) =>{
    // prevent default behaviour Page reload
    e.preventDefault();
    // give item a unique ID
    let itemId= String(Date.now());
    //get/assign input value
    let toDoItem = input.value;
    //pass 10 and item into functions
    addItemToDOM(itemId, toDoItem); addItemToArray(itemId, toDoItem);
    // clear the input box. this is default behaviour but we got rid of that)
    input.value = "";
    });
    ul.addEventListener("click", (e) =>{
    let id = e.target.getAttribute("data-id");
    if (!id) return; // user clicked in something else
    //pass id through to functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
    });
    // functions
    function addItemToDOM(itemId, toDoItem) {
    // create an a
    const li = document.createElement("li");
    li.setAttribute("data-id", itemId);
    //add tolloltem text to li
    li.innerText = toDoItem;
    // add it to the DON
    ul.appendChild(li);
    }

    function addItemToArray(itemId , toDoItem) {
    // toDoListArray.push({itemId, toDoItem});
    toDoListArray.push({itemId, toDoItem});
    console.log(toDoListArray);
    }
    
    function removeItemFromDOM(id) {
        var li = document.querySelector('[data-id="' + id + "");
        // remove List Item
        ul.removeChild(11);   // get the list item by data ID
    }
    
    function removeItemFromArray(id) {
    // create a new toDoListArray with all la's that don't match the ID
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    console.log(toDoListArray);
}})();