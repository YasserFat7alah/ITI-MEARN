
        var taskId = 1;
        var className = 'odd';

        var taskName = document.getElementById("taskname");
        taskName.focus();

        taskName.addEventListener('keydown', function (e) { 
            if (e.key == "Enter") addTaskfn();
         });

        function addTaskfn() {
            

            
            if(taskName.value.trim()) {
                

                var headTable = document.getElementsByTagName("table")[0];
                if (taskId%2 == 0 ) { className = 'even'}else { className = 'odd'};

                var task = document.createElement("tr");
                task.setAttribute("class", className)

                var done = document.createElement("td");
                done.setAttribute("class", "col");
                done.setAttribute("onclick", "markDone(this)");
                done.innerHTML = '<input type="checkbox" name="done'+ taskId+'" id="done'+ taskId +'" onclick="markDone(this)">'
            
                var content = document.createElement("td");
                content.setAttribute("class", "content");
                content.setAttribute("id", "content"+taskId);
                content.innerHTML = taskName.value.trim();
                
                var del = document.createElement("td");
                del.setAttribute("class", "col");
                del.innerHTML = '<input type="button" name="delete" id="delete'+ taskId +'" value="x" onclick="deleteItem(this)"></input>';

                task.appendChild(done);
                task.appendChild(content);
                task.appendChild(del);

                var tasks = document.querySelectorAll('td[class=content]') || [];
                /* console.log(tasks) */
                var found = false;

                if (tasks.length) {
                    for (let i = 0; i < tasks.length; i++) {
                        if (task.innerText.split(' ').join('').toLowerCase() == tasks[i].innerText.split(' ').join('').toLowerCase()) {
                            /* console.log(task.innerText)
                            console.log(tasks[i].innerText) */
                            if (tasks[i].style.textDecoration == 'line-through') {
                                /* console.log(tasks[i].parentElement.childNodes[0].childNodes[0]) */
                                tasks[i].parentElement.childNodes[0].childNodes[0].checked =false;
                                tasks[i].style.textDecoration = 'none'
                                alert("Task was already done, Marked as undone");
                                found =true;
                                break;
                            }else {
                                alert("Task is already added to your todo list");
                                found =true;
                                break;
                            }
                        }
                    }   
                }
                if (!found) {
                    taskId++
                    headTable.insertAdjacentElement("beforeend", task);
                    taskName.value = '';
                }
            }
            taskName.focus();
        }


    

        function markDone(e) {
            var task = e.parentNode.getElementsByClassName("content")[0] || e.parentNode.parentNode.getElementsByClassName("content")[0];
            var checkbox = e.childNodes[0] || e;


            if(!checkbox.checked) {
                task.style.textDecoration = "line-through";
                checkbox.checked =true;
            }else {
                task.style.textDecoration = "none";
                checkbox.checked =false;
            }

            taskName.focus();
        }

        function deleteItem(del) {
            var taskrow = del.parentNode.parentNode;

            var accept = confirm("Do you really want to delete it?");

            if(accept) taskrow.parentNode.removeChild(taskrow);

            taskName.focus();
        }