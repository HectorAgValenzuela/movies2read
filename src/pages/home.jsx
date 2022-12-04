import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Link, useNavigate } from "react-router-dom";
import data from 'items/interfaceMovieId,json'

const options = [
    { label: "Grapes", value: "2" },
    { label: "Mango", value: "8" },
    { label: "Strawberry", value: "5" }, 
  ];
  

const Home = () => {


    console.log(data)

    const [selected, setSelected] = useState([]);
    const [books, setBooks] = useState("")
    const navigate = useNavigate()

    const redirect = () => {
        setBooks(selected.map((book) => book.value).join(" "))
        navigate(`/${books}`)
    }

    return(
        <div>
            <div class="newsletter_section layout_padding">
                <div class="container">
                    <h1 class="newsletter_text">¡Dinos tus gustos!</h1>
                    <div class="box_main">
                        <p class="dummy_text">Dinos qué géneros de películas son tus favoritos</p>
                        <div class="mail_main">
                            <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Selected"
                                className="multi-select"
                            />
                        </div>
                        <button onClick={redirect} className="btn btn-primary mt-5">Recomiendame</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home