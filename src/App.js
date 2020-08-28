import React from 'react'
import Profile from './profile/Profile'

const App = () => {
  const imgpath = ''
  const handleName = (name) => {
    alert(name)
  }
  return (
    <div style={{display :'flex' ,justifyContent :'space-around'}}>
      <Profile
        name='walid klai'
        bio='ahfoaaoifoiaoaohdoianoinaodnazndo
              nazodoazbroubarbararroaoroiaznroa
              nzronazorinaozrnaoiznroainroanzro
              nazornaoinranroanravonoernvoineri
              vnoernvoerovnonpvnznpevnpeznvpnev
              pnezipvnpenvpenvpnzevpnezpvnpnevev
              vnzevnezovnoeznvoeznoznonvozneonzoen'
        prof='dev' handleName={handleName} >
        <img src='https://source.unsplash.com/random' width='200' />
        <img src='https://source.unsplash.com/random' width='180' />
        <img src='https://source.unsplash.com/random' width='160' />
        <img src='https://source.unsplash.com/random' width='140' />
        <img src='https://source.unsplash.com/random' width='120' />
        <img src='https://source.unsplash.com/random' width='100' />
        <img src='https://source.unsplash.com/random' width='80' />
        <img src='https://source.unsplash.com/random' width='60' />
        <img src='https://source.unsplash.com/random' width='40' />
        <img src='https://source.unsplash.com/random' width='20' />
        <img src='https://source.unsplash.com/random' width='10' />
      </Profile>
    </div>
  )
}
export default App