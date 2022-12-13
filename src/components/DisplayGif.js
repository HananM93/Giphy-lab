const GiphyDisplay = ({ giphy }) => {
    
    return giphy.data ? (
        <>
            <h1>Want A Surprise Gif? Click the button! </h1>
            <img src={giphy.data.images.downsized.url} alt={giphy.data.title} />
        </>
    ) : (
        <h1>Yay!</h1>
    )
}

export default GiphyDisplay;