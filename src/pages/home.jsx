import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
  

const Home = () => {
    const [selected, setSelected] = useState([]);

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home