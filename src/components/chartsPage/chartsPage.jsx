import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import DoughNutTab from "./doughnutTab";
import Header from "./header";
import RadarTab from "./radarTab";

let ChartsPage = () => {
  const [currentPage, setPage] = useState(1);

  const getPage = () => {
    switch (currentPage) {
      case 1:
        return <RadarTab />;
      case 2:
        return <DoughNutTab />;
      case 3:
        return <RadarTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ButtonGroup id="nav-container" size="lg">
          <Button
            onClick={() => setPage(1)}
            variant={`${currentPage === 1 ? "primary" : "outline-primary"}`}
          >
            Off/Def
          </Button>
          <Button
            onClick={() => setPage(2)}
            variant={`${currentPage === 2 ? "primary" : "outline-primary"}`}
          >
            Shooting %
          </Button>
          <Button
            onClick={() => setPage(3)}
            variant={`${currentPage === 3 ? "primary" : "outline-primary"}`}
          >
            Last 10
          </Button>
        </ButtonGroup>
      </Container>
      <Container className="panel" fluid="lg">
        {getPage()}
      </Container>
      <footer />
    </>
  );
};

export default ChartsPage;
