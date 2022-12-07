import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const URL = 'http://127.0.0.1:5000/recommender?books='


const Books = () => {
    const {movies} = useParams("")
    const[books, setBooks] = useState([])
 
    useEffect( () => {
        console.log(movies)
        getBooks()
    }, )
 
    const getBooks = async () => {
       const res = await axios.get(`${URL}${movies}`)
       console.log(res.data['data'])
       setBooks(JSON.parse(res.data['data']))
    }

    return (
        <div>
            <div class="movies_section layout_padding">
                <div class="container">
                    <h2 class="letest_text">Recomendaciones</h2>
                        <div class="movies_main">
                            <div class="iamge_movies_main">

                                    
                                    {books.map( (book) => (
                                        
                                       
                                        <div class="iamge_movies">
                                        <div class="image_3">
                                            <img src={book[6]} class="image" alt=""/>
                                            <div class="middle">
                                                <a href={book[2]} target="_blank"><div class="playnow_bt">Ver más</div></a>
                                            </div>
                                        </div>
                                    
                                        
                                        <h1 class="code_text">{book[3]}</h1>

                                        <p class="there_text">{book[4]}</p>
                                        
                                        </div>
                                    ) )}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Books