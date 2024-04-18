import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={"profile"}>
            <img src={avatar} alt='User Avatar' className={css.avatar} />
        <div className="description">
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
            </li>
            <li>
            <span className="label">Views</span>
            <span className="quantity">2000</span>
            </li>
            <li>
            <span className="label">Likes</span>
            <span className="quantity">3000</span>
            </li>
        </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.string,
};