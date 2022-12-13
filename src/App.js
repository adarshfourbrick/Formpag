import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home"><h1>bhbzxcvgsvgbn</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">vcbnm
      </Tab>
      <Tab eventKey="contact" title="Contact">nmbnmnbnm
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;