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
        seriesService.getLatest()
            .then(result => setLatestSeries(result));
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Welcome to the world of TV series</h2>
            </div>


            <div id="home-page">
                <h1>Latest Series</h1>
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

