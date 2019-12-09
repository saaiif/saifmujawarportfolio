import React, {
 Component
} from "react"
import classes from "./contact.module.css"
// import {Grid,Cell} from 'react-mdl';

class Contact extends Component {
 render() {
  return (
   <div className={classes.contactBody}>
    {/* <Grid className={classes.contactGrid}>
               <Cell col={6} className={classes.contactCell}>
                  <h3>Saif Mujawar</h3>
                  <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height:'250px'}}/>

                  <p style={{paddingTop:'20px', margin:'auto', width:'75%'}}>Hello this is SAIF MUJAWAR i am front end developer, if you want to contact me you can reach with the beside details.</p>
               </Cell> */
    }
    {/* <Cell col={6}>Head 2</Cell>
            </Grid> */
    }

    <section id="contact">
     <div className={classes.container}>
      <div class="row">
       <div className={classes.contactMe} style={{
         textAlign: "center"
        }}>
        <h2>Contact Me</h2>
       </div>
      </div>
      <div className={classes.row}>
       <div className={classes.contactList}>
        <div class="cont">
         <ul className={classes.contact}>
          <li style={{
            textAlign: "left"
           }}>
           <p>
            <i class="fab fa-skype"/>
           </p>
           <p>
            <strong>Skype</strong>
            <br/>
            saifmujawar12@outlook.com
           </p>
          </li>
          <li style={{
            textAlign: "left"
           }}>
           <p>
            <i class="fas fa-phone"/>
           </p>
           <p>
            <strong>Phone</strong>
            <br/>
            (741) 155-6025
           </p>
          </li>
          <li style={{
            textAlign: "left"
           }}>
           <p>
            <i class="fas fa-envelope"/>
           </p>
           <p>
            <strong>E-mail</strong>
            <br/>
            mujawarmsaif@gmail.com
           </p>
          </li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </section>
   </div>
  )
 }
}

export default Contact