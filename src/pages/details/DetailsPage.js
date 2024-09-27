import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_KEY } from "../../constants/API_KEY"
import { BASE_IMG } from "../../constants/BASE_IMG"
import { BASE_URL } from "../../constants/BASE_URL"
import { convertDate, getYear } from "../../hooks/convertDate"
import { convertTime } from "../../hooks/converTime"
import * as s from "./styled"
import { idMaker } from "../../hooks/idMaker"


export default function DetailsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [movieVideos, setMovieVideos] = useState()
    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [duration, setDuration] = useState()
    const [dateBr, setDateBr] = useState()
    const [year, setYear] = useState()
    // const [overview, setOverview] = useState()
    // const [genres, setGenres] = useState()
    const id = window.location.pathname.split('/')[2]

    // const DetailsMovie = () => {
    //     const [detailsMovie, setDetailsMovie] = useState({})
    //     const [genres, setGenres] = useState([])
    //     const params = useParams()
    // }

    const getDetails = () => {
        // axios.get(`${BASE_URL}movie/${id}?${API_KEY}&language=pt-BR`)
        axios.get(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
            .then((res) => {
                console.log(res)
                setMovie(res.data)
                setDuration(convertTime(res.data.runtime))
                setDateBr(convertDate(res.data.release_date))
                setYear(getYear(res.data.release_date))
            })
            .catch((error) => {
                alert(`Erro de solicitação ${error.response}`)
            })
    }

    const genreList = Array.isArray(movie.genres) && movie.genres.map((genre) => {
        // console.log(genre.name)
        return (
            <s.InfoText>{genre.name}</s.InfoText>
        )
    })

    const getMovieVideos = (set_data, id) => {
        // const url = 
        axios.get(`${BASE_URL}/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
            .then((resp) => {
                console.log(resp)
                const trailer = resp.data.results.filter((video) => {
                    if (video.type === "Trailer") {
                        return video
                    }
                })
                set_data(trailer)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    // const renderedTrailer = movieVideos[0] 
    //     return (
    //         <s.StyledTrailer key={idMaker()}>
    //             <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title={`${trailer.name}`}></iframe>
    //         </s.StyledTrailer>
    //     )

    const renderedTrailer = movieVideos && movieVideos.map((trailer) => {
        return (
            <s.StyledTrailer key={idMaker()}>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title={`${trailer.name}`}></iframe>
            </s.StyledTrailer>
        )
    })

    const getCredits = () => {
        axios.get(`${BASE_URL}3/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`)
            // axios.get(`${BASE_URL}movie/${id}/credits?${API_KEY}&language=pt-BR`)
            .then((res) => {
                console.log("console dos creditos", res)
                setCast(res.data.cast)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const renderedCredits = cast.map((actor) => {
        return (
            <s.Credits>
                {cast.actor}
                <img src={`${BASE_IMG}${actor.profile_path}`}
                />
                <div key={actor.id}>
                    <p>{`${actor.name}`}</p>
                    <p>{`${actor.character}`}</p>
                </div>
            </s.Credits>
        )
    })

    useEffect(() => {
        getDetails()
        getMovieVideos(setMovieVideos, id)
        getCredits()
    }, [params.id])

    // const goToMovieDetails = (id) => {
    //     getMovieVideos(set_movieVideos, id)
    // }

    return (
        <s.Body>
            <s.Horizon>
                <s.InfoFilm>
                    <s.TitleInfo>
                        <s.Title>{`${movie.title} (${year})`}</s.Title>
                        <s.InfoText>{genreList}</s.InfoText>
                        <br></br>
                        <br></br>
                        <s.InfoText>{`${duration} ${dateBr}`}</s.InfoText>
                        <br></br>
                        <s.InfoText>{`${movie.overview}`}</s.InfoText>
                        <s.Info>
                            <s.InfoText>{`${movie.vote_average}`}</s.InfoText>
                        </s.Info>

                    </s.TitleInfo>
                </s.InfoFilm>
                <s.ImagesPoster>
                    <s.PosterPath
                        src={`${BASE_IMG}${movie.poster_path}`}
                        title={`${movie.title}`}
                        alt={`Poster ${movie.title}`}
                    ></s.PosterPath>
                </s.ImagesPoster>
            </s.Horizon>
            <s.About>
                <s.Trailer>
                    {/* <s.TrailerTitle style={{ marginLeft: '2rem', marginBottom: '1rem' }}> Trailer </s.TrailerTitle> */}
                    {renderedTrailer}
                </s.Trailer>
                <s.CreditsDiv>
                    {renderedCredits.length > 0 &&
                        <div>
                            <s.CreditTitle>Elenco</s.CreditTitle>
                            <s.CreditsDivs>
                                {renderedCredits}
                            </s.CreditsDivs>
                        </div>
                    }
                </s.CreditsDiv>
            </s.About>
        </s.Body>
    )
}