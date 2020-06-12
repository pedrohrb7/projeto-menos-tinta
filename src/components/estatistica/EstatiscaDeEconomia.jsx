import React, { Component } from 'react';

import Highcharts from 'highcharts';

import './EstatiscaDeEconomia.css';



class EstatiscaDeEconomia extends Component {
 
    constructor(props) {
      
        super(props);
        
        this.state={
          
            semEconomia:[ 
                {name:"Custo sem economia:", dados:"valoreconomia", valores:0},
                {name:"Valor economizado:", dados:"valoreconomizado", valores: 0},
                {name:"Custo Real:", dados:"valorreal", valores: 0}
               ],
            resultadoApi:[],
          
            series: [{
              data:[{
                name:'',y:0
              },
              {
                name:'',y:0}   
             ]
          }],
         };
      }
      //Dados biblioteca gráficos
      highChartsRender() {
        Highcharts.chart({
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',
              renderTo: 'atmospheric-composition'
            },
            title: {
              verticalAlign: 'middle',
              floating: true,
              text: '',
              style: {
                fontSize: '10px',
              }
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }  
              }
            },
            series: this.state.series
        });
    }
    ///Consulta API
    componentDidMount(){
        let state = this.state;
        let myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/ConsolidadoEconomiaGeral?E754", requestOptions)
      .then(response => response.json())
      .then(result => {
      ////Retorno dos dados da API
        for(let item in result) {
          state.semEconomia[0].valores=(result[item].custosemeconomia).toFixed(2);
          state.semEconomia[1].valores=(result[item].economizado).toFixed(2)  
          state.semEconomia[2].valores=(result[item].custoreal).toFixed(2);
      /// Gráfico   
          state.series[0].data[0].name = 'Economizado';
          state.series[0].data[1].name = 'Sem economia';
          state.series[0].data[0].y = parseFloat(result[item].economizado.toFixed(2)); 
          state.series[0].data[1].y = parseFloat(result[item].custoreal.toFixed(2));
          this.setState(state);
          console.log(this.state);
        }
          this.highChartsRender();
      })
         .catch(error => console.log('error', error));
      }
    render(){
        return(
          <>
            <div className="container-flexbox">           
               {this.state.semEconomia.map((item) => {
                return(
                <div className="valores">
                   <p><strong>{item.name}</strong></p>  
                   <p className={item.dados}> 
                      R${item.valores}
                  </p>                             
               </div>
              )
         })
        } 
           </div>
               <div id="atmospheric-composition" className="grafico"> 
               </div>
         </>    
        )
    }
}
export default EstatiscaDeEconomia;