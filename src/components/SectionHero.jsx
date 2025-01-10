import { Button, Dropdown, Container, ButtonGroup } from "react-bootstrap"
import { Grid, Grid3x3 } from "react-bootstrap-icons"

const SectionHero = function () {
  return (
    <Container fluid className="px-4" style={{ backgroundColor: "#221F1F" }}>
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
    </Container>
  )
}

export default SectionHero
