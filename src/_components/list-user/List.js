import React, { Component } from 'react';
import './List.css';
import './Modal.css';
import axios from 'axios';

// import photoInicial from './../_imgs/photo.bee19725.svg';
import photoInicial from './../../_imgs/photo.bee19725.svg'
import close from './../../_imgs/close.png';
import edit from './../../_imgs/edit.png';
import trash from './../../_imgs/trash-alt.png';


const initialState = {
    user:{id:"", nome:"", senha:"", departamento:"1", email:"", qtd_impressao:"", ativo:"S"},
    formErrors:{
        nome:"",
        senha:"",
        departamento:"",
        email:"",
        qtd_impressao:"",
        ativo:""
    },
    msg1: false,
    msg2: false,
    userJson:[],
    show:false
}

const formValid =({formErrors, ...rest}) => {
    let valid = true;
   

    Object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false);
    });

    // Object.values(rest.user).forEach(key=>{
    //     console.log("teste"+ key)
    //  })

     for (var [key, value] of Object.entries(rest.user)) {
         if(key=="id"){
             if(value==""){
                valid = true;
             }    
         }
         if(key=="nome" || key=="senha" || key=="departamento" || key=="email" || key=="qtd_impressao" || key=="ativo"){
            if(value==""){
               valid = false;
            }    
        }
      
    }
    

   

   

    return valid;
}

class List extends Component {

    state = { ...initialState }
 
    closeModalHandler=()=>{
        this.setState({show:false});
        this.setState({user:{id:"", nome:"", senha:"", departamento:"1", email:"", qtd_impressao:"", ativo:"S"},formErrors:{nome:"",senha:"",departamento:"",email:"",qtd_impressao:"",ativo:""}});
    };

    cancelHandler=()=>{
        this.setState({user:{id:"", nome:"", senha:"", departamento:"1", email:"", qtd_impressao:"", ativo:"S"},formErrors:{nome:"",senha:"",departamento:"",email:"",qtd_impressao:"",ativo:""}});
    };

    componentWillMount() {
        var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");
        var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
        };
        


			
        const url1 = "https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Usuarios?0877";

        fetch(url1, requestOptions)
            .then((response)=>response.json())
            .then((result)=>{this.setState({userJson: result})})

       
            

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        if(formValid(this.state)){
            const user=this.state.user;
            console.log(user)
    
            var myHeaders = new Headers();
            myHeaders.append("X-Requested-With", "XMLHttpRequest");
            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };
        
            if(user.id) {
                console.log("alteração");
                console.log(user.id);
                var baseUrl2="https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/UsuarioUpdate?0877";
            
                baseUrl2 += "&" + this.state.user.id;
                baseUrl2 += "&" + this.state.user.nome;
                baseUrl2 += "&" + this.state.user.senha;
                baseUrl2 += "&" + this.state.user.departamento;
                baseUrl2 +=  "&S&S&"+this.state.user.qtd_impressao+"&estacao&"+this.state.user.ativo;
                baseUrl2 += "&" + this.state.user.email;
    
                axios(baseUrl2, requestOptions)
                .then((result)=>{
                        console.log(result.data);
                        this.setState({msg2: true});
                            setTimeout(()=>{
                               
                                this.setState({show:false});
                            },1000)
                            setTimeout(()=> {
                                this.setState({msg2: false});
                            },4000)
                            
                        // console.log(user);
                        // this.state.userJson.push(user);
                        // const list=this.state.userJson;
                        // list.push(user);
                       
                       
                        // this.setState({userJson: list});   
                            
                        const url1 = "https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Usuarios?0877";
                
                        fetch(url1, requestOptions)
                            .then((response)=>response.json())
                            .then((result)=>{this.setState({userJson: result})})
                })
                .catch((error)=>console.log("error",error));
                this.setState({user:{id:"",nome:"", senha:"", departamento:"", email:"", qtd_impressao:"", ativo:""}});
            } else {
                console.log("normal");
    
                var baseUrl="https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/UsuarioInsert?0877";
               
               
                baseUrl += "&" + this.state.user.nome;
                baseUrl += "&" + this.state.user.senha;
                baseUrl += "&" + this.state.user.departamento;
                baseUrl +=  "&S&S&"+this.state.user.qtd_impressao+"&estacao"+this.state.user.ativo;
                baseUrl += "&" + this.state.user.email;
    
                axios(baseUrl, requestOptions,user)
                    .then((result)=>{
                            console.log(result.data);
                            this.setState({msg1: true});
                            setTimeout(()=>{
                               
                                this.setState({show:false});
                            },1000)
                            setTimeout(()=> {
                                this.setState({msg1: false});
                            },4000)
                            
                          
                              

                            // console.log(user);
                            // this.state.userJson.push(user);
                            // const list=this.state.userJson;
                            // list.push(user);
                        
                        
                            // this.setState({userJson: list});   
                                
                            const url1 = "https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Usuarios?0877";
                    
                            fetch(url1, requestOptions)
                                .then((response)=>response.json())
                                .then((result)=>{this.setState({userJson: result})})
                                
                        
                            
                                   
                    })
                    .catch((error)=>console.log("error",error));
                    this.setState({user:{id:"",nome:"", senha:"", departamento:"-1", email:"", qtd_impressao:"", ativo:"-1"}}); 
                   
                }   
        } else {
            alert("Por favor, preencha os campos.")
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
              
    }

   

    remove(user) {
        console.log(user);
        user.usu_ativo="N";

        var myHeaders = new Headers();
		myHeaders.append("X-Requested-With", "XMLHttpRequest");
		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
        };

       

       

        // this.setState({user:{id: user.usu_codigo,nome:user.usu_nome,senha:user.usu_senha,departamento:user.dpt_codigo,email:user.emp_codigo,qtd_impressao:user.usu_qtdemes,ativo:"N"}});
       
           
            var baseUrl3="https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/rest/TServerMethods1/UsuarioUpdate?0877";

            // baseUrl3 += "&" + this.state.user.id;
            console.log(this.state.user.id)
            // baseUrl3 += "&" + this.state.user.nome;
            // baseUrl3 += "&S&S";
            baseUrl3 += "&"+user.usu_codigo+"&X&x&x&x&x&x&x&"+user.usu_ativo+"&x";
            // baseUrl3 += "&" + this.state.user.senha;
            // baseUrl3 += "&" + this.state.user.departamento;
            // baseUrl3 +=  "&S&S&"+this.state.user.qtd_impressao+"&estacao&"+this.state.user.ativo;
            console.log(user.usu_ativo);
            // baseUrl3 += "&" + this.state.user.email;


          
         

            axios(baseUrl3, requestOptions)
            .then((result)=>{
                console.log(result.data);
                this.setState({user:{id:"",nome:"", senha:"", departamento:"-1", email:"", qtd_impressao:"", ativo:"S"}}); 
              

                const url1 = "https://cors-anywhere.herokuapp.com/54.159.114.209:211/datasnap/Rest/tserverMethods1/Usuarios?0877";
            
                fetch(url1, requestOptions)
                    .then((response)=>response.json())
                    .then((result)=>{this.setState({userJson: result})})

              
            
               
                
                
            })    
        
       
     
        
    }

    updateField(event) {
        const user = {...this.state.user}
        user[event.target.name]=event.target.value;
        this.setState({user});
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;


        switch(name) {
            case 'nome' :
                formErrors.nome =
                    value.length === 0
                        ? 'Preencha com o nome'
                        :'';
                break;
            
            case 'senha' :
                formErrors.senha =
                    value.length === 0
                        ? 'Senha não pode ser vazia'
                        :'';
                break;
            // case 'departamento' :
            //     formErrors.departamento =
            //         value === "0"
            //             ? 'Escolha uma opção'
            //             :'';
            //     break;
            case 'email' :
                formErrors.email =
                    value.length === 0
                        ? 'Preencha com email'
                        : ''
                break;
            case 'qtd_impressao' :
                formErrors.qtd_impressao=
                    value.length === 0
                        ?'Preencha com a qtd de impressão' 
                        : ''                                       
                break;
            // case 'ativo' :
            //     formErrors.ativo=
            //         value === "0" 
            //             ? 'Escolha uma opção'
            //             : ''   
            //     break;
        }

        this.setState({formErrors});
        
    }

    load(user) {

      
        console.log(user);
        this.setState({show:true});
        this.setState({user:{id: user.usu_codigo,nome:user.usu_nome,senha:user.usu_senha,departamento:user.dpt_codigo,email:user.emp_codigo,qtd_impressao:user.usu_qtdemes,ativo:user.usu_ativo}});
    }

    render() {
        const { formErrors } = this.state;
        return (
            <div>
                {this.state.show?<div  onClick={this.closeModalHandler} className="back-drop">
                   
                </div> : null}
                {/* <Modal show={this.state.show} closeModalHandler={this.closeModalHandler} list={this.state.userJson}/>   */}
                <div className="modal-wrapper"
                        style={{
                        transform: this.state.show ? 'translateY(-3vh)':'translateY(-168vh)',
                        opacity: this.state.show ? '1' : '0'
                         }}>
                        <div className="modal-cabecalho">
                            <img src={photoInicial} alt="Logo Inicial"/>
                            <img src={close} onClick={this.closeModalHandler} className="btn-close" alt="btn close"/>
                        </div>
                        <div className="modal-conteudo">
                            <div className="modal-body">                          
                                <form className="form-cadastro" onSubmit={(e)=>this.handleSubmit(e)}> 
                                    <label>Nome</label>
                                    <input 
                                        className={formErrors.nome.length > 0 ? "error" : null}
                                        type="text" 
                                        name="nome" 
                                        value={this.state.user.nome} 
                                        onChange={e=>this.updateField(e)}
                                        />
                                        {formErrors.nome.length > 0 &&(
                                            <span className="errorMessage">
                                                {formErrors.nome}
                                            </span>
                                        )}
                                    <label>Senha</label>
                                    <input 
                                        className={formErrors.senha.length > 0 ? "error" : null}
                                        type="password" 
                                        name="senha" 
                                        value={this.state.user.senha} 
                                        onChange={e=>this.updateField(e)}
                                        />
                                         {formErrors.senha.length > 0 &&(
                                            <span className="errorMessage">
                                                {formErrors.senha}
                                            </span>
                                        )}
                                    <label>Email</label>
                                    <input 
                                        className={formErrors.email.length > 0 ? "error" : null}
                                        type="text" 
                                        name="email" 
                                        value={this.state.user.email} 
                                        onChange={e=>this.updateField(e)}
                                        />
                                         {formErrors.email.length > 0 &&(
                                            <span className="errorMessage">
                                                {formErrors.email}
                                            </span>
                                        )}
                                    <label>Departamento</label>
                                    <select
                                        className={formErrors.departamento.length > 0 ? "error" : null} 
                                        type="text" 
                                        name="departamento" 
                                        onChange={e=>this.updateField(e)} 
                                        value={this.state.user.departamento} >
                                            <option value="-1" disabled>Selecionar...</option>
                                            <option value="0">Sem Departamento</option>
                                            <option value="1">Diretoria</option>
                                            <option value="2">Flexus</option>
                                            <option value="3">Palavrizar</option>
                                    </select> 
                                    {formErrors.departamento.length > 0 &&(
                                            <span className="errorMessage">
                                                {formErrors.departamento}
                                            </span>
                                        )}
                                    <label> Qtd de Impressões</label>
                                    <input
                                        className={formErrors.qtd_impressao.length > 0 ? "error" : null} 
                                        type="text" 
                                        name="qtd_impressao" 
                                        value={this.state.user.qtd_impressao} 
                                        onChange={e=>this.updateField(e)}
                                        />
                                         {formErrors.qtd_impressao.length > 0 &&(
                                            <span className="errorMessage">
                                                {formErrors.qtd_impressao}
                                            </span>
                                        )}
                                    {/* <label>Código</label> */}
                                    {/* <input type="text"/> */}
                                    <label>Ativo</label>
                                    <select 
                                        className={formErrors.ativo.length > 0 ? "error" : null}
                                        name="ativo" 
                                        value={this.state.user.ativo} 
                                        onChange={e=>this.updateField(e)}>
                                            <option value="0" disabled>Selecionar...</option>
                                            <option value="S">Sim</option>
                                            <option value="N">Não</option>
                                    </select>
                                    {formErrors.ativo.length > 0 &&(
                                            <span className="errorMessage">
                                                {formErrors.ativo}
                                            </span>
                                        )}
                                    <button type="submit" className="btn-cadastrar">Cadastrar usuário</button>
                                 </form>
                            </div>
                            <div className="modal-rodape">
                                <button onClick={this.cancelHandler} className="btn-cancel">Cancelar</button>
                            </div>
                        </div>
                    </div>     

                <div class="telacontent">
                    {this.state.msg1==true&&(
                        <div className="msg-sucesso">
                            Cadastrado com sucesso!
                        </div>
                    )} 
                    {this.state.msg2==true&&(
                    <div className="msg-sucesso">
                            Alterado com sucesso!
                    </div>
                    )}                          
                    <div class="wrapper">
                        <div className="list-container">
                            
                            <table className="user_tabela" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Nome</th>
                                        <th>Departamento</th>
                                        <th colSpan="2">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {this.state.userJson.map(user =>{
                                            var nomeDepartamento;
                                            if(user.dpt_codigo===0){
                                                nomeDepartamento="Sem Departamento";
                                            } else if(user.dpt_codigo===1) {
                                                nomeDepartamento="Diretoria";
                                            } else if(user.dpt_codigo===2) {
                                                nomeDepartamento="Flexus";
                                            }else if(user.dpt_codigo===3) {
                                                nomeDepartamento="Palavrizar";  
                                            }
                                           
                                                if(user.usu_ativo==="S") {
                                                    return(
                                                <tr>
                                                    
                                                    <td>{user.usu_codigo}</td>
                                                    <td>{user.usu_nome}</td>
                                                    <td>{nomeDepartamento}</td>
                                                    <td><button className="btn-edit" onClick={() => this.load(user)}><img src={edit} alt="Editar"/>Editar</button></td>
                                                    <td><button className="btn-excluir" onClick={()=>this.remove(user)}><img src={trash} alt=""/>Excluir</button></td>    
                                                </tr>
                                            );     
                                                }
                                        }

                                        )}
                                </tbody>
                            </table>
                        </div> 
                    </div>
                    <div className="area-button">
                            <button onClick={()=>this.setState({show:true})} className="btn-cadastrar">Cadastrar novo usuário</button>
                    </div>       
                </div>
                
            </div>     
            
            
                
        );
    }
}


export default List;

