import React from "react";
import foto from "../../../images/galaxy.jpg";
// no se puede importar cosas de fuera de src
import "./CompFoto.css";

export const ComponentFoto = () => {
    return(
        <>
            <h2>Esta es la foto</h2>
            {/* <img src="/assets/images/galaxia/galaxy.jpg" /> */}
            <img src={foto} />
        </>
    );
}