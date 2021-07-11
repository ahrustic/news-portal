import React from "react";

import loader from '../assets/img/loader.gif';
import '../assets/css/loader.css';

const Loader = () => {
    return(
        <div>
            <img className={'loader'} src={loader} alt={'loader'}/>
        </div>
    );
}

export default Loader;