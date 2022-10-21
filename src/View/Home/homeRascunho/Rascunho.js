import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import {useSelector} from 'react-redux'
import Aviso_Login from '../../../Avisos/Aviso_Login';
import {useEffect, useState} from 'react'
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { db } from '../../../firebase';
import './Rascunho.css'



function Rascunho() {


    const[postList, setPostList] = useState([])

    const state = useSelector(state=>state.user)
    const PostCollectionRef = collection(db, 'posts')

    useEffect(()=>{

        const getPosts = async ()=>{

            const data = await getDocs(PostCollectionRef)
            setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        }

        getPosts()


    },[])

    return (
        <div className='Home-Page'>
            <Navbar/>

            {state.user.logado>0? <div className='posts'>

                <div className='All-Container'>


                    {postList.map((post)=>{

                        return(

                            <div key={post.id} className='Post-Container'>

                                <h3 className='Titulo'>{post.Titulo}</h3>
                                <p></p>

                                <div className='Content'>
                                    
                                    <p>{post.post}</p>

                                </div>

                                <div className='Autor-Section'>


                                    <h5>{post.Autor}</h5>
                                    <p>{post.data}</p>
                                    <p className='ID'>{post.Identifique}</p>
                                </div>


                            </div>
                        )
                    })}




                </div>

            </div>
                
                
            :<Aviso_Login/>}
            

            
            

        </div>
    );
}

export default Rascunho;