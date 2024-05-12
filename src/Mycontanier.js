import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import Mycard from './Mycard';
export default function Mycontanier() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">


      
       <div style={{height:'100vh',   display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column'}}>
          
            <Mycard style={{ boxShadow: '10px 10px 10px rgba(2,0,0,0.5)', '!important': 'true' }} />
            <h6>EN</h6>
       </div>

    


            
            
           



      </Container>
    </React.Fragment>
  );
}