import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Link, useNavigate } from "react-router-dom";
import data from '../items/interfaceMovieId.json'
  
const Home = () => {

    const [selected, setSelected] = useState([]);
    const [books, setBooks] = useState("")
    const navigate = useNavigate()


    const redirect = () => {
        setBooks(selected.map((book) => book.value).join("-"))
        navigate(`/${books}`)
    }

    return(
        <div>
            <div class="newsletter_section layout_padding">
                <div class="container">
                    <h1 class="newsletter_text">¡Selecciona tus películas favoritas!</h1>
                    <div class="box_main">
                        <p class="dummy_text">Dinos qué películas son tus favoritos</p>
                        <div class="mail_main">
                            <MultiSelect
                                options={data}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Selected"
                                className="multi-select"
                                hasSelectAll={false}
                            />
                        </div>
                        <button onClick={redirect} className="btn btn-primary mt-5">Recomiéndame</button>
                        <Link to={'/books'}>Books</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home