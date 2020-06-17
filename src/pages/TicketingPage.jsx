import React, { Component } from "react";
import TicketingTable from "../_components/ticketing/TicketingTable";
import "../_components/ticketing/TicketingStyleSheet.css";

export default class TicketingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userJson: [],
            usuCodigo: "",
            impJson: [],
            impCodigo: "",
            dptJson: [],
            dptCodigo: "",
            bilhetagemJson: [],
            totalSemEconomia: 0,
            totalComEconomia: 0,
            dataInicial: "",
            dataFinal: ""
        };

        this.child = React.createRef();
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeImp = this.handleChangeImp.bind(this);
        this.handleChangeDpt = this.handleChangeDpt.bind(this);
        this.handleChangeDataIni = this.handleChangeDataIni.bind(this);
        this.handleChangeDataFim = this.handleChangeDataFim.bind(this);
    }

    handleChangeUser(event) {
        this.setState({usuCodigo: event.target.value});
    }

    handleChangeImp(event) {
        this.setState({impCodigo: event.target.value});
    }

    handleChangeDpt(event) {
        this.setState({dptCodigo: event.target.value});
    }

    handleChangeDataIni(event) {
        this.setState({dataInicial: event.target.value});
    }

    handleChangeDataFim(event) {
        this.setState({dataFinal: event.target.value});
    }    

    triggerChildAlert = () => {

        this.child.current.getAlert();

        // Cria variável das datas filtradas e trata os dados, concatenando "HHMMSS" como "000000"
        var dataInicial = this.state.dataInicial;
        var dataFinal = this.state.dataFinal;
        dataInicial = dataInicial.replace("-", "").replace("-", "").replace("|", "").replace(":", "")
        dataFinal = dataFinal.replace("-", "").replace("-", "").replace("|", "").replace(":", "")

        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        // Concatena os valores dos filtros na URL
        var url = "https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Bilhetagem?70EF42"
        url += "&" + (dataInicial ? dataInicial + "000000" : "0")
        url += "&" + (dataFinal ? dataFinal + "000000" : "0")
        url += "&" + (this.state.usuCodigo ? this.state.usuCodigo : "0")
        url += "&" + (this.state.impCodigo ? this.state.impCodigo : "0")
        url += "&" + (this.state.dptCodigo ? this.state.dptCodigo : "0");

        // Nova chamada na API com novos parâmetros e retorna os dados filtrados
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.setState({bilhetagemJson: data})
            this.somaValorSemEconomia()
            this.somaValorComEconomia()
        })
        .catch(error => console.log('error', error));  
    }    


    somaValorSemEconomia() {

        /* Soma todos os objetos "valsemeconomia" do JSON de bilhetagem 
        e atribui o resultado total a totalSemEconomia */
        let state = this.state;
        let total = this.state.bilhetagemJson.reduce((total, valor) => total + valor.valsemeconomia, 0);
        state.bilhetagemJson = []
        this.setState({totalSemEconomia: total})
        console.log(total)

    }

    somaValorComEconomia() {

        /* Soma todos os objetos "valcomeconomia" do JSON de bilhetagem 
        e atribui o resultado total a totalComEconomia */
        let state = this.state;
        let total = this.state.bilhetagemJson.reduce((total, valor) => total + valor.valcomeconomia, 0);
        state.bilhetagemJson = []
        this.setState({totalComEconomia: total})

    }
    
    componentDidMount() {

        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        // Chamada na API - Todos os resultados do método Bilhetagem
        fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Bilhetagem?70EF42", requestOptions)
        .then(response => response.json())
        .then(data => {
            this.setState({bilhetagemJson: data})
            this.somaValorSemEconomia()
            this.somaValorComEconomia()
        })
        .catch(error => console.log('error', error));

        // Chamada na API - Método Usuários
        fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/Usuarios?70EF42", requestOptions)
        .then(response => response.json())
        .then(data => this.setState({userJson: data}))
        .catch(error => console.log('error', error));
        
        // Chamada na API -  Método Impressoras
        fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Impressoras?70EF42", requestOptions)
        .then(response => response.json())
        .then(data => this.setState({impJson: data}))
        .catch(error => console.log('error', error));

        // Chamada na API -  Método Departamentos
        fetch("https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Departamentos?70EF42", requestOptions)
        .then(response => response.json())
        .then(data => this.setState({dptJson: data}))
        .catch(error => console.log('error', error)); 
    };

    render(){

        return(

            <div className="ticketing-page">

                {/* INÍCIO DOS FILTROS */}              
                <div className='ticketing-filters'> 

                    {/* Filtro de Usuários */}
                    <div id="user-filter" className="filters">
                        <select value={this.state.usuCodigo} onChange={this.handleChangeUser}>
                            <option>Usuários</option>
                            {this.state.userJson.map(item => 
                                <option value={item.usu_codigo}>{item.usu_nome}</option>
                            )}
                        </select>
                    </div>

                    {/* Filtro de Impressoras */}
                    <div id="printer-filter" className="filters">
                        <select value={this.state.impCodigo} onChange={this.handleChangeImp}>
                            <option>Impressoras</option>
                            {this.state.impJson.map(item => 
                                <option value={item.imp_codigo}>{item.imp_nome}</option>
                            )}
                        </select>
                    </div>           

                    {/* Filtro de Departamentos */}
                    <div id="dpt-filter" className="filters">
                        <select value={this.state.dptCodigo} onChange={this.handleChangeDpt}>
                            <option>Departamentos</option>
                            {this.state.dptJson.map(item => 
                                <option value={item.dpt_codigo}>{item.dpt_nome}</option>
                            )}
                        </select>
                    </div>      

                    {/* Filtro de Datas */}
                    <div className="filters date-filters-container">
                        Período:
                        <div className="date-select-container">
                            <div className="date-filters" id="init-date-filter">
                                <input type="date" value={this.state.dataInicial} onChange={this.handleChangeDataIni}/>
                            </div>
                            <div className="date-filters" id="final-date-filter">
                                <input type="date" value={this.state.dataFinal} onChange={this.handleChangeDataFim}/>
                            </div>
                        </div>
                    </div>

                    <button className="filter-button" onClick={this.triggerChildAlert}>Filtrar</button>
                </div>
                {/* FIM DOS FILTROS */}

                {/* TABELA DE LISTAGEM DOS DADOS DA API */}
                <div className='ticketing-table'>
                   <TicketingTable valor={this.state} ref={this.child}/> 
                </div>
                
                
                <div className="under-table-container">

                    {/* INÍCIO - DADOS DE PORCENTAGEM DE ECONOMIA */}
                    <div className="under-table-container-left">
                        <div style={{textAlign: 'left', padding: '10px 30px'}}>
                            <form>
                                <label>
                                    <span style={{color: '#5babdf', fontWeight: '500'}}>Economia:</span> <strong>Fora do sistema </strong>
                                    Exibir <input type="checkbox"/>
                                </label>
                            </form>
                        </div>
                        <div style={{ display: 'flex'}}>
                            <div className="porc-button-container">
                                <button className="porc-button" style={{ backgroundColor: '#f9bbe0' }}>
                                    Até 15%
                                </button>
                            </div>
                            <div className="porc-button-container">
                                <button className="porc-button" style={{ backgroundColor: '#f8e583' }}>
                                    De 15 a 50%
                                </button>
                            </div>
                            <div className="porc-button-container">
                                <button className="porc-button" style={{ backgroundColor: '#94b5d7' }}>
                                    Mais de 50%
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* FIM - DADOS DE PORCENTAGEM DE ECONOMIA */}

                    {/* INÍCIO - DADOS MONETÁRIOS DE ECONOMIA */}
                    <div className="valores-econo-container">
                        <div className="valores-econo" id="val-sem-econo">
                            Total Sem Economia: R$ {this.state.totalSemEconomia.toFixed(2)}
                        </div>
                        <div className="valores-econo" id="val-com-econo">
                            Total Com Economia: R$ {this.state.totalComEconomia.toFixed(2)}
                        </div>
                    </div>
                    {/* FIM - DADOS MONETÁRIOS DE ECONOMIA */}
                </div>
            </div>
        )
    }
}
