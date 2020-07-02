import React, {Component} from 'react';
import { Table } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import './TicketingStyleSheet.css';

export default class TicketingTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultJson: [],
        }
    }

    getAlert() {

        // Cria variável das datas filtradas e trata os dados, concatenando "HHMMSS" como "000000"
        var dataInicial = this.props.valor.dataInicial;
        var dataFinal = this.props.valor.dataFinal;
        dataInicial = dataInicial.replace("-", "").replace("-", "").replace("|", "").replace(":", "")
        dataFinal = dataFinal.replace("-", "").replace("-", "").replace("|", "").replace(":", "")
        console.log(dataFinal)

        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        // Concatena os valores dos filtros selecionados na URL
        var url = "https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Bilhetagem?70EF42"
        url += "&" + (dataInicial ? dataInicial + "000000" : "0")
        url += "&" + (dataFinal ? dataFinal + "000000" : "0")
        url += "&" + (this.props.valor.usuCodigo ? this.props.valor.usuCodigo : "0")
        url += "&" + (this.props.valor.impCodigo ? this.props.valor.impCodigo : "0")
        url += "&" + (this.props.valor.dptCodigo ? this.props.valor.dptCodigo : "0");

        // Nova chamada na API com novos parâmetros e retorna os dados filtrados
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({resultJson: data}))
        .catch(error => console.log('error', error));    
        console.log(url)
    } 

    componentDidMount() {

        // Solicitação de dados da API - retorna todos os dados disponíveis e coloca na tabela
        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Bilhetagem?70EF42", requestOptions)
        .then(response => response.json())
        .then(data => {this.setState({resultJson: data}) 
            data.map(item => {
                var year = item.doc_data.toString().substring(0, 4)
                var month = item.doc_data.toString().substring(4, 6)
                var day = item.doc_data.toString().substring(6, 8)
                item.doc_data = day + '/' + month + '/' + year

                var rowPorc = ''
                if (item.doc_porc <= 15) {
                    rowPorc = '#f9bbe0'
                } else if (item.doc_porc > 15 && item.doc_porc <= 50) {
                    rowPorc = '#f8e583'
                } else {
                    rowPorc = '#94b5d7'
                }
                item.row_color = rowPorc
            }
        )})
        .catch(error => console.log('error', error));
    } 

    render() {

        return(

            <div id="ticketing-table-container">
                <Table id="ticketing-table" className="table">
                {/* <table> */}
                    <thead>
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
                    <tbody>
                        {this.state.resultJson.map(item => 
                            <tr style={{ backgroundColor: item.row_color }} className="table-cell">
                                <td>{item.usu_nome}</td>
                                <td>{item.doc_computador}</td>
                                <td>{item.imp_nome}</td>
                                <td>{item.dpt_nome}</td>
                                <td>{item.doc_nome}</td>
                                <td>{item.doc_data}</td>
                                <td>{item.doc_paginas}</td>
                                <td>{item.doc_porc}</td>
                            </tr>
                        )}
                        {/* <tr>  */}
                            {/* Coloca os dados do JSON do método Bilhetagem na tabela */}
                            {/* <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.usu_nome}</div>
                                )}
                            </td>
                            <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.doc_computador}</div>
                                )}
                            </td>
                            <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.imp_nome}</div>
                                )}
                            </td>
                            <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.dpt_nome}</div>
                                )}
                            </td>
                            <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.doc_nome}</div>
                                )}
                            </td>
                            <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.doc_data}</div>
                                )}
                            </td>
                            <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.doc_paginas}</div>
                                )}
                            </td>
                            <td>{this.state.resultJson.map(item => 
                                <div className="table-cell">{item.doc_porc}</div>
                                )}
                            </td> */}
                        {/* </tr> */}
                    </tbody>
                {/* </table> */}
                </Table>
            </div>
        )
    }
}
