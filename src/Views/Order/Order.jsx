import React from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

function Order() {
    return (
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
                            <Button className="botaomgr" variant="primary" size="sm">Excluir Reserva</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">Joao Reserva</td>
                        <td className="align-middle">Engenharia de software Reserva</td>
                        <td className="align-middle">Ricardo Reserva</td>
                        <td className="align-middle">Reservado?</td>
                        <td>
                            <Button className="botaomgr" variant="primary" size="sm">Excluir Reserva</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">Lucas Reserva</td>
                        <td className="align-middle">Engenharia de software Reserva</td>
                        <td className="align-middle">Ricardo Reserva</td>
                        <td className="align-middle">Reservado?</td>
                        <td>
                            <Button className="botaomgr" variant="primary" size="sm">Excluir Reserva</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Order;