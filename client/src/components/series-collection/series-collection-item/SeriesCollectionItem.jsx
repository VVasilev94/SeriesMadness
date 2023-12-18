import { Link } from "react-router-dom";
import "./series-collection-item.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

export default function SeriesCollectionItem({
  _id,
  title,
  year,
  imageUrl,
  genres,
}) {
  return (
    <Card
      style={{
        width: "32em",
        height: "48em",
        padding: "1em",
        border: "double",
      }}
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text className="cards">
          <h2>Year: {year}</h2>
        </Card.Text>
        <Card.Text className="card-description">
          <h2>Genre: {genres}</h2>
        </Card.Text>

        <Link
          to={pathToUrl(Path.SerieDetails, { serieId: _id })}
          className="details-btn"
        >
          Details
        </Link>
      </Card.Body>
    </Card>
  );
}
