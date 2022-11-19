import React from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

function Product() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item: </th>
                        <th scope="col">Estoque: </th>
                        <th scope="col">Valor (R$): </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="align-middle">Daniel</td>
                        <td className="align-middle">Engenharia de software</td>
                        <td className="align-middle">Ricardo</td>
                        <td>
                            <Button className="botaomgr" variant="primary" size="sm">Reservar</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">Joao</td>
                        <td className="align-middle">Engenharia de software</td>
                        <td className="align-middle">Ricardo</td>
                        <td>
                            <Button className="botaomgr" variant="primary" size="sm">Reservar</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">Lucas</td>
                        <td className="align-middle">Engenharia de software</td>
                        <td className="align-middle">Ricardo</td>
                        <td>
                            <Button className="botaomgr" variant="primary" size="sm">Reservar</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Product;