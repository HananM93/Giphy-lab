const DisplayGif = ({giphy}) => {
    return giphy.data ? (
        <>
        <h1>Press Random Button for a surprise</h1>
        <img src={giphy.data.images.downsized.url} alt={giphy.data.title}/>
        </>
    ) : (
        <h1>submit</h1>
    )
}

    export default DisplayGif
