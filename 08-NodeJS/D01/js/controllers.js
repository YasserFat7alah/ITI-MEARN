const { getNewId, saveData, readData, hasFlags, handleFlag } = require("./utils.js");


const data = readData()

const statusList = ['to-do', 'in-progress', 'done'];

/* =============== CREATE ===================== */
function addTodo(_args) {
    if (_args.length === 0) {
        console.log("❌ You must enter the todo title to add");
        return;
    }

    const newId = getNewId(data);
    const status = "to-do";

    data.push({ id: newId, title: _args[0], status });
    console.log("✅ Added a new todo!");
    saveData(data);
}

/* =============== READ ===================== */

function listTodos(_args) {
    if (data.length === 0) {
        console.log("No todos found.");
        return;
    }

    let toView = data;

    if (hasFlags(_args)) {

        // Handle Status
        const status = handleFlag(_args, ['--status', '-s']);
        if (status && !statusList.includes(status.toLowerCase())) {
            console.log(`❌ Format: status {${status}} must be a value of [${statusList}]`);
            return;
        }
        // Search by Status
        if (status) toView = toView.filter(todo => todo.status === status.toLowerCase())

        // Handle Title
        const title = handleFlag(_args, ['--title', '-t']);
        if (title && (title.startsWith('-') || title.startsWith("'"))) {
            console.log(`❌ Format: title {${title}} must be followed with a string value in double qoutes..`);
            return;
        }

        //Search by Title
        if (title) toView = toView.filter(todo => todo.title.toLowerCase() === title.toLowerCase());

        // Handle Id
        id = handleFlag(_args, ['-i', '-id']);
        if (! +id) {
            console.log(`❌ Format: id {${id}} must be a number..`);
            return;
        }

        //Search by Id
        if (id) toView = toView.filter(todo => todo.id == id);
    }

    if (toView.length == 0) {
        console.log("No todos found.");
        return;
    }

    console.log("*** Your Todos:");
    console.log(toView)

}

/* =============== UPDATE ===================== */
function updateTodo(_args) {
    if (_args.length < 2) {
        console.log("❌ Format: `node index update [id] [new title]`");
        return;
    }
    let id = 0;
    let newTitle = '';
    let newStatus = '';

    if (hasFlags(_args)) {

        id = handleFlag(_args, ['-i', '-id']);
        if (! +id) {
            console.log(`❌ Format: id {${id}} must be a number..`);
            return;
        }

        newTitle = handleFlag(_args, ['--title', '-t']);
        if (newTitle && (newTitle.startsWith('-') || newTitle.startsWith("'"))) {
            console.log(`❌ Format: title {${newTitle}} must be followed with a string value in double qoutes..`);
            return;
        }

        newStatus = handleFlag(_args, ['--status', '-s']);
        if (newStatus && !statusList.includes(newStatus.toLowerCase())) {
            console.log(`❌ Format: status {${newStatus}} must be a value of [${statusList}]`);
            return;
        }

    } else {
        id = _args[0];
        newTitle = _args[1];
        newStatus = ''
    }

    if (!newTitle && !newStatus) {
        console.log("⚠️ You didnt enter any data to change");
        return;
    }

    const index = data.findIndex((todo) => todo.id == id);
    if (index === -1) {
        console.log("❌ Enter a valid id to update!");
        return;
    }

    if (newTitle) data[index].title = newTitle;
    if (newStatus) data[index].status = newStatus.toLowerCase();

    console.log("✅ The todo has been updated successfully!");
    saveData(data);
}


/* =============== DELETE ===================== */
function deleteTodo(_args) {
    if (_args.length === 0) {
        console.log("❌ Format: `node index delete [id]`");
        return;
    }

    const index = data.findIndex((todo) => todo.id == _args[0]);
    if (index === -1) {
        console.log("❌ Enter a valid id to delete!");
        return;
    }

    console.log(`"${data[index].title}" has been deleted successfully!`);
    data.splice(index, 1);
    saveData(data);
}



module.exports = { addTodo, listTodos, updateTodo, deleteTodo };
