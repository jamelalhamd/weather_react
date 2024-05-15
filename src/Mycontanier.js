import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { initReactI18next } from 'react-i18next';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Mycard from './Mycard';
import { useEffect } from 'react';
import axios from 'axios';
export default function Mycontanier() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">


      
       <div style={{height:'100vh',   display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column'}}>
          
            <Mycard style={{ boxShadow: '10px 10px 10px rgba(2,0,0,0.5)', '!important': 'true' }} />
          
          
       </div>

    


            
            
           



      </Container>
    </React.Fragment>
  );
}