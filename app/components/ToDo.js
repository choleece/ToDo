/**
 * Created by choleece on 2017/8/9.
 */
import React from 'react';
import CreateButton from '../components/CreateButton';
import List from '../components/List';
import TodoStore from '../ToDoStore/TodoStore';

import TodoAction from '../actions/ToDoAction';
import uuid from 'uuid';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    createTodo = () => {
        TodoAction.create({id: uuid.v4(), content: '3rd stuff'});
    }

    deleteTodo = (id) => {
        TodoAction.delete(id);
    }

    render() {
        return (
            <div>
                <List items={this.state.todos} onDelete={this.deleteTodo.bind(this)}/>
                <CreateButton onClick={this.createTodo.bind(this)}/>
            </div>
        )
    }
}

export default ToDo;