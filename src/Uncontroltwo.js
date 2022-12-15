import React from 'react'
import Filedcheckin from './Component/Filedcheckin';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Uncontroltwo = () => {
  return (
    <Tabs 
    defaultActiveKey="home"
    id="uncontrolled-tab-example"
    className="m-5"
    
  >
    <Tab eventKey="home" title="Current" >
<Filedcheckin/>
   

    </Tab>
  
    <Tab eventKey="profile" title="History">
    </Tab>
    <Tab eventKey="contact" title="Files">
    </Tab>
    <Tab eventKey="Notes" title="Notes">
    </Tab>
   
  
       </Tabs>
  )
}

export default Uncontroltwo