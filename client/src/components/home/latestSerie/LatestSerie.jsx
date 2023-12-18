import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";


import './latestSerie.css'


import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function LatestSeries({
    _id,
    imageUrl,
    title,
    description
}) {
    return (
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          
            <Card.Text className="card-description">
          Description: {description}
        </Card.Text>
    
            <Link  to={pathToUrl(Path.SerieDetails, { serieId: _id })} className="details-btn">Details</Link>
          </Card.Body>
        </Card>
      );
}