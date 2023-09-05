import react from "react";
import {View,Text} from 'react-native-paper'


const organization=()=>{
const options  = {
	method: 'GET',
    headers:{
        'Authorization': 'Bearer eyJraWQiOiJURUpqLThwSWdTRFNJeDNnR19aUjVOT1FQRlJRQ1JQaWE0S0N2YkpqZ3VrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlBYQi10dHFHeG5nTklwanctd0J2VFd6R1BCbmdZU3lKQVV2QWc2VGQ3V1kiLCJpc3MiOiJodHRwczovL3NpZ25pbi5qb2huZGVlcmUuY29tL29hdXRoMi9hdXM3OHRubGF5c01yYUZoQzF0NyIsImF1ZCI6ImNvbS5kZWVyZS5pc2cuYXhpb20iLCJpYXQiOjE2OTM0MjA5NTEsImV4cCI6MTY5MzQ2NDE1MSwiY2lkIjoiMG9hYW9iMHpjd0x2ZFJaaHc1ZDciLCJ1aWQiOiIwMHU3aXB2OTIxRGV5Y1pzTjVkNyIsInNjcCI6WyJhZzIiLCJhZzEiLCJmaWxlcyIsImFnMyIsIm9yZzEiLCJvcmcyIiwiZXEyIiwiam9icyIsImVxMSJdLCJhdXRoX3RpbWUiOjE2OTM0MjA5NDksInN1YiI6Ilg0ODg5MTFAdmRzcHJvZC5kZWVyZS5jb20iLCJpc2NzYyI6dHJ1ZSwidGllciI6IlBST0QiLCJjbmFtZSI6IkZvcmVzdExpbmsiLCJ1c2VyVHlwZSI6IkRlYWxlciBFbXBsb3llZSIsImNhcGlkIjoiOGQ0MTAzNDgtOWM4ZC00MDQ4LTgyMDgtYTgzYjAyMzBiNGEwIn0.TbkQm80oU14BXYiBjZ1VVS-ALlVpKq0Y1dVlJR5aB_LQUFoGo-9U4-dKQTwavylWxonHrBS4TpYwVOLIYQQCH3tgACoQcWHiKwH40EMX4OXGQZ1PiHCMw1ZiFBHIWxlsWlgoYDUE_8GTUHqiisIpmDa05S90Vw1tV0BePgvwMdeaKFskJvrkq9oTK6tLZdxbO_9qDq6pVuB45L9McrT6BlAgMpTl8fphKZs6EuaFtQAheM3Mvr-cytG3u8X36IMLXYC-CyEMRUYvMyIcp0I1TEJg7LGjpNLYPi_H9FZdj4yPJXDv0cmsGpvIMeo429igmLfZVpfq2Lv07wEA0D2sTQ',
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