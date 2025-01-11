import { Button, Dropdown, Container, ButtonGroup, Row } from "react-bootstrap"
import { Grid, Grid3x3 } from "react-bootstrap-icons"
import NetflixFooter from "./NetflixFooter"
import HarryPotter from "./HarryPotter"
import LordOfTheRing from "./LordOfTheRings"
import Shrek from "./Shrek"

const SectionHero = function () {
  return (
    <>
      <Container fluid className="ContainerHero px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 text-light">TV Shows</h2>
            <ButtonGroup className="ms-4 mt-1">
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  size="sm"
                  className="rounded-0"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#221f1f" }}>
                  <Dropdown.Item className="text-white-50" href="#">
                    Comedy
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white-50" href="#">
                    Drama
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white-50" href="#">
                    Thriller
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
          <div>
            <Button variant="link" className="px-2 text-white custom-button">
              <Grid className="icons" />
            </Button>
            <Button variant="link" className="px-2 text-white custom-button">
              <Grid3x3 className="icons" />
            </Button>
          </div>
        </div>

        <h4 className="text-white">Trending Now - Harry Potter</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <HarryPotter />
        </Row>
        <h4 className="text-white">Watch it Again - Lord of the Ring</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <LordOfTheRing />
        </Row>
        <h4 className="text-white">NewReleases - Shrek</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Shrek />
        </Row>
        <NetflixFooter />
      </Container>
    </>
  )
}

export default SectionHero
