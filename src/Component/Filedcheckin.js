import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from './Form';
const Filedcheckin = () => {
  return (
    <Tabs 
    defaultActiveKey="home"
    id="uncontrolled-tab-example"
    className="m-5"
    
  >
    <Tab eventKey="home" title="Current" ><Form/>
   

   

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

export default Filedcheckin