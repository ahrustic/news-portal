import React from "react";

import '../assets/css/newsList.css';
import notFound from '../assets/img/404.png';

const NotFoundPage = () => {
    return(
        <div>
            <img className={'notFound'} src={notFound} alt={'notFound'}
                 style={{
                    margin: '100px auto 0',
                    display: 'block',
                    width: '50%',
                }}
            />
        </div>
    );
};

export default NotFoundPage;
