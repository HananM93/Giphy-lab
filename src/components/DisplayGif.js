const DisplayGif = ({ gif }) => {
    
    return gif.data ? (
        <>
            <h1>Want A Surprise Gif? Click the button! </h1>
            <img src={gif.data.images.downsized.url} alt={gif.data.title} className='img' width = "300" height = "460"/>
        </>
    ) : (
        <h1>Yay!</h1>
    )
}

export default DisplayGif;