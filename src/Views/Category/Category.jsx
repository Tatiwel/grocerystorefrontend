import React from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

function Category() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='cx login'>
                    <h1>Category</h1>
                    <Button href="/category">Category</Button>
                </div>
            </header>
        </div>
    );
}

export default Category;