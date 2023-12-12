import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as likeService from '../../services/likeService'

import * as seriesService from '../../services/seriesService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";
import LikeSeries from "../likeSeries/LikeSeries";


import './seriesDetails.css'


export default function SeriesDetails() {
    const navigate = useNavigate();
    const { userId, username } = useContext(AuthContext);
    const [series, setSeries] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const [likes, setLikes] = useState([]);
    const { serieId } = useParams();

    useEffect(() => {
        seriesService.getOne(serieId)
            .then(setSeries);
            
            likeService.checkUserLikedSeries(userId, serieId)
            .then((result) => setLikes(result)) 

        commentService.getAll(serieId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });


    }, [serieId,]);

    

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            serieId,
            values.comment
        );
       

        newComment.owner = { username };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${series.title}`);

        if (hasConfirmed) {
            await seriesService.remove(serieId);

            navigate('/series');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

     return(
        <section id="series-details">
            <h1>Series Details</h1>
            <div className="info-section">
                <div className="serie-header">
                    <img className="serie-img" src={series.imageUrl} alt={series.title} />
                    <div>
                        <LikeSeries userId={userId} serieId={serieId} likes={likes} />
                    </div>
                    <h1>{series.title}</h1>
                    <span className="year">Year: {series.year}</span>
                    <p className="genres">Genres: {series.genres}</p>
                    <p className="producer">Producer: {series.producer}</p>
                </div>

                <p className="description">Description: {series.description}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {userId === series._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.SerieEdit, { serieId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
     )
}