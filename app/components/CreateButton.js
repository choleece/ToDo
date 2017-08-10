/**
 * Created by choleece on 2017/8/9.
 */
import React, { PropTypes } from 'react';

const propTypes = {
    onClick: PropTypes.func.isRequired
};

function CreateButton({ onClick }) {
    return (
        <div className="createComponentButton">
            <button onClick={() => {onClick();}}>创建新的ToDo</button>
        </div>
    );
}

CreateButton.PropTypes = propTypes;

export default CreateButton;