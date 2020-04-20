import React from 'react';
import data from '../../../data/booksDB.json';



const booksList = data.map((bookAll) =>
    <li className="col-10 col-sm-6 col-md-4 col-lg-3" key={bookAll}>
        <div className="card border-success m-3">
            <img src = {bookAll.cover} className="card-img-top" alt="..."></img>
            <div className="card-footer">
                <span className="font-weight-bold">${bookAll.price}</span>

                <a href="/" className="float-right">
                    <i className="fa fa-shopping-cart float-right"></i>
                </a>
            </div>
        </div>
    </li>
)

const All = (props) => {
    return (
        <ul className="row" style={{ listStyleType: "none" }}>
            {booksList}
        </ul>
    );
};

export default All;
