import * as React from 'react';

import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
export default function Mycard() {
  return (

<div style={{ backgroundColor:"rgba(23, 24, 102, 0.582)", boxShadow:'10px 10px 10px rgb(0,0,0,0.5)', borderRadius:'10px' , color: 'white' ,padding:'10px'}} >
     {/* card */ }
    <div>
           {/* containt */ }
           <div 
            style={{ display: 'flex', justifyContent: 'start', alignItems: 'end',
           
             }}
           dir='rtl'
           > 
               {/*header */ }
          <Typography style={{marginRight:'30px'}} variant="h1" > Reiad </Typography>
          <Typography style={{marginRight:'30px'}} variant="h5" > Montag 12.05.2024 </Typography>
       


             {/*header */ }
          </div>

          <hr style={{width:'100%'}} />

           <div>
             {/*body */ }

               <div  style={{display:'flex' ,flexDirection:'row' ,alignContent:'center' ,justifyContent:'space-around'}} dir='rtl' > 
                   {/*body  right*/ }

                      <div>   <Typography style={{textAlign:'right'}} variant="h2" > 12</Typography>
                     {/*temperature icon von api todo*/ }

                     <div>
                              <Typography style={{}} variant="h6" >broken Cloud</Typography>
                              <div  style={{display:'flex' ,flexDirection:'row' ,alignContent:'center' ,justifyContent:'space-around'}} >
                              <Typography style={{}} variant="h6" >min 12</Typography>
                              <Typography style={{}} variant="h12" > |   | </Typography>
                              <Typography style={{}} variant="h6" >max 32</Typography>


                              </div>
                        
                      </div>

                      </div>


                    
                      


                   {/*body right */ }


                   <div>      
                   {/*bodyleft icon */ }

                     <CloudIcon style={{fontSize:'200px'}}/>

                       {/* /bodyleft icon */ }
                     </div>
                   {/*body */ }
          
              </div>


          

             


            {/*body */ }
           </div>





      {/* /containt */ }
    </div>
 {/* /card */ }
</div>
  );
}
