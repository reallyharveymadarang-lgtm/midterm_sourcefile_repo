document.addEventListener("DOMContentLoaded", function() {
    let stack = [];

    const pushBtn = document.getElementById("pushBtn");
    const popBtn = document.getElementById("popBtn");
    const peekBtn = document.getElementById("peekBtn");
    const clearBtn = document.getElementById("clearBtn");
    const inputValue = document.getElementById("inputValue");
    const stackContainer = document.getElementById("stackContainer");
    const deletedValue = document.getElementById("deletedValue");

    if (pushBtn) {
        pushBtn.addEventListener("click", function() {
            let val = inputValue.value.trim();
            if (val === "") {
                alert("Please enter a value!");
                return;
            }
            stack.push(val);
            inputValue.value = "";
            renderStack();
        });
    }

    if (popBtn) {
        popBtn.addEventListener("click", function() {
            if (stack.length === 0) {
                alert("Stack is empty!");
                return;
            }
            let removedVal = stack.pop();
            deletedValue.textContent = removedVal;
            renderStack();
        });
    }

    if (peekBtn) {
        peekBtn.addEventListener("click", function() {
            if (stack.length === 0) {
                alert("Stack is empty!");
                return;
            }
            let items = stackContainer.getElementsByClassName("stack-item");
            if (items.length > 0) {
                let topItem = items[items.length - 1];
                topItem.style.backgroundColor = "#ffeb3b";
                setTimeout(function() {
                    topItem.style.backgroundColor = "";
                }, 1500);
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            stack = [];
            deletedValue.textContent = "None";
            renderStack();
        });
    }

    function renderStack() {
        stackContainer.innerHTML = "";
        for (let i = 0; i < stack.length; i++) {
            let div = document.createElement("div");
            div.className = "stack-item";
            div.textContent = stack[i];
            stackContainer.appendChild(div);
        }
    }
});