import react from "react";
import {View,Text} from 'react-native-paper'


const organization=()=>{
const options  = {
	method: 'GET',
    headers:{
        'Authorization': 'Bearer ',
        'Accept': 'application/vnd.deere.axiom.v3+json',
        'Connection': 'keep-alive'
    
    }
};

fetch("https://partnerapi.deere.com/platform/organizations;start=714;count=714", options)
  .then (res => res.json())
  .then(response => {
    return(response.json())
  })
}

export default organization;
