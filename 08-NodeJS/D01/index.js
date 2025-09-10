const fs = require("fs");
const { flags, addTodo, listTodos, updateTodo, deleteTodo } = require("./controllers");


const [, , command, ...args] = process.argv;

const statusList = ['to-do', 'in-progress', 'done'];

if (command) {
    switch (command.toLowerCase()) {

        case 'add':
            addTodo(args);
            break;

        case 'list':
            listTodos();
            break;

        case 'update':
            updateTodo(args)
            break;

        case 'delete':
            deleteTodo(args)
            break;

        default:
            console.log('⚠️ Unkown Command !!!!!');

            break;
    }

} else {
    console.log("please use a valid format `node index [command] [...arguments]`")
}



