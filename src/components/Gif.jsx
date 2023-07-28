import PropTypes from 'prop-types'

export const Gif = ({ title, url }) => {
    return (
        <div className="card">
            <img
                src={url}
                alt={`imagen de ${title}`}
            />
            <p>{title}</p>
        </div>
    )
}

//proptypes
Gif.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}