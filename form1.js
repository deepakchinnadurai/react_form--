import React  from 'react';
import './form.css';


export class Form1 extends React.Component {
   
    render() {
      return (
          <div className="form">
        <form >
    
            <input size="40" className="input" type="text" placeholder="enter your email id" />
             <br></br><br />
             <input size="40" className="input" type="text" placeholder="enter your password" />
             <br></br><br></br>
             <button className="btn" > submit</button>
        </form>
        </div>
      );
    }
  }