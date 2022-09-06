import React from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Firebase from "../components/firebase.jsx";


export default function Cadastro() {
    const auth = getAuth(Firebase);
    const email = 'teste@gmail.com'
    const password = '123456'
    function Cadastrar() {
       return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('deu bom');


                const user = userCredential.user;
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }
    return (
        <div className="Login">
            <h1>Login</h1>

            <div className='input'>
                <label>Login</label>
                <input placeholder="email" />
            </div>

            <div className='input'>
                <label>Senha</label>
                <input placeholder="password" />
            </div>
            <button onClick={()=> Cadastrar()}>Cadastro</button>
        </div>

    )
}