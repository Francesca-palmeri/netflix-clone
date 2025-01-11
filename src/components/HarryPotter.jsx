import { Component } from "react"
import {
  Carousel,
  Image,
  Row,
  Col,
  Container,
  Spinner,
  Alert,
} from "react-bootstrap"

const URL = "https://www.omdbapi.com/?apikey=9d9f7972&s=harry%20potter"

class HarryPotter extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  getMovies = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella chiamata API")
        }
      })
      .then((dati) => {
        console.log("Data", dati)
        this.setState({
          movies: dati.Search,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.log("ERRORE", error)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  componentDidMount() {
    this.getMovies()
  }

  handleSlide = (nextSlideIndex) => {
    this.setState({
      currentIndex: nextSlideIndex,
    })

    console.log("Slide cambiata a indice:", nextSlideIndex)
  }
  groupMovies = (movies, groupSize) => {
    let result = []
    for (let i = 0; i < movies.length; i += groupSize) {
      result.push(movies.slice(i, i + groupSize))
    }
    return result
  }

  render() {
    const groupedMovies = this.groupMovies(this.state.movies, 6)

    return (
      <>
        {this.state.isLoading === true && (
          <div className="text-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        {this.state.isError && (
          <div>
            <Alert variant="danger"> ⚠️ Si è verificato un errore! </Alert>
          </div>
        )}
        <Container fluid xs={12} md={6} style={{ width: "100%" }}>
          <Carousel
            activeIndex={this.state.currentIndex}
            onSelect={this.handleSlide}
            indicators={false}
          >
            {groupedMovies.map((group, index) => (
              <Carousel.Item key={index}>
                <Row style={{ height: "13em" }}>
                  {group.map((film) => (
                    <Col
                      key={film.imdbID}
                      style={{ height: "100%", padding: "5px" }}
                    >
                      <Image
                        fluid
                        src={film.Poster}
                        alt={film.Title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </>
    )
  }
}

export default HarryPotter
