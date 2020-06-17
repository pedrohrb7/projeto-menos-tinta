import React, {Component} from 'react';
import Highcharts from 'highcharts';
import './graficos.css';

class Grafico5 extends Component {

  constructor(props) {
    super(props);
    this.state={
     
      series: [{
        name: "",
        colorByPoint: true,
        data:[
             
        ]
       

      }],
     
    };
  }

  highChartsRender() {
    Highcharts.chart({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            renderTo: 'grafico5'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
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

  componentDidMount() {
    let state =this.state;
    const{xAxis}=Highcharts.chart;
    var myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/GrafXDocumentosUsu?4B30", requestOptions)
    .then(response => response.json())
    .then(result => {   
                 
                  for(let item in result) { 
                    
                     state.series[0].data.push({name:result[item].usu_nome,y:result[item].documentos}); 
                     this.setState(state);
                     
                  } 
                 
                  
                  this.highChartsRender();
                        
    })
   
    .catch(error => console.log('error', error));

    
  

 
   
    
    
    
  } 

  render() {
    
    return (
      <div className="area-grafico">  
        <h2>Impressões por usuário</h2>  
        <div id="grafico5">
          
        
        </div>
      </div>  
   );
  }
}

export default Grafico5;