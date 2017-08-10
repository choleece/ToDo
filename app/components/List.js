/**
 * Created by choleece on 2017/8/9.
 */
import React, { PropTypes } from 'react';

const propTypes = {
    items: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

function List({ items, onDelete }) {
    return (
        <ul>
            <h2>这就是今天的待办事项</h2>
            {
                items.map(item =>
                    <li key={item.id}>
                        <button onClick={() => {onDelete(item.id)}}>删除</button>
                        {item.content}
                    </li>
                )
            }
        </ul>
    );
}

List.PropTypes = propTypes;

export default List;