import React,{Component} from 'react';

class App extends Component{
    
    state = {toggle:false};
    
    
     toggleDisplayText = () =>{
         this.setState({toggle: !this.state.toggle});
     }    

    render(){
        
        return(
           <div>
            <h1>Hello Everyone!</h1>
            <p>My name is Nishant Narula</p>
            <p> Click on the button below to view more text</p>
            {this.state.toggle ? (<div>
             <p> Live your life according to your standards</p>
             <p> Click on the below button to view less text</p>
            <button onClick={this.toggleDisplayText}>Show Less:</button>
            </div>
         ):(
        
                 <div>
               <button onClick={this.toggleDisplayText}>Show More:</button>
            </div>
        
        )}
            </div>
            
            
            
        
        
        
        
        
        )
        
        
    }
    
    
}


export default App;
