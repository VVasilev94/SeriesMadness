import { Link } from "react-router-dom";
import './series-collection-item.css'

export default function SeriesCollectionItem({
    _id,
    title,
    year,
    imageUrl,
    genres,
}) {
    return(
        <div className="allSeries">
            <div className="allSeries-info">
                <img src={imageUrl} />
                <h1>{title}</h1>
                <h2>{year}</h2>
                <h2>{genres}</h2>
                <Link to={`/series/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}