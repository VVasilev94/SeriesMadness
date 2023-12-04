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
                <h2>ALL new Series are</h2>
                <h3>Only in SeriesMadness</h3>
            </div>


            <div id="home-page">
                <h1>Latest Series</h1>

                {latestSeries.map(serie => <LatestSerie {...serie} />)}

                {!latestSeries.length && <p className="no-articles">No series yet</p>}

                <p>{email}</p>
            </div>
        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;