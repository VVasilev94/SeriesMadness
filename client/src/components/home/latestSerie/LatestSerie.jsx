import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";
import StarRating from "../../rating/StarRating";

export default function LatestSeries({
    _id,
    imageUrl,
    title,
}) {
    return (
        <div className="serie">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <StarRating/>
            </div>
            <div className="data-buttons">
                <Link to={pathToUrl(Path.SerieDetails, { serieId: _id })} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}