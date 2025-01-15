import { useState, useEffect } from "react"
import {
  Carousel,
  Image,
  Row,
  Col,
  Container,
  Spinner,
  Alert,
} from "react-bootstrap"

const URL = "https://www.omdbapi.com/?apikey=9d9f7972&s=shrek"

const Shrek = function () {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  {
    /* state = {
    movies: [],
    isLoading: true,
    isError: false,
  } */
  }

  const getMovies = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella chiamata API")
        }
      })
      .then((dati) => {
        console.log("dati", dati)
        setMovies(dati.Search)
        setIsLoading(false)

        {
          /*  this.setState({
          movies: dati.Search,
          isLoading: false,
        }) */
        }
      })
      .catch((error) => {
        console.log("Error", error)
        setIsLoading(false)
        setIsError(true)
        /* this.setState({
          isLoading: false,
          isError: true,
        }) */
      })
  }

  /*  componentDidMount() {
    getMovies()
  }
 */

  useEffect(() => {
    getMovies()
  }, [])

  const handleSlide = (nextSlideIndex) => {
    setCurrentIndex(nextSlideIndex)
    /*  this.setState({
      currentIndex: nextSlideIndex,
    }) */

    console.log("Slide cambiata a indice:", nextSlideIndex)
  }
  const groupMovies = (movies, groupSize) => {
    let result = []
    for (let i = 0; i < movies.length; i += groupSize) {
      result.push(movies.slice(i, i + groupSize))
    }
    return result
  }

  const groupedMovies = groupMovies(movies, 6)

  return (
    <>
      {isLoading === true && (
        <div className="text-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
      {isError && (
        <div>
          <Alert variant="danger"> ⚠️ Si è verificato un errore! </Alert>
        </div>
      )}
      <Container fluid xs={12} md={6} style={{ width: "100%" }}>
        <Carousel
          activeIndex={currentIndex}
          onSelect={handleSlide}
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
                        objectPosition: "center",
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

export default Shrek
