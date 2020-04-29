import React from 'react';
import data from '../../data/booksDB.json';


const Display = (props) => {

    const [category, setCategory] = React.useState("");

    const handleAll = () => {
        setCategory("");
    }
    const handleCms = () => {
        setCategory("cms");
    }
    const handleIa = () => {
        setCategory("ia");
    }
    const handleLp = () => {
        setCategory("langage");
    }

    const list = data.filter((book) => {
        if (category === "") {
            return data;
        } else {
            return book.category === category;
        }
    })

    const books = list.map((book) =>
        <li className="col-5 col-sm-4 col-md-3 col-lg-3" key={book}>
            <div className="card border-success mb-5">
                <img src={book.cover} className="card-img-top" alt="..."></img>
                <div className="card-footer">
                    <span className="font-weight-bold">${book.price}</span>
                    <a href="/" className="float-right">
                        <i className="fa fa-shopping-cart float-right"></i>
                    </a>
                </div>
            </div>
        </li>
    )

    return (
        <div className="row my-5">

            <div className="col-lg-3">

                <div className="btn-group-vertical mb-4">
                    <button type="button" className="btn btn-outline-info text-left" onClick={handleAll}>Toutes les Categories</button>
                    <button type="button" className="btn btn-outline-info text-left" onClick={handleCms}>Gestion de Contenu (CMS)</button>
                    <button type="button" className="btn btn-outline-info text-left" onClick={handleIa}>Intelligence Artificielle (IA)</button>
                    <button type="button" className="btn btn-outline-info text-left" onClick={handleLp}>Langage de Programmation</button>
                </div>

            </div>

            <div className="col-lg-9">
                <ul className="row" style={{ listStyleType: "none" }}>
                    {books}
                </ul>
            </div>

        </div>
    );
};

export default Display;