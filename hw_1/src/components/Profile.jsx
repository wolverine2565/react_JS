import React, { useContext } from 'react';
import { UserContext, ThemeContext } from './contexts';

const Profile = () => {
    const { username } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <p>Детали профиля пользователя: {username}</p>
        </div>
    );
};

export default Profile;
