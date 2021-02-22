import React from 'react';

export default (props) => {
    return(
        <div className="footer">
            <h2>Let's get in touch!</h2>
            <div className="text-center">
                <a className="btn btn-outline-primary btn-social mx-1 img-fluid" href="https://github.com/MorningReference"><i className="fab fa-fw fa-github"></i></a>
                <a className="btn btn-outline-primary btn-social mx-1 img-fluid" href="https://www.linkedin.com/in/aricjeon/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                <a className="btn btn-outline-primary btn-social mx-1 img-fluid" href="mailto:aricjeon.dev@gmail.com"><i className="far fa-fw fa-envelope"></i></a>
            </div>
        </div>
    );
}