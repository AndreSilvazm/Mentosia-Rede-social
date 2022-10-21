import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import {useSelector} from 'react-redux'
import Aviso_Login from '../../Avisos/Aviso_Login';
import {useEffect, useState} from 'react'
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase';
import './Home.css'
import { Link } from 'react-router-dom';
import Rascunho from './homeRascunho/Rascunho';
import Sidebar from '../../Components/Sidebar/Sidebar';


function Home() {


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
            
            <Rascunho/>

        
        </div>
            

            
            

        
    );
}

export default Home;