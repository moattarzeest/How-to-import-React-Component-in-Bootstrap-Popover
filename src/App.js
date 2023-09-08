import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip, Popover, Title, Content} from 'react-bootstrap';
import MyComponent from './components/PopoverContent'
import { Button } from 'react-bootstrap';

function App() {

	return (
	  <div>
		<h1>How to render React component inside Bootstrap Popover</h1>
	  <OverlayTrigger trigger="click" placement="right" overlay={
		 <Popover>
		 <MyComponent/>
		 </Popover>
	  }>
      <button>Click me</button>
    </OverlayTrigger>
	  </div>
	);
  }

  export default App;


