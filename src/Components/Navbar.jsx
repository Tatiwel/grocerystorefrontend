import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="https://www.google.com/maps/place/Itabaiana+-+SE,+49500-000/@-10.6988563,-37.5655538,11z/data=!3m1!4b1!4m5!3m4!1s0x70ffa600209465b:0x59910a2e513d3f63!8m2!3d-10.6864902!4d-37.4280364"
            >Mercearia Itabaiana</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Product">Produtos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Order">Reservas</a>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default NavBar;