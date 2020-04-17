import React from 'react';
// import img1 from '../../../data/img/978-2-409-02170-1.jpg';
// import data from '../../../data/books.json';
import data from '../../../data/booksDB.json';

// const img1 = require('../../../data/img/978-2-409-02170-1.jpg');


const booksList = data.map((bookAll) =>
    <li className="col-10 col-sm-6 col-md-4 col-lg-3" key={bookAll}>
        <div className="card border-success mb-3">
            {/* < img src = "https://via.placeholder.com/1024" className="card-img-top" alt="..."></img>  */}
            {/* < img src = "https://drive.google.com/file/d/1EpPGMs4Gf6wMkC7iywRRSHfbjRW4uTNW/view?usp=sharing" className="card-img-top" alt="..."></img>  */}
            < img src = {bookAll.cover} className="card-img-top" alt="..."></img> 
            {/* <img src = "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh0n9pHJW1st5lhmo1_1280.jpg" className="card-img-top" alt="..."></img>  */}
            
            {/* <div className="card-body">
                <div className="text-primary mb-2">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.subtitle}</p>
                </div>
                <hr />
                <div className="">
                    <span className="card-text"><small>Auteur: {book.author}</small></span><br />
                    <span className="card-text"><small>isbn: {book.isbn}</small></span>
                </div>
            </div> */}
            <div className="card-footer">
                <span className="font-weight-bold">${bookAll.price}</span>

                <a href="/" className="float-right">
                    <i className="fa fa-shopping-cart float-right"></i>
                    {/* <i className="fa fa-plus float-right"></i> */}
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
