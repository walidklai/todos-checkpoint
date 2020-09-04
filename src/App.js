import React ,{useState}from 'react'
import Todos from './components/Todos'
const TodoData=[
  {id :1 ,todo :'learn HTML' ,chck :false ,toggleEdit :false},
  {id :2 ,todo :'learn CSS' ,chck :false ,toggleEdit :false},
  {id :3 ,todo :'learn JAVASCRIPT' ,chck :false ,toggleEdit :false},
  {id :4 ,todo :'learn REACT' ,chck :false ,toggleEdit :false}
] //toggleEdit is the most used bool value in this App ,it's used to toggle input types ,toggle innerHTML and so on .....and the most important thing in having this var is that we can know in wich phase we are ,for example if we are in the checkbox or the input ,if we have to use the onchange of this or that ,and so on
const App=()=> {

  return (
    <div style={{textAlign :'center'}}>
      <Todos items={TodoData}/>
    </div>
  )
}

export default App
