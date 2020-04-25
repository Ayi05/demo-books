import React from 'react';
import data from '../../data/booksDB.json';

const ac = data;
// const cms = data.filter((book) => {
//     return book.category === "langage";
// })

const booksList = ac.map((book) =>
    <li className="col-10 col-sm-6 col-md-4 col-lg-4" key={book}>
        <div className="card border-success my-3">
            <img src = {book.cover} className="card-img-top" alt="..."></img>
            <div className="card-footer">
                <span className="font-weight-bold">${book.price}</span>

                <a href="/" className="float-right">
                    <i className="fa fa-shopping-cart float-right"></i>
                </a>
            </div>
        </div>
    </li>
)

const MainContent = (props) => {
    return (
        <div className="row">

            <div class="col-lg-3">

                <h1 class="my-4">Livres-TI</h1>
                <div class="list-group">
                    <div className="list-group-item">Toutes les Categories</div>
                    <div className="list-group-item">Gestion de Contenu (CMS)</div>
                    <div className="list-group-item">Intelligence Artificielle (IA)</div>
                    <div className="list-group-item">Langage de Programmation</div>
                </div>

            </div>

            <div class="col-lg-9">
                <div className="my-4">
                    <ul className="row" style={{ listStyleType: "none" }}>
                        {booksList}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MainContent;