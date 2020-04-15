import React from "react";
import { Button, Form, Input } from 'reactstrap';

const Navbar = props => {
  return (

    <nav class="container navbar navbar-expand-lg navbar-light sticky-top shadow p-2 bg-light wow fadeIn">

      <div class="container">
        <a class="navbar-brand" href="https://ajavonweb.ca/">
          <img src="./icon.png" alt="logo" style={{ width: "30px" }} />
          {/* <h2 class="d-inline"><small class="text-sm-left font-weight-bold mx-1">AJ-Web</small></h2> */}
          <h2 class="d-inline"><small class="text-sm-left text-info font-weight-bold mx-1">Livre-TI</small></h2>
        </a>

        <div class="d-flex justify-content-end">
          {/* <h3 class="d-inline"><small class="text-sm-left text-info font-weight-bold mx-1">Livre-TI</small></h3> */}
          <Form className="form-inline">
            <div className="input-group mt-3 mt-md-0">

              <Input
                size="sm"
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
                  <i class="fa fa-search"></i>
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
