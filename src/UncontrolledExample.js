import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Form from './Component/Form';
import FormTwo from './Component/FormTwo';
import History from './Component/History';

function UncontrolledExample() {
  return (
    <Tabs 
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="m-5"
      
    >
      <Tab eventKey="home" title="Current" ><Form/>
      <div style={{border:"4px solid #8d99ae" ,margin:"20px"}}>
      <FormTwo/>

      </div>
  
      </Tab>
    
      <Tab eventKey="profile" title="History"><History/>
      </Tab>
      <Tab eventKey="contact" title="Files">
      </Tab>
      <Tab eventKey="Notes" title="Notes">
      </Tab>
     
    
         </Tabs>
   
    
  );
}

export default UncontrolledExample;