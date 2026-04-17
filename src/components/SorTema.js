import React, {useContext} from "react";
import { ApiContext } from "../contexts/ApiContext";

const SorTema = ({tema }) => {

    return (
        <tr>
            <td>{szavak.angol}</td>
            <td>{szavak.magyar}</td>
            <td>"viszajelzés"<button className="btn btn-danger btn-sm" ></button></td>
        </tr>

    )
}

export default SorTema;