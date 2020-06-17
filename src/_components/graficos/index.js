import React, { Component } from 'react';
import Grafico1 from './Grafico1';
import Grafico2 from './Grafico2';
import Grafico3 from './Grafico3';
import Grafico4 from './Grafico4';
import Grafico5 from './Grafico5';

export default class Graficos extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      apt:false,
      inicial:'',
      final:'',
      dInicio:'',
      dFinal:''
    };
  }

  consulta() {
    let state=this.state;
    state.apt=true;
    
    var sInicio = this.state.inicial;
    var sFinal = this.state.final;
    state.dInicio = sInicio.replace("-","").replace("-","").replace("T","").replace(":","")+"00";
    state.dFinal = sFinal.replace("-","").replace("-","").replace("T","").replace(":","")+"00";
   
    
    this.setState(state);
    
   
 
  }

  render() {
    const { inicial, final , dInicio, dFinal} = this.state
    return(
      <div className="screen-graficos">
        <div className="filtro">
          <p>Período</p>
          <input type="datetime-local" value={inicial} onChange={(e)=>this.setState({inicial: e.target.value})}/>
          <input type="datetime-local" value={final} onChange={(e)=>this.setState({final: e.target.value})}/>
          <a href="#" className="btn-consultar" onClick={()=>this.consulta()}>Consultar</a>

        </div>
        <div className="areaGrafico">
        <div>
         {this.state.apt?
            <Grafico5 />:''
         }  
         </div>
         <div>
         {this.state.apt?
            <Grafico4 />:''
         }  
         </div>
          <div>
          {this.state.apt?
            <Grafico1 inicio={dInicio} final={dFinal}/>: ''
           }  
          </div>
         <div>
         {this.state.apt?
            <Grafico3 />:''
         }  
         </div>
         <div>
         {this.state.apt?
            <Grafico2 />:''
         }  
         </div>
        
          
         
          
      
        </div>

      </div>
    );
  }
}