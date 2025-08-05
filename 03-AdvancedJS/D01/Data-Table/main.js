window.addEventListener('load', async () => {

    let url = 'https://jsonplaceholder.typicode.com/users';
    await getData(url);

    let data = eval(localStorage.getItem('data'));

    for (let i = 0; i < data.length; i++) {
        data[i] = new Person(data[i].id, data[i].name, data[i].username, data[i].email, data[i].address);
    }

    let table = createTable(...data);

    document.body.appendChild(table);
});

/* Fetching Data */
async function getData(_url) {
        let response = await fetch(_url)
            .then(res => {
                return res.json();
            });

        localStorage.setItem('data', JSON.stringify(response));
    }


/* Person Constructor Function */
function Person(_id, _name, _username, _email,_address) {
    this.Id = _id;
    this.Name = _name;
    this.UserName = _username;
    this.Email = _email;
    this.Address = _address;
}






function addUser(_userObj) {
    let row = document.createElement('tr');
    for (const key in _userObj) {
        console.log(_userObj[key].constructor.name)
        if(_userObj[key].constructor.name == 'Object'){
            
            row.appendChild(createTable(...[_userObj[key]]));
            
        }else {
            let data = document.createElement('td');
            data.innerHTML = _userObj[key];
            row.appendChild(data);
        }
    }

    return row;
}


function createTable(...arr) {
    let table = document.createElement('table');
    let header = document.createElement('thead');
    let titles =document.createElement('tr');

    for (const key in arr[0]) {
        let th = document.createElement('th');
        th.innerHTML = key;
        titles.appendChild(th);
    }

    
    header.appendChild(titles);
    
    table.appendChild(header);
    

    for (let i = 0; i < arr.length; i++) {
        let row = addUser(arr[i]);
        table.appendChild(row);
    }
    
    return table;

}



