import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/actions';

class TaskBar extends React.Component {

    render() {
        return (
            <div>
                <input type="text" ref="task" placeholder="add your tasks" />
                <button onClick={() => this.props.addTask(this.refs.task.value)}>Add Task</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
   };

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTask}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar); 