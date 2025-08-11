
        var taskId = 0;
        var className = 'odd';

        function addTaskfn() {
            var taskName = document.getElementById("taskname");
            if(taskName.value.trim()) {
                taskId++


                var headTable = document.getElementsByTagName("table")[0];
                if (taskId%2 == 0 ) { className = 'even'}else { className = 'odd'};

                var task = document.createElement("tr");
                task.setAttribute("class", className)

                var done = document.createElement("td");
                done.setAttribute("class", "col");
                done.innerHTML = '<input type="checkbox" name="done'+ taskId+'" id="done'+ taskId +'" onclick="markDone(this)">'
            
                var content = document.createElement("td");
                content.setAttribute("class", "content");
                content.setAttribute("id", "content"+taskId);
                content.innerHTML = taskName.value;

                var del = document.createElement("td");
                del.setAttribute("class", "col");
                del.innerHTML = '<input type="button" name="delete" id="delete'+ taskId +'" value="x" onclick="deleteItem(this)"></input>';
            
                task.appendChild(done);
                task.appendChild(content);
                task.appendChild(del);


                headTable.insertAdjacentElement("beforeend", task);
                taskName.value = '';
            }
        
        }


    

        function markDone(checkbox) {
            var task = checkbox.parentNode.parentNode.getElementsByClassName("content")[0];

            if(checkbox.checked) {
                task.style.textDecoration = "line-through";
            }else {
                task.style.textDecoration = "none";
            }
        }

        function deleteItem(del) {
            var taskrow = del.parentNode.parentNode;

            var accept = confirm("Do you really want to delete it?");

            if(accept) taskrow.parentNode.removeChild(taskrow);
        }