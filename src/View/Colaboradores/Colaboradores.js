import React from 'react';
import {useState, useEffect} from 'react'
import {db} from '../../firebase'
import {addDoc, collection, getDocs} from 'firebase/firestore'
import Navbar from '../../Components/Navbar/Navbar';
import './Colaboradores.css'


function Colaboradores(props) {

    const[lista, setLista] = useState([])
    const lista2 = []
    const PostCollectionRef = collection(db, 'posts')

    useEffect(()=>{

        const getPosts = async ()=>{

            const data = await getDocs(PostCollectionRef)
            setLista(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        }

        getPosts()


    },[])


    const valores = lista.map((e)=>e.Identifique)
    const novaArray = valores.filter((este, i)=>valores.indexOf(este) === i)
    console.log(novaArray)
    
    



    return (
        <div>

            <Navbar/>




            

            <div className='Lista'>

            <h3>Lista de colaboradores da página</h3>
            <p>Poste algo, para seu "@" ou nome aparecer aqui!</p>

                {

                    novaArray.map((e)=>{
                        
                        return(

                            <div>

                                <ul>

                                    
                                    <li>{e == 'Anônimo'? '': e}</li>
                                </ul>
                            </div>
                        )
                    })
                }





            </div>
            
        </div>
    );
}

export default Colaboradores;