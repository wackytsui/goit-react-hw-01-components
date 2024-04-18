import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profile}>
            <img src={avatar} alt='User Avatar' className={css.avatar} />
        <div className={css.description}>
            <p className={css.name}>{username}</p>
            <p className={css.tag}>&#64;{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
            </li>
            <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
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
    stats: PropTypes.object
};