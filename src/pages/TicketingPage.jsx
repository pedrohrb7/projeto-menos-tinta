import React, {Component} from 'react';
import TicketingTable from './TicketingTable';
import './TicketingStyleSheet.css';

export default class TicketingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userJson: [],
            usuCodigo: "",
            impJson: [],
            impCodigo: "",
            dptJson: [],
            dptCodigo: ""
            // dataInicial: "",
            // dataFinal: ""
        };

        this.child = React.createRef();
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeImp = this.handleChangeImp.bind(this);
        this.handleChangeDpt = this.handleChangeDpt.bind(this);
        // this.handleChangeDataIni = this.handleChangeDataIni.bind(this);
        // this.handleChangeDataFim = this.handleChangeDataFim.bind(this)
    }

    handleChangeUser(event) {
        this.setState({usuCodigo: event.target.value});
        // console.log(this.state)
    }

    handleChangeImp(event) {
        this.setState({impCodigo: event.target.value});
    }

    handleChangeDpt(event) {
        this.setState({dptCodigo: event.target.value});
    }

    // handleChangeDataIni(event) {
    //     this.setState({dataInicial: event.target.value});
    // }

    // handleChangeDataFim(event) {
    //     this.setState({dataFinal: event.target.value});
    // }    

    triggerChildAlert = () => {
        this.child.current.getAlert();
    }

    componentDidMount() {

        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

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

        //Estilo filtros 
        // const divStyle = {
        //     padding: '10px',
        //     display: 'flex',
        // };

        // const selectStyle = {
        //     fontFamily: '"Roboto", sans-serif',
        //     fontSize: 15,
        //     color: 'gray',
        //     border: 'solid 2px #e9e9e9',
        //     borderRadius: 5,
        //     padding: '5px 60px 5px 10px',
        //     height: '40px'
        // };

        //Estilo botão de envio dos filtros
        const buttonStyle = { 
            backgroundColor: '#5babdf',
            color: 'white',
            fontFamily: '"Roboto", sans-serif',
            fontWeight: '700',
            letterSpacing: '1px',
            margin: '10px',
            padding: '5px 30px',
            height: '40px',
            border: 'none',
            borderRadius: 20,
            // boxShadow: ,
        };

        return(

            <div className="ticketing-page">

                {/* INÍCIO DOS FILTROS */}              
                <div className='ticketing-filters'> 
                    {/* Filtro de Usuários */}
                    <div id="user-filter" className="filter">
                        <select value={this.state.usuCodigo} onChange={this.handleChangeUser}>
                            <option>Usuários</option>
                            {this.state.userJson.map(item => 
                                <option value={item.usu_codigo}>{item.usu_nome}</option>
                            )}
                        </select>
                    </div>
                    {/* Filtro de Impressoras */}
                    <div id="printer-filter" className="filter">
                        <select value={this.state.impCodigo} onChange={this.handleChangeImp}>
                            <option>Impressoras</option>
                            {this.state.impJson.map(item => 
                                <option value={item.imp_codigo}>{item.imp_nome}</option>
                            )}
                        </select>
                    </div>                    
                    {/* Filtro de Departamentos */}
                    <div id="dpt-filter" className="filter">
                        <select value={this.state.dptCodigo} onChange={this.handleChangeDpt}>
                            <option>Departamentos</option>
                            {this.state.dptJson.map(item => 
                                <option value={item.dpt_codigo}>{item.dpt_nome}</option>
                            )}
                        </select>
                    </div>                    
                    {/* Filtro de Datas */}
                    {/* <div className="filter date-filters-container">
                        Período:
                        <div className="date-filters" id="init-date-filter">
                            <input type="date" value={this.state.dataInicial} onChange={this.handleChangeDataIni}/>
                        </div>
                        <div className="date-filters" id="final-date-filter">
                            <input type="date" value={this.state.dataFinal} onChange={this.handleChangeDataFim}/>
                        </div>
                    </div> */}

                    <button onClick={this.triggerChildAlert} style={buttonStyle}>Filtrar</button>
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
                            Total Sem Economia: R$
                        </div>
                        <div className="valores-econo" id="val-com-econo">
                            Total Com Economia: R$
                        </div>
                    </div>
                    {/* FIM - DADOS MONETÁRIOS DE ECONOMIA */}
                </div>
            </div>
        )
    }
}

