import * as React from 'react';
import { useEffect ,useState} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import moment from 'moment/moment';
import "moment/min/locales";
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
let cancelAxios=null;
moment.locale('de');
export default function Mycard() {

  const { t, i18n } = useTranslation();
  const[locale ,setlocale] =useState('ar');
    const [temp,settemp]=useState({number:null,
        description:"",
        min:null,
        max:null,
       name:"",
        icon:null,
    });
    const[date ,setdate]=useState("");//
    const direction = locale == "ar" ? "rtl" : "ltr";
useEffect(()=>{

  i18n.changeLanguage(locale);




    setdate(moment().format('l'));

    // Make a request for a user with a given ID
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=51.73&lon=9.02&appid=14227d404a282da8e5966403ee381d5f',  {
        cancelToken:new axios.CancelToken((c)=>{cancelAxios=c})
    })
  
      .then(function (response) {
        console.log(response.data);
        // handle success
const temper=Math.round(response.data.main.temp-272.15);
const temp_min=Math.round(response.data.main.temp_min-272.15);
const temp_max=Math.round(response.data.main.temp_max-272.15);
const name=response.data.name;
const icon=response.data.weather[0].icon;
const description=response.data.weather[0].description;
       settemp({number:temper,
        description:description,
        min:temp_min,
        max:temp_max,
       name:name,
        icon:` https://openweathermap.org/img/wn/${icon}@2x.png`,
    }) 

       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });



},[]);





  return (

<div>
  <div style={{ backgroundColor:"rgba(23, 24, 102, 0.582)", boxShadow:'10px 10px 10px rgb(0,0,0,0.5)', borderRadius:'10px' , color: 'white' ,padding:'10px'}} >
       {/* card */ }
      <div>
             {/* containt */ }
             <div 
              style={{ display: 'flex', justifyContent: 'start', alignItems: 'end',
             
               }}
             dir={direction}
             > 
                 {/*header */ }
            <Typography style={{marginRight:'30px'}} variant="h1" > {t( temp.name)}</Typography>
       
            <Typography style={{marginRight:'30px'}} variant="h5" > { date } </Typography>
         
           
  
               {/*header */ }
            </div>
            <br />
            <hr style={{width:'100%'}} />
  
             <div>
               {/*body */ }
  
                 <div  style={{display:'flex' ,flexDirection:'row' ,alignContent:'center' ,justifyContent:'space-around'}} dir={direction} > 
                     {/*body  right*/ }
                    
                        <div style={{display:'flex' ,flexDirection:'column' ,alignContent:'center' ,justifyContent:'space-around'}} >
                           <div>
                                <div style={{display:'flex' ,flexDirection:'row' ,alignContent:'center' ,justifyContent:'space-around'}}>   <Typography style={{textAlign:'right'}} variant="h2" >{temp.number}</Typography>
                                <img  src={temp.icon} ></img>
                           </div>
      
                           <div>
                                    <Typography style={{}} variant="h6" > {t( temp.description)}</Typography>
                                    <div  style={{display:'flex' ,flexDirection:'row' ,alignContent:'center' ,justifyContent:'space-around'}} >
                                    <Typography style={{}} variant="h6" > {t('Minimal') } :{temp.min}</Typography>
                                    <Typography style={{}} variant="h12" > |   | </Typography>
                                    <Typography style={{}} variant="h6" >{ t("Maximal")}: {temp.max}</Typography>
      
      
                                    </div>
                              
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

  <div style={{width:'100%' ,textAlign:'left' ,}} >    <Button onClick={() => { locale === "ar" ? setlocale("de") : setlocale("ar");  i18n.changeLanguage(locale); }} style={{ margin: '10px', color: 'white' }} variant="text">{locale === "ar" ?"Deutsch" :"عربي"}   </Button>
   </div>
</div>

  );
}
