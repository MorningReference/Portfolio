import React, {useState} from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import styles from './MainBanner.module.css';

export default (props) => {
    const [scrolled, setScrolled] = useState(true);

    const transition = () => {
        setScrolled(!scrolled);
    }

    return (
        <div className={`${scrolled ? styles.mainBanner : ''} d-flex justify-content-center align-items-center`} onWheel={transition}>
            <div className="headlineContainer text-center">
                <h1 className="text-light">Aric Jeon</h1>
                <p className="text-light">Full Stack Developer with a goal to bridge the gap in understanding</p>
            </div>
        </div>
    );
}