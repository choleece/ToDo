/**
 * Created by choleece on 2017/8/9.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';

const ToDoAction = {
    create(todo) {
        AppDispatcher.dispatch({
            actionType: 'CREATE_TODO',
            todo
        });
    },
    delete(todo) {
        AppDispatcher.dispatch({
            actionType: 'DELETE_TODO',
            todo
        })
    }
};

export default ToDoAction;