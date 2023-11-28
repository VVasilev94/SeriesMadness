export default function AddNewSeries() {
    return(
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Add New Series</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter series title..." />

                    <label htmlFor="year">Year:</label>
                    <input type="text" id="year" name="year" placeholder="Enter series release year..." />

                    <label htmlFor="levels">Genres:</label>
                    <input type="number" id="genres" name="genres" min="1" placeholder="Enter genres..." />

                    <label htmlFor="game-img">Description:</label>
                    <input type="text" id="description" name="description" placeholder="Enter short description..." />

                    <label htmlFor="game-img">imageUrl:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="game-img">Producer:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Starring:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}