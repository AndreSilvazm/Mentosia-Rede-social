import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import {useState} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../firebase'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import './CreatePost.css'
import {toast} from 'react-toastify'



function CreatePost() {


    const [Titulo, setTitulo] = useState('')
    const [post, setPost] = useState('')
    const [Autor, setAutor] = useState('')
    const [data, setData] = useState('')
    const[Identifique, setIdentifique] = useState('')

    const state = useSelector(state=>state.user)
    let navigate = useNavigate()


    const PostCollectionRef = collection(db, 'posts')


    const Publicar = async() =>{


        if( Titulo.length == 0 || post.length == 0 || Autor.length == 0 || data.length == 0){

            toast.error('PREENCHA OS DADOS CORRETAMENTE.')
          
        }
        else{

            if( Identifique.length == 0){

                const anonimo = 'Anônimo'

                setIdentifique(anonimo)
                alert(Identifique)

                await addDoc(PostCollectionRef, {Titulo, post, Autor, id:state.user.id, data, Identifique:'Anônimo', Display:state.user.nome, Email:state.user.email} )
                toast.success('PUBLICADO COM SUCESSO, OBRIGADO!')
                navigate('/Home')

            }

            else{

                
                await addDoc(PostCollectionRef, {Titulo, post, Autor, id:state.user.id, data, Identifique, Display:state.user.nome, Email:state.user.email} )
                toast.success('PUBLICADO COM SUCESSO, OBRIGADO!')
                
                navigate('/Home')
            }


        }


        
    }


    return (
        <div>

            <Navbar/>
            <div className='Page_Container'>

                <h3>DISSEMINE ARTE!</h3>

                <div className='Inputs'>


                    <input type='text' placeholder='Titulo' onChange={(e)=>{
                        setTitulo(e.target.value)
                    }}/>
                    <textarea placeholder='TEXTO' onChange={(e)=>{
                        setPost(e.target.value)
                    }}></textarea>


                    <input type='text' placeholder='Autor' onChange={(e)=>{setAutor(e.target.value)}}/>

                    <input type='text' placeholder='DATA DO TEXTO' onChange={(e)=>{setData(e.target.value)}}/>

                    <div className='Pessoais'>

                        <label className='Identifique'>

                            <h3>Se identifique</h3>
                            
                        </label>

                        <input className='NomePessoal' placeholder='Escreva seu nome ou seu "@" do instagram (Opcional)' onChange={(e)=>{setIdentifique(e.target.value)}}/>


                    </div>
                </div>


                <button onClick={Publicar} className='publicar'>Publicar</button>


            </div>
        </div>
    );
}

export default CreatePost;