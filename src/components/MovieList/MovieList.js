import Movie from '../Movie/Movie';
import './MovieList.css';
export default function MovieList(props){
    return(
        <>
        <h2 id = "header">Trending Movies</h2>
        <div id = "container">
            {props.data.map(movie => {
                return <Movie data = {movie}/>
            })}
        </div>
        </>
    )
}