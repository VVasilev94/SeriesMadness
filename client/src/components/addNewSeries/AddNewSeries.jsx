import { useNavigate } from 'react-router-dom';

import * as seriesService from '../../services/seriesService';





export default function AddNewSeries() {
    const navigate = useNavigate();
    
    const createSerieSubmitHandler = async (e) => {
        e.preventDefault();

        const serieData = Object.fromEntries(new FormData(e.currentTarget));

        const isAnyFieldEmpty = Object.values(serieData).some((value) => value === '');
    if (isAnyFieldEmpty) {
      
      alert('All fields are required.');
      return;
    }

        try {
            await seriesService.create(serieData);

            navigate('/series');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }
    return(
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createSerieSubmitHandler}>
                    <div className="container">
                        <h1>Add New Series</h1>
                        <div className='input-wrapper'>
                            <label htmlFor="leg-title">Title:</label>
                            <input type="text" id="title" name="title" placeholder="Enter series title..." />

                            <label htmlFor="year">Year:</label>
                            <input type="number" id="year" name="year" placeholder="Enter series release year..." />

                            <label htmlFor="genres">Genres:</label>
                            <input type="text" id="genres" name="genres" placeholder="Enter genres..." />

                            <label htmlFor="imageUrl">imageUrl:</label>
                            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                            <label htmlFor="producer">Producer:</label>
                            <input type="text" id="producer" name="producer" placeholder="Enter producer..." />

                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" name="description" placeholder="Enter short description..."/>
                        </div>

                        <input className="btn submit" type="submit" value="Create Serie" />
                    </div>

            </form>
        </section>
    )
}