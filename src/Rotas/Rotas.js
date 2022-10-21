import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../View/Login/Login';
import Home from '../View/Home/Home'
import CreatePost from '../View/Post/CreatePost';
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {addDoc, collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'
import Colaboradores from '../View/Colaboradores/Colaboradores';

function Rotas({Rota}) {



    const state = useSelector(state=>state.user)
    const[postList, setPostList] = useState([])
    const PostCollectionRef = collection(db, 'posts')

    useEffect(()=>{

        const getPosts = async ()=>{

            const data = await getDocs(PostCollectionRef)
            setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        }

        getPosts()


    },[])


    postList.map((e)=>{console.log(e.Titulo)})

    return (
        <div>

            <Router>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/Home' element={<Home/>}/>

                    {state.user.logado>0?<Route path='/CreatePost' element={<CreatePost/>}/>:''}

                    <Route path='/Colaboradores' element={<Colaboradores/>}/>
                    

                </Routes>
            </Router>
            
        </div>
    );
}

export default Rotas;