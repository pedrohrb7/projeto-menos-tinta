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
        .then(data => this.setState({resultJson: data}))
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
                        <tr> 
                            {/* Coloca os dados do JSON do método Bilhetagem na tabela */}
                            <td>{this.state.resultJson.map(item => 
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
                            </td>
                        </tr>
                    </tbody>
                {/* </table> */}
                </Table>
            </div>
        )
    }
}
