import react,{Component} from 'react'
import './App.css'

class AppClass extends Component
{
  
    constructor()
    {
        super();
        this.state={background:'#000000'};
    }
     change =()=>
     {
       const randomcolor= Math.round(Math.random()*10000000).toString(16)
       console.log(randomcolor)
        this.setState(randomcolor)
     }

    render()
    {
         return(
             <div className="bgchanger" style={{backgroundcolor:background}}>
            <input type="color"></input>
           <button onClick={this.change}>changeusingclasss</button>

            </div>

         )

    }
}





}