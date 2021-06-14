import React  from 'react';
import './form.css';


export class Form3 extends React.Component {
   
    render() {
      return (
          <div className="form3">
        <form >
    
            <input size="40" className="input" type="text" placeholder="enter your name" />
             <br></br><br />
             <input size="40" className="input" type="text" placeholder="enter your email" />
             <br></br><br></br>
             <button className="btn" > submit</button>
        </form>
        </div>
      );
    }
  }