export default function Banner({ size, src, alt, width, height }) {
    return (
        <div className={`px-1 col-md-${size}`}>
            <img className={`img-fluid`} src={src} alt={alt} style={{ width: width, height: height }} />
        </div>
    )
}