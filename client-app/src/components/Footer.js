import React from 'react';

export default (props) => {
    return(
        <div className="footer">
            <h2>Let's get in touch!</h2>
            <div class="text-center">
                <a class="btn btn-outline-primary btn-social mx-1 img-fluid" href="https://github.com/MorningReference"><i class="fab fa-fw fa-github"></i></a>
                <a class="btn btn-outline-primary btn-social mx-1 img-fluid" href="https://www.linkedin.com/in/aricjeon/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                <a class="btn btn-outline-primary btn-social mx-1 img-fluid" href="mailto:aricjeon.dev@gmail.com"><i class="far fa-fw fa-envelope"></i></a>
            </div>
        </div>
    );
}