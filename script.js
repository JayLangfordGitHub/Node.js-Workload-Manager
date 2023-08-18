const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter a task!");
    }
    else{
        let li = document.createElement("li");
        let textDiv = document.createElement("div"); // Create a div for the task text
        textDiv.innerHTML = inputBox.value; // Set the task text in the div
        li.appendChild(textDiv); // Append the div to the li element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

