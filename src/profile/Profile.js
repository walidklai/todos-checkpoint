import React from 'react'
import PropTypes from 'prop-types'

const Profile = (props) => {
    
    return(
        <div>
            {props.children}
            <h1 style={{border : '1px solid grey',color :'blue',width :'200px',textShadow : '50px 13px  20px black'}}>{props.name}</h1>
            <p style={{width :'150px' ,textShadow : '50px 13px  20px black'}}>{props.bio}</p>
            <h3 style={{textShadow : '50px 13px  20px black'}}>{props.prof}</h3>
            <button onClick={()=>props.handleName(props.name)}style={{textShadow : '50px 13px  20px black'}}>BUTTON</button>
        </div>
    )
}
Profile.propTypes={
    name :PropTypes.string,
    bio :PropTypes.string,
    prof :PropTypes.string
}
Profile.defaultProps={
    name : 'unknown',
    bio : 'not available',
    prof :'not available',
    children :'not available'
}

export default Profile