import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Mycard from './Mycard';
import axios from 'axios';
export default function Mycontanier() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">


      
       <div style={{height:'100vh',   display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column'}}>
          
            <Mycard style={{ boxShadow: '10px 10px 10px rgba(2,0,0,0.5)', '!important': 'true' }} />
            <div style={{width:'100%' ,textAlign:'left' ,}} >    <Button style={{margin:'10px',color:'white'}}   variant="text">Ar</Button> </div>
         
          
       </div>

    


            
            
           



      </Container>
    </React.Fragment>
  );
}