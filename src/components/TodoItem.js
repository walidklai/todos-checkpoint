import React from 'react'

const TodoItem = (props) => {

    return (
        <div className='TodoItem' style={{backgroundColor: props.chck?'lightYellow':'#4b5ae2'}}>
            <input type={props.toggleEdit ? 'text' : 'checkbox'} value={props.newEdit} onChange={props.toggleEdit ? props.handleChange2 : () => props.handleChange3(props.id)} checked={props.chck} ></input>
            <label style={{ width: props.toggleEdit ? '0px' : null }}>{props.toggleEdit ? null : props.todo}</label>
            <button onClick={() => props.handleEdit(props.id, props.toggleEdit)} style={{ width: '80px' }}>{props.toggleEdit ? 'Save' : 'Edit'}</button>
            <button onClick={() => props.handleRm(props.id, props.toggleEdit)} style={{ width: '80px' }}>{props.toggleEdit ? 'Cancel' : 'Remove'}</button>
        </div>
    )
}

export default TodoItem