


window.onload = () => {
        const data = localStorage.getItem("people");
        if (data) {
        people = JSON.parse(data);
        displayPeople(people);
        }
};

function displayPeople(arr) {
    let table = document.getElementById("table");
    table.innerHTML = `
        <tr>
            <th>
                <span>ID</span>
                 
                <div class= "asc-dsc">
                    <button onclick="sortFun('id','asc')">↑</button>
                    <button onclick="sortFun('id','desc')">↓</button>
                </div>
                
            </th>
            <th>
                <span>Name</span>
                
                <div class= "asc-dsc">
                    <button onclick="sortFun('name','asc')">↑</button>
                    <button onclick="sortFun('name','desc')">↓</button>
                </div>
            </th>
            <th>
                <span>City</span>
                
                <div class= "asc-dsc">
                    <button onclick="sortFun('city','asc')">↑</button>
                    <button onclick="sortFun('city','desc')">↓</button>
                </div>
            </th>
            <th>
                <span>Salary</span>
                
                <div class= "asc-dsc">
                    <button onclick="sortFun('salary','asc')">↑</button>
                    <button onclick="sortFun('salary','desc')">↓</button>
                </div>
            </th>
            <th>
                <span>Image</span>
                
            </th>
            <th>
                <span>Actions</span>
                
            </th>
        </tr>
    `;

    arr.forEach((person, index) => {
        table.innerHTML += `
        <tr>
            <td>${person.id}</td>
            <td contenteditable="true">${person.name}</td>
            <td contenteditable="true">${person.city}</td>
            <td contenteditable="true">${person.salary}</td>
            <td><img src="img/${person.personalImage}"></td>
            <td>
            <button onclick="updatePerson(${index})">Update</button>
            <button onclick="deletePerson(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

    saveToLocalStorage(arr);
}

function saveToLocalStorage(arr) {
    localStorage.setItem("people", JSON.stringify(arr));
}

        function updatePerson(index) {
        const row = document.getElementById("table").rows[index + 1];
        people[index].name = row.cells[1].innerText;
        people[index].city = row.cells[2].innerText;
        people[index].salary = parseFloat(row.cells[3].innerText);
        displayPeople(people);
        }

        function deletePerson(index) {
            if(confirm("do you really want to delete this record?")){
                people.splice(index, 1);
                displayPeople(people);
            }
        }

        


        function sortFun(col, order) {
            if(people[0][col].constructor.name == "Number"){
                sorted = people.slice().sort((a, b) => order === 'asc' ? a[col] - b[col] : b[col] - a[col]);
            }else{
                sorted = people.slice().sort((a, b) => order === 'asc' ? a[col].localeCompare(b[col], 'en', { sensitivity: 'base' }) : b[col].localeCompare(a[col], 'en', { sensitivity: 'base' }));
            }
            
            console.log(sorted)
            displayPeople(sorted);
}
