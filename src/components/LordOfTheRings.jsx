import { Component } from "react"
import { Col, Image } from "react-bootstrap"

const URL = "https://www.omdbapi.com/?apikey=9d9f7972&s=Lord%20of%20the%20rings"

class LordOfTheRing extends Component {
  state = {
    movies: [],
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
        console.log("dati", dati)
        this.setState({
          movies: dati.Search,
        })
      })
      .catch((error) => {
        console.log("Error", error)
      })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <>
        {this.state.movies.map((film) => {
          return (
            <Col className="mb-2 text-center px-1" key={film.imdbID}>
              <Image fluid src={film.Poster} alt="movie picture" />
            </Col>
          )
        })}
      </>
    )
  }
}

export default LordOfTheRing
