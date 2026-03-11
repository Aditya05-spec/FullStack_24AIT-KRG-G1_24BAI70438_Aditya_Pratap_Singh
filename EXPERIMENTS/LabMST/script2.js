const input = document.getElementById("itemInput");
const list = document.getElementById("itemList");

document.getElementById("addBtn").addEventListener("click", function() {

    const value = input.value;

    if(value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    list.appendChild(li);

    input.value = "";
});

document.getElementById("removeBtn").addEventListener("click", function() {

    if(list.lastChild){
        list.removeChild(list.lastChild);
    }

});