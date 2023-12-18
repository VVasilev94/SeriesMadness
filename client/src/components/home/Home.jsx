import { useEffect, useState } from "react";
import withAuth from "../../HOC/withAuth";
import * as seriesService from '../../services/seriesService';
import LatestSerie from "./latestSerie/LatestSerie";
import './home.css'

function Home({
    _id,
    accessToken,
    email,
}) {
    const [latestSeries, setLatestSeries] = useState([]);

    useEffect(() => {
        seriesService.getAll()
            .then(result =>  {
                
                const sortedSeries = result.sort((a, b) => new Date(b._createdOn) - new Date(a._createdOn)).slice(0 ,3);
                setLatestSeries(sortedSeries);
            });
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h1>Welcome to the world of TV series</h1>
            </div>


            <div id="home-page">
                <h2>Latest Series</h2>
                <div id="show-cards">

                {latestSeries.map(serie => <LatestSerie key={serie._id} {...serie} />)}

                {!latestSeries.length && <p className="no-articles">No series yet</p>}

            </div>
            </div>

        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;

