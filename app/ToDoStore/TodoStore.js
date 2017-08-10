/**
 * Created by choleece on 2017/8/9.
 */
import EventEmitter from 'events';
import assign from 'object-assign'
import AppDispatcher from '../dispatcher/AppDispatcher';
import uuid from 'uuid';

const TodoStore = assign({}, EventEmitter.prototype, {
    todos: [{id: uuid.v4(), content: 'first one'}, {id: uuid.v4(), content: 'second one'}],
    getAll(){
        return this.todos;
    },
    addTodo(todo) {
        this.todos.push(todo);
    },
    deleteTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id);
    },
    emitChange() {
        this.emit('change');
    },
    addChangeListener(callback) {
        this.on('change', callback);
    },
    removeChangeListener(callback) {
        this.remove('change', callback);
    }
});

AppDispatcher.register((action) => {
    switch(action.actionType) {
        case 'DELETE_TODO':
            TodoStore.deleteTodo(action.todo);
            TodoStore.emitChange();
            break;
        case "CREATE_TODO":
            TodoStore.addTodo(action.todo);
            TodoStore.emitChange();
            break;
        default:
            break;
    }
});

export default TodoStore;
