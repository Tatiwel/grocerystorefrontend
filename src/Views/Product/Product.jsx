import React from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

const token = "fase";

function Product() {
    return (
        <div>
            {token === "false" ? (
                <div class="App">
                    <div class="App-header">
                        <div className="cx">
                            <h1>Faça Login</h1>
                        </div>
                    </div>
                </div>
            ) :
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
                                    <Button className="bt-product" variant="primary" size="sm">Reservar</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Joao</td>
                                <td className="align-middle">Engenharia de software</td>
                                <td className="align-middle">Ricardo</td>
                                <td>
                                    <Button className="bt-product" variant="primary" size="sm">Reservar</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Lucas</td>
                                <td className="align-middle">Engenharia de software</td>
                                <td className="align-middle">Ricardo</td>
                                <td>
                                    <Button className="bt-product" variant="primary" size="sm">Reservar</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
        </div>
    );
}

export default Product;