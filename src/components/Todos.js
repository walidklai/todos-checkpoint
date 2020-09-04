import React, { useState } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const [t, setT] = useState(props.items)
    const [newAdd, setNewAdd] = useState('')
    const [newEdit, setNewEdit] = useState('')
    const [show, setshow] = useState(false)

    const handleChange = (e) => {
        setNewAdd(e.target.value)
    }
    const handleChange2 = (e) => { //handles the event of the input
        setNewEdit(e.target.value)
    }
    const handleChange3 = (id) => { //handles the event of the checkbox
        console.log('checkeeeeeeeeeed', id)
        setT(t.map(el =>
            el.id === id ? { ...el, chck: !el.chck } : el
        ))
    }
    const editTodo = (id) => {
        setT(t.map(el =>
            el.id === id ? { ...el, todo: newEdit, toggleEdit: !el.toggleEdit } : el //when this fct is called the fct 'handleEdit'(parent fct) already toggles the 'toggleEdit' so in order to get flase as the initial value i had to toggle it again
        ))
    }
    const handleRm = (id, toggleEdit) => {
        if (!toggleEdit) {
            let tt = t.filter(el => el.id !== id)
            setT(tt)
            t.forEach((el, i) => el.id = i + 1)//everytime the user adds or removes a Todo we make sure to refresh the ids ,we can never get the same ids and it's nice to have ids that looks like (1,2,3,4) rather than (1.54848484 , 5486.14475) "for me atleast :D ,Sorry hamma / hejer xD"
        }
        else {
            let tt = t.map(el => el.id === id ? { ...el, toggleEdit: !el.toggleEdit } : el)
            setNewEdit('')
            setT(tt)
        }
    }
    const handleEdit = (id, toggleEdit,todo,setnewEdit) => {
        console.log('edited', id, toggleEdit)
        let tt = t.map(el => el.id === id ? { ...el, toggleEdit: !el.toggleEdit} : el)
        setT(tt)
        setNewEdit(tt.filter(el=>el.id===id)[0].todo) //once user clicks edit ,the initial value of the input recieves the current Todo text ,the filter method returns an array ,so i get the index 0 to access the text because since the id is unique ,we can never recieve a tab.length bigger than 1
        if (toggleEdit) {
            console.log('test')
           // if(!(newEdit==='' && todo!==''))
            editTodo(id)
            setNewEdit('') //once we are done with editing and click on save ,we have to re-initilise the newEdit in order to not keep the last edited initial Todo text inside it
        }
    }
    const showAdd = () => {
        if (show)
        if(newAdd!=='')
            setT([...t, { id: 0, todo: newAdd, chck: false, toggleEdit: false }])
        t.forEach((el, i) => el.id = i + 1) //
        setshow(!show)
        setNewAdd('')
        console.log(t)

    }
    const newTable = t.map(el => <TodoItem key={el.id} {...el} handleRm={handleRm} handleEdit={handleEdit} handleChange2={handleChange2} handleChange3={handleChange3} newEdit={newEdit} setNewEdit={setNewEdit}/>)
    const add = <input type='text' placeholder='type your new Todo here' value={newAdd} onChange={handleChange} newEdit={newEdit}/>


    console.log(t)
    return (
        <div className='todos'>
            {newTable}
            <hr />
            <button style={{ width: '80px' }} onClick={showAdd}>{show ? 'Save Todo' : 'Add Todo'}</button>
            {show ? add : null}
            <h1>{newAdd}</h1>
            <h1>{newEdit}</h1>
        </div>
    )
}

export default Todos
