import { getNewId, saveData, readData, hasFlags, handleFlag } from "./utils.js";


const data = readData()

const statusList = ['to-do', 'in-progress', 'done'];

/* =============== CREATE ===================== */
export function createTodo(title, status = "to-do") {
    if (!title) {
        return { error: "❌ You must enter the todo title to add" };
    }

    if (status && !statusList.includes(status.toLowerCase())) {
        return { error: `❌ Status must be one of [${statusList}]` };
    }

    const newId = getNewId(data);
    const newTodo = { id: newId, title, status: status.toLowerCase() };

    data.push(newTodo);
    saveData(data);

    return newTodo;
}

/* =============== READ ===================== */

export function readTodos(_id = '') {
    if (data.length === 0) {
        return "No todos found.";
    }

    let toView = data;

    if (_id && ! +_id) {
        console.log(_id);
        
        return `❌ Format: id {${_id}} must be a number..`;
    }

    if (_id) toView = toView.filter(todo => todo.id == _id);

    if (toView.length == 0) {
        return "No todos found.";
    }

    return toView;

}

/* =============== UPDATE ===================== */
export function updateTodo(id, newTitle = "", newStatus = "") {
    if (!id || !+id) {
        return { error: `❌ Format: id {${id}} must be a number..` };
    }

    if (!newTitle && !newStatus) {
        return { error: "⚠️ You must provide title or status to update" };
    }

    const index = data.findIndex((todo) => todo.id == id);
    if (index === -1) {
        return { error: "❌ Enter a valid id to update!" };
    }

    if (newTitle) data[index].title = newTitle;
    if (newStatus) {
        if (!statusList.includes(newStatus.toLowerCase())) {
            return { error: `❌ Status must be one of [${statusList}]` };
        }
        data[index].status = newStatus.toLowerCase();
    }

    saveData(data);
    return data[index];
}


/* =============== DELETE ===================== */
export function deleteTodo(id) {
    if (!id || !+id) {
        return { error: `❌ Format: id {${id}} must be a number..` };
    }

    const index = data.findIndex((todo) => todo.id == id);
    if (index === -1) {
        return { error: "❌ Enter a valid id to delete!" };
    }

    const deleted = data[index];
    data.splice(index, 1);
    saveData(data);

    return deleted;
}



