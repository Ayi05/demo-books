import React from "react";
import { Button, Form, Input } from 'reactstrap';

const Navbar = props => {
  return (

    <nav className="container navbar navbar-expand-lg navbar-light sticky-top shadow p-2 bg-light wow fadeIn">

      <div className="container">
        {/* <a className="navbar-brand" href="https://ajavonweb.ca/"> */}
        <a className="navbar-brand" href="/">
          <img src="./icon.png" alt="logo" className="mb-2" style={{ width: "30px" }} />
          {/* <h2 className="d-inline"><small className="text-sm-left font-weight-bold mx-1">AJ-Web</small></h2> */}
          <h1 className="d-inline"><small className="text-sm-left text-info font-weight-bold mx-1">Livre-TI</small></h1>
        </a>

        <div className="d-flex justify-content-end">
          {/* <h3 className="d-inline"><small className="text-sm-left text-info font-weight-bold mx-1">Livre-TI</small></h3> */}
          <Form className="form-inline">
            <div className="input-group mt-3 mt-md-0">

              <Input
                bsSize="sm"
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Chercher"
              />

              <div className="input-group-append">
                <Button
                  size="sm"
                  type="submit"
                  className="btn btn-secondary">
                  <i className="fa fa-search"></i>
                </Button>
              </div>

            </div>
          </Form>

          <Button className="mt-3 mt-md-0 ml-md-3" color="success" size="sm">Connexion</Button>{' '}
        </div>

      </div>

    </nav>

  );
};

export default Navbar;
