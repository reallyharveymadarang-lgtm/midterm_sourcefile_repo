document.addEventListener("DOMContentLoaded", function() {
    let queue = [];

    const enqueueBtn = document.getElementById("pushBtn"); // Pwede mo ring i-rename ang ID sa html kunggusto mo
    const dequeueBtn = document.getElementById("popBtn");
    const peekBtn = document.getElementById("peekBtn");
    const clearBtn = document.getElementById("clearBtn");
    const inputValue = document.getElementById("inputValue");
    const stackContainer = document.getElementById("stackContainer"); // O queueContainer
    const deletedValue = document.getElementById("deletedValue");

    // ENQUEUE OPERATION (Add to rear)
    if (enqueueBtn) {
        enqueueBtn.addEventListener("click", function() {
            let val = inputValue.value.trim();
            if (val === "") {
                alert("Please enter a value!");
                return;
            }
            queue.push(val); // Idinaragdag sa dulo
            inputValue.value = "";
            renderQueue();
        });
    }

    // DEQUEUE OPERATION (Remove from front)
    if (dequeueBtn) {
        dequeueBtn.addEventListener("click", function() {
            if (queue.length === 0) {
                alert("Queue is empty!");
                return;
            }
            let removedVal = queue.shift(); // Inaalis ang nasa unahan (FIFO)
            deletedValue.textContent = removedVal;
            renderQueue();
        });
    }

    // PEEK OPERATION (Access front)
    if (peekBtn) {
        peekBtn.addEventListener("click", function() {
            if (queue.length === 0) {
                alert("Queue is empty!");
                return;
            }
            let items = stackContainer.getElementsByClassName("stack-item");
            if (items.length > 0) {
                let frontItem = items[0]; // Ang unahan sa Queue
                frontItem.classList.add("highlight");
                setTimeout(function() {
                    frontItem.classList.remove("highlight");
                }, 1500);
            }
        });
    }

    // CLEAR OPERATION
    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            queue = [];
            deletedValue.textContent = "None";
            renderQueue();
        });
    }

    // RENDER FUNCTION (Hindi na flex-column-reverse para sa queue para manatili sa unahan ang unang pumasok)
    function renderQueue() {
        stackContainer.innerHTML = "";
        for (let i = 0; i < queue.length; i++) {
            let div = document.createElement("div");
            div.className = "stack-item";
            div.textContent = queue[i];
            stackContainer.appendChild(div);
        }
    }
});