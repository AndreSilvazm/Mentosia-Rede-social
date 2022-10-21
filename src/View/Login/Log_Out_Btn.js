import React from 'react';
import { useDispatch} from 'react-redux'
import { login } from '../../features/UserSlice';
import {useNavigate} from 'react-router-dom'
import './Log_Out_Btn.css'

function Log_Out_Btn() {

    const navigate = useNavigate()


    const dispatch = useDispatch()

    function Log_Out(){

        dispatch(login({

            logado:0
        }))
        navigate('/')


        
    }


    return (
        <div>

            <button className='Btn-LogOut' onClick={Log_Out}>DESCONECTAR</button>
            
        </div>
    ); 
}

export default Log_Out_Btn;