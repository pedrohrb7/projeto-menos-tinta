import React, {Component} from 'react';
import { Table } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";

export default class TicketingTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultJson: [],
            usuCodigo: "",
            impCodigo: "",
            dptCodigo: ""
        }
    }

    getAlert() {
        // console.log('selectedFilters:', this.props)
        console.log('usuCodigo:', this.props);

        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        // this.state.selectedFilters.toString();

        // this.setstate({selectedFilters: {valor: { usuCodigo: "", impCodigo: "", dptCodigo: ""}}})

        var url = "https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Bilhetagem?70EF42&0&0"
        url += "&" + (this.state.usuCodigo ? this.state.usuCodigo : "0")
        url += "&" + (this.state.impCodigo ? this.state.impCodigo : "0")
        url += "&" + (this.state.dptCodigo ? this.state.dptCodigo : "0");
        // url += '&'+(params['imp_codigo'] ? params['imp_codigo'] : 0);
        // url += '&'+(params['dpt_codigo'] ? params['dpt_codigo'] : 0);
        // console.log(url)

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({resultJson: data}))
        .catch(error => console.log('error', error));    
        console.log(url)
    } 

    componentDidMount() {

        // Solicitação de dados da API 
        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Bilhetagem?70EF42", requestOptions)
        .then(response => response.json())
        .then(data => this.setState({resultJson: data}))
        .catch(error => console.log('error', error));    
    } 

    render() {

        // Estilização dos elementos da tabela
        const testeDiv = {
            backgroundColor: 'red', //REMOVER COR VERMELHA!!!
            paddingTop: '30px',
            maxHeight: '300px',
            overflowY: 'scroll'
        };

        const tableBodyStyle = {
            backgroundColor: 'white',
        };

        const tableStyle = {
            width: '98%',
            margin: 'auto',
        };

        const tableHeadStyle = {
            backgroundColor: '#e9e9e9',
            fontSize: '17px',
            height: '63px',
            width: '50px',
            paddingLeft: '15px',
        };

        const tableCellDiv = {
            padding: '10px',  
            fontSize: '17px',
            color: '#bebebf',
            borderBottom: '1px solid'
        }

        return(
            <div style={testeDiv} id="ticketing-table-container">
                <Table style={tableStyle} id="ticketing-table" className="table">
                {/* <table> */}
                    <thead style={tableHeadStyle}>
                        <tr>
                            <th style={{ borderTopLeftRadius: "20px" }}>Usuário</th>
                            <th>Computador</th>
                            <th>Impressora</th>
                            <th>Departamento</th>
                            <th>Documento</th>
                            <th>Data</th>
                            <th>Páginas</th>
                            <th style={{ borderTopRightRadius: "20px" }}>% Economia</th>
                        </tr>
                    </thead>
                    <tbody style={tableBodyStyle}>
                        <tr> 
                            {/* Coloca os dados do JSON do método Bilhetagem na tabela */}
                            <td>{this.state.resultJson.map(item => 
                                <div style={tableCellDiv}>{item.usu_nome}</div>
                                )}
                            </td>
                            <td style={tableCellDiv}>{this.state.resultJson.map(item => 
                                <div>{item.doc_computador}</div>
                                )}
                            </td>
                            <td style={tableCellDiv}>{this.state.resultJson.map(item => 
                                <div>{item.imp_nome}</div>
                                )}
                            </td>
                            <td style={tableCellDiv}>{this.state.resultJson.map(item => 
                                <div>{item.dpt_nome}</div>
                                )}
                            </td>
                            <td style={tableCellDiv}>{this.state.resultJson.map(item => 
                                <div>{item.doc_nome}</div>
                                )}
                            </td>
                            <td style={tableCellDiv}>{this.state.resultJson.map(item => 
                                <div>{item.doc_data}</div>
                                )}
                            </td>
                            <td style={tableCellDiv}>{this.state.resultJson.map(item => 
                                <div>{item.doc_paginas}</div>
                                )}
                            </td>
                            <td style={tableCellDiv}>{this.state.resultJson.map(item => 
                                <div>{item.doc_porc}</div>
                                )}
                            </td>
                        </tr>
                    </tbody>
                {/* </table> */}
                </Table>
            </div>
        )
    }
}
