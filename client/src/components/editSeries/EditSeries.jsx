import { useNavigate, useParams } from 'react-router-dom';

import * as seriesService from '../../services/seriesService';
import { useEffect, useState } from 'react';

export default function EditSeries() {
    const navigate = useNavigate();
    const { serieId } = useParams();
    const [serie, setSerie] = useState({
        title: '',
        year: '',
        genres: '',
        imageUrl: '',
        producer: '',
        description: '',
    });

    useEffect(() => {
        seriesService.getOne(serieId)
            .then(result => {
                setSerie(result);
            });
    }, [serieId]);

    const editSeriesSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await seriesService.edit(serieId, values);

            navigate('/series');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editSeriesSubmitHandler}>
                <div className="container">
                    <h1>Edit Series</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" value={serie.title} onChange={onChange} placeholder="Enter series title..." />

                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" value={serie.year} onChange={onChange} placeholder="Enter series release year..." />

                    <label htmlFor="genres">Genres:</label>
                    <input type="text" id="genres" name="genres" value={serie.genres} onChange={onChange} placeholder="Enter genres..." />

                    <label htmlFor="imageUrl">imageUrl:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={serie.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="producer">Producer:</label>
                    <input type="text" id="producer" name="producer" value={serie.producer} onChange={onChange} placeholder="Enter producer..." />

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={serie.description} onChange={onChange} placeholder="Enter short description..."/>
                    <input className="btn submit" type="submit" value="Create Serie" />
                </div>
            </form>
        </section>
    );
}