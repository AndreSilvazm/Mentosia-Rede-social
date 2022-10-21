import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
import {useSelector} from 'react-redux'
import Log_Out_Btn from '../../View/Login/Log_Out_Btn';





function Navbar() {

    const state = useSelector(state=>state.user)


    console.log(state.user.nome)
    return (
        <div>



                {state.user.logado>0?                 
                
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">MENTOSIA</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">

                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">

                                <Link to='/Home' className='nav-link active'>Home</Link>
                            
                            </li>

                            <li class="nav-item">

                            <Link to='/CreatePost' className='nav-link active'>Publicar texto</Link>

                            </li>


                            <li class="nav-item">

                            <Link to='/Colaboradores' className='nav-link active'>Colaboradores</Link>

                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <Log_Out_Btn/>
                            
                        </form>
                        </div>
                    </div>
                </nav>:""
                    }



            
        </div>
    );
}

export default Navbar;