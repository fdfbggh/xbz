export default function YoutubeVideo({ src, width, height }) {
    return (
        <div div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6" styles={{ width: '100%', maxWidth: width }}>
                    <iframe width="100%" height={height} src={`https://youtube.com/embed/${src}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}