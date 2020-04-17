import React from 'react';


export const books = [
    { title: 'WordPress 5', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'React.Js', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Node.Js', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'MySql', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'JavaScript', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Bootstrap', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Html5', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Css3', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Express.Js', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
];



const booksList = books.map((bookCms) =>
    <li className="col-10 col-sm-6 col-md-4 col-lg-3" key={bookCms}>
        <div className="card border-success mb-3">
            <div className="card-header">
                <span className="">${bookCms.price}</span>

                <a href="/" className="float-right">
                    <i className="fa fa-shopping-cart float-right"></i>
                </a>
                <a href="/" className="float-right mr-3">
                    <i className="fa fa-heart float-left"></i>
                </a>
            </div>
            <div className="card-body">
                <div className="text-primary mb-2">
                    <h5 className="card-title">{bookCms.title}</h5>
                    <p className="card-text">{bookCms.subtitle}</p>
                </div>
                <hr />
                <div className="">
                    <span className="card-text"><small>Auteur: {bookCms.author}</small></span><br />
                    <span className="card-text"><small>isbn: {bookCms.isbn}</small></span>
                </div>
            </div>
        </div>
    </li>
)

const Cms = (props) => {
    return (
        <ul className="row" style={{ listStyleType: "none" }}>

            {booksList}

        </ul>
    );
};

export default Cms;
