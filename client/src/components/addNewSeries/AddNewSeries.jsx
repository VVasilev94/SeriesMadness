export default function AddNewSeries() {
    return(
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Add New Series</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter series title..." />

                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" placeholder="Enter series release year..." />

                    <label htmlFor="genres">Genres:</label>
                    <input type="text" id="genres" name="genres" min="1" placeholder="Enter genres..." />

                    <label htmlFor="description">Starring:</label>
                    <input type="text" id="description" name="description" placeholder="Enter show cast..." />

                    <label htmlFor="imageUrl">imageUrl:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="producer">Producer:</label>
                    <input type="text" id="producer" name="producer" placeholder="Enter producer..." />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}