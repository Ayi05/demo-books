import React from 'react';
import data from '../../../data/booksDB.json';


const Inta = () => {

    return (
        <div>
            {/* <div className="my-4">
                <h3 className="text-center text-uppercase text-dark">Données Utilisateurs</h3>
                <p className="text-center text-muted d-none d-md-block"><samp>(https://jsonplaceholder.typicode.com/users/)</samp></p>
            </div> */}

            {/* Visible only on xs and sm screen  */}
            <div className="border d-md-none">
                <table className="table table-md table-hover">
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(bookIa => (
                            <tr className="" key={bookIa}>
                                <td><small>{bookIa.title}</small></td>
                                <td><small>{bookIa.author}</small></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Visible only on md screen and above */}
            <div className="row">
            <div className="col-3"></div>
            <div className="border d-none d-md-block col-9">
                <table className="table table-md table-hover">
                    <thead className="bg-light">
                        <tr>
                            {/* <th>Name</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(bookIa => (
                            <tr className="" key={bookIa}>
                                <td className="row">
                                    <img src = {bookIa.cover} className="ml-3" style={{height:150}} alt="..."></img>
                                    <div className="ml-3">
                                        <small><h4>{bookIa.title}</h4></small>
                                        <small><h5 className="text-muted">{bookIa.subtitle}</h5></small><br></br>
                                        <span>{bookIa.author}</span><br></br>
                                        <span>{bookIa.price}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
};
export default Inta;