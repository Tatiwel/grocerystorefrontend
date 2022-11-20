import React from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

const token = "fase";

function Order() {
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
                                <th scope="col">Produto: </th>
                                <th scope="col">Quantidade: </th>
                                <th scope="col">Valor (R$): </th>
                                <th scope="col">Status da Reserva: </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">Daniel Reserva</td>
                                <td className="align-middle">Engenharia de software Reserva</td>
                                <td className="align-middle">Ricardo Reserva</td>
                                <td className="align-middle">Reservado?</td>
                                <td>
                                    <Button className="bt-order" variant="primary" size="sm">Excluir Reserva</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Joao Reserva</td>
                                <td className="align-middle">Engenharia de software Reserva</td>
                                <td className="align-middle">Ricardo Reserva</td>
                                <td className="align-middle">Reservado?</td>
                                <td>
                                    <Button className="bt-order" variant="primary" size="sm">Excluir Reserva</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Lucas Reserva</td>
                                <td className="align-middle">Engenharia de software Reserva</td>
                                <td className="align-middle">Ricardo Reserva</td>
                                <td className="align-middle">Reservado?</td>
                                <td>
                                    <Button className="bt-order" variant="primary" size="sm">Excluir Reserva</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div >
    );
}

export default Order;