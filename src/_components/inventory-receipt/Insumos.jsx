import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './Insumos.css'

document.getElementById('root')

export default class Insumos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cod_empresa: '',
            inicial: '',
            final: '',
            dataInicial: '',
            dataFinal: '',
            data: [],
            usuario: [],
            usuarioSelecionado: "",
            impressora: [],
            imp_selecionada: "",
            departamento: [],
            dept_selecionado: "",
        };

        //Metodo usado para salvar o valor
        this.child = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
        this.handleChangeImpressora = this.handleChangeImpressora.bind(this);
        this.handleChangeDepartamento = this.handleChangeDepartamento.bind(this);
    }


    //Definindo o valor das variaveis do constructor
    handleChange(event) {
        this.setState({ usuarioSelecionado: event.target.value });
    }

    handleChangeUsuario(event) {
        this.setState({ usuarioSelecionado: event.target.value });
    }

    handleChangeImpressora(event) {
        this.setState({ imp_selecionada: event.target.value });
    }

    handleChangeDepartamento(event) {
        this.setState({ dept_selecionado: event.target.value });
    }



    componentDidMount() {

        //INICIO DA CHAMADA DA API DE ENTRADA DE ESTOQUE
        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }

        fetch('https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/EntradasEstoque?9986D8', requestOptions)
            .then(rest => rest.json())
            .then(data => this.setState({ data }))
            .catch(Error=>console.log(Error));


        //INICIO DA CHAMADA DA API DE USUÁRIOS
        fetch('https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Usuarios?0877')
            .then(rest => rest.json())
            .then(usuario => this.setState({ usuario }))
            .catch(Error=>console.log(Error));

        //INICIO DA CHAMADA DA API DE IMPRESSORA
        fetch('https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Impressoras?0877')
            .then(rest => rest.json())
            .then(impressora => this.setState({ impressora }))
            .catch(Error=>console.log(Error));

        //INICIO DA CHAMADA DA API DE DEPARTAMENTO
        fetch('https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Departamentos?0877', requestOptions)
            .then(rest => rest.json())
            .then(departamento => this.setState({ departamento }))
            .catch(Error=>console.log(Error));

    }


    //Onde filtra os dados
    consultar() {
        let state = this.state

        var dataInicial = this.state.dataInicial
        var dataFinal = this.state.dataFinal
        
         state.inicio = dataInicial.replace("-", "").replace("-", "").replace("|", "").replace(":", "") + ""
         state.final = dataFinal.replace("-", "").replace("-", "").replace("|", "").replace(":", "") + ""
         state.dataInicial = dataInicial.replace("-", "").replace("-", "").replace("|", "").replace(":", "") + ""
         state.dataFinal = dataFinal.replace("-", "").replace("-", "").replace("|", "").replace(":", "") + ""
         state.data = []


        //Chamada da api para atualizar a tabela
        var myHeaders = new Headers();
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        

        //Url base
        var url = 'https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/EntradasEstoque?9986D8'

        //Adicionando os parametros na url base

        url +=  ("" ? '&' + "" : "" )
        url += '&' + (this.state.dataInicial ? this.state.dataInicial : 0 )
        url += '&' + (this.state.dataFinal ? this.state.dataFinal : 0 )
        url += '&' + (this.state.usuarioSelecionado ? this.state.usuarioSelecionado : 0 )
        url += '&' + (this.state.imp_selecionada ? this.state.imp_selecionada : 0 )
        url += '&' + (this.state.dept_selecionado ? this.state.dept_selecionado : 0 )

        
        console.log(url)

        // fetch('https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/EntradasEstoque?9986D8', requestOptions)
        fetch(url, requestOptions)
            .then(rest => rest.json())
            .then(data => {
                state.data = data
                this.setState(state) //Atualização assincrona
            })
            .catch(Error=>console.log(Error));

        console.log(state)

        //  this.setState(state) //Para ver a atualização da tela (pode remover depois, não importante!)

        /*
           this.setState(state)fora do Fetch retira as informações da tela
           this.setState(state) dentro do Fetch retorna as informações da tela
        */
    }

    render() {
        const { dataInicial, dataFinal } = this.state
        const items = []
        const usuarios = []
        const impressoras = []
        const departamentos = []




        //RETORNO DAS INFORMAÇÕES DA TABELA
        for (const [index, value] of this.state.data.entries()) {

            items.push(
                <tr>
                    <td>{value.usu_nome}</td>
                    <td>{value.dpt_nome}</td>
                    <td>{value.ent_data}</td>
                    <td>{value.imp_nome}</td>
                    <td>{value.mod_impressora}</td>
                    <td>{value.mod_codigo}</td>
                    <td>{value.ent_qtd}</td>
                    <td>{value.ent_valor}</td>
                </tr>
            )
        }


        //RETORNO DAS INFORMAÇÕES DAO USUÁRIO
        for (const [index, value] of this.state.usuario.entries()) {

            usuarios.push(
                <option value={value.usu_codigo}>{value.usu_nome}</option>
            )

        }

        //RETORNO DAS INFORMAÇÕES DA IMPRESSORA
        for (const [index, value] of this.state.impressora.entries()) {
            impressoras.push(
                <option value={value.imp_codigo}>{value.imp_nome}</option>
            )

        }

        //RETORNO DAS INFORMAÇÕES DO DEPARTAMENTO
        for (const [index, value] of this.state.departamento.entries()) {
            departamentos.push(
                <option placeholder="departamentos" value={value.dpt_codigo}>{value.dpt_nome}</option>
            )

        }


        return (
            <main className="content container">
                {/* <div className="row mt-5 ">
                    <div className="col-4 offset-6 periodo">
                        Período:
                    </div>
                </div> */}

                {/*------ INÍCIO DO FILTRO -----------*/}
                <div className="insumo-container">
                    {/*------ INÍCIO DO FILTRO SELECT  -----------*/}
                    {/* <div className="col-6"> */}
                        {/* <div className="row"> */}
                            <div class="filtros">

                                <select className="" value={this.state.usuarioSelecionado} onChange={this.handleChangeUsuario}>
                                    <option>Usuarios</option>
                                    {usuarios}
                                </select>

                            </div>
                            <div className="filtros">

                                <select className="" value={this.state.imp_selecionada} onChange={this.handleChangeImpressora} >
                                    <option>impressora</option>
                                    {impressoras}
                                </select>

                            </div>
                            <div className="filtros">

                                <select className="" value={this.state.dept_selecionado} onChange={this.handleChangeDepartamento} >
                                    <option>Departamento</option>
                                    {departamentos}
                                </select>

                            </div>
                        {/* </div> */}
                    {/* </div> */}
                    {/*------ FIM DO FILTRO SELECT  -----------*/}

                    {/*------ INÍCIO DO FILTRO POR DATA -----------*/}
                    <div className="data-filtro-container">
                        Período:
                        <div className="date-container">
                            <div className="data-filter">

                                <input className="d-start" type="date" value={this.state.dataInicial} onChange={(e) => this.setState({ dataInicial: e.target.value })} />

                            </div>
                            <div className="date-filter">
                                <input className="d-end" type="date" value={this.state.dataFinal} onChange={(e) => this.setState({ dataFinal: e.target.value })} />
                            </div>
                            <button className="filter" onClick={this.consultar.bind(this) } >filtrar</button>
                        </div>
                    </div>
                    {/*------ FIM DO FILTRO POR DATA -----------*/}

                    {/*------ INÍCIO BOTÃO DO FILTRAR -----------*/}
                 
                        
                 
                    {/*------ FIM BOTÃO DO FILTRAR -----------*/}
                </div>
                {/*------ FIM DO FILTRO -----------*/}

                {/*------ INÍCIO DO FILTRO -----------*/}
                {/* <div className="container"> */}
                    {/* <div className="row"> */}
                        <div className="tabela-container">

                            <table border="0" >
                                <thead className="t-header">
                                    <tr key={usuarios.id}>
                                        <th className="b-radius">Usuário</th>
                                        <th>Departamento</th>
                                        <th>Data</th>
                                        <th>Impressora</th>
                                        <th>Mod.impressora
                </th>
                                        <th>Mod.
                                        Cartucho/Toner
                </th>
                                        <th>Qtde</th>
                                        <th className="b-radius2">Valor</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {items}
                                </tbody>
                            </table>
                        </div>
                    {/* </div> */}
                {/* </div> */}
                {/*------ FIM DO FILTRO -----------*/}
            </main>
        )

    }
    
}

