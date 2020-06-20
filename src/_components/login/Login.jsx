import React, { Component } from 'react';

// import inferior from '../assets/images/inferior.svg';
// import logo from '../assets/images/logo.png';
// import superior from '../assets/images/superior.svg';
import photo from '../assets/images/photo.svg'
import './Login.css';

class Login extends Component {
    render(){
        return(
        <>
          <div className="container">
              {/* <img src={inferior} className="gradienteInferior" /> */}
           
             {/* <img src={logo} className="logo" alt="Logo Menos Tinta" />    */}

            <div className="box-login">
                <img src={photo} className="photo" />
                <label>Usuário</label>
                <input type="text" placeholder="Usuário" required />
                <label>Senha</label>
                <input type="password" placeholder="Senha" />
                <br />
                <button>Acessar</button>
                <br />
                <a href="https://menostinta.com.br/" target="_blank">Não possui conta? Cadastre-se!</a>
            </div>
            
            {/* <img src={superior} className="gradienteSuperior" />      */}
          </div> 
        </>         
        )
    }
}
export default Login;
