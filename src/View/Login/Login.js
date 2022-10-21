import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Login.css'
import {autenticar, provider} from '../../firebase'
import {signInWithPopup} from 'firebase/auth'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../features/UserSlice';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

function Login() {

    const dispatch = useDispatch()
    const state = useSelector(state=>state.user)
    const navigate = useNavigate()

    const SingInWithGoogle = () => {

        signInWithPopup(autenticar, provider)
        .then((result)=>{

            
            dispatch(login({

                logado:1,
                email:result.user.email,
                nome: result.user.displayName,
                id:result.user.uid

                
            }))


            toast.success(`Seja Bem Vindo(a), ${result.user.displayName}`)
            navigate('/Home')
            
            
        })

        .catch((e)=>{alert(e)})


    }



    return (
        <div className='Main-Login'>


           <main>

                <h1>Meu mundo, minha mentosia!</h1>
                <button onClick={SingInWithGoogle} className='Google-Btn'>Entre <i className=' fab fa-google google-icon'></i></button>
                

                

           </main>
        </div>
    );
}

export default Login;