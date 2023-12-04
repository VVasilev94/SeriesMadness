import { useEffect, useState } from 'react';

import * as seriesService from '../../services/seriesService';
import SeriesCollectionItem from "./series-collection-item/SeriesCollectionItem"

import './seriesCollection.css'

export default function SeriesCollection() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        seriesService.getAll()
            .then(result => setSeries(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Series</h1>

            {series.map(serie => (
                <SeriesCollectionItem key={serie._id} {...serie} />
            ))}

            {series.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}
