import React from 'react';

export default (props) => {
    return(
        <>
            <div className="projectsContainer">
                <div className="project">
                    <button type="button" className="projectsBox" data-toggle="modal" data-target="#JiraCloneModal" href="">
                        <img className="img-fluid" src="" alt="" />
                        <div className="projectsBoxCaption">
                            <div className="projectName">Geera</div>
                            <div className="projectDescription">A clone of the popular project management tool - Jira</div>
                        </div>
                    </button>
                </div>
                <div className="project">
                    <button type="button" className="projectsBox" data-toggle="modal" data-target="#OneStopShopModal" href="">
                        <img className="img-fluid" src="" alt="" />
                        <div className="projectsBoxCaption">
                            <div className="projectName">OneStopSHop</div>
                            <div className="projectDescription">An eCommerce website selling customizable apparel</div>
                        </div>
                    </button>
                </div>
                <div className="project">
                    <button type="button" className="projectsBox" data-toggle="modal" data-target="#DemonSlayerModal" href="">
                        <img className="img-fluid" src="" alt="" />
                        <div className="projectsBoxCaption">
                            <div className="projectName">Demon Slayer</div>
                            <div className="projectDescription">A 2D Action RPG Platformer game based on a popular Japanese anime</div>
                        </div>
                    </button>
                </div>
            </div>
            <section className="modal-containers">
                <div className="modal fade" id="JiraCloneModal" tabIndex="-1" role="dialog" aria-labelledby="JiraCloneModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Geera - A Jira Clone</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img className="img-fluid my-2" src="~/assets/img/gif/JiraClone.gif" alt="" />
                                <p><span>Technologies used:</span> React, Node.js, MongoDB, Mongoose, Express, JavaScript, HTML, CSS, Sockets.io, NoSQL, JWT</p>
                                <p><span>The Inspiration:</span> As project management platforms are essential in keeping everyone organized and accountable in the industry, I thought it would be a great project for us to learn the in's and out's of this tool. </p>
                                <p><span>The Difference:</span> Our project sets itself apart from the original application by updating tasks in real-time by using sockets, which Jira does not.</p>
                                <p><span>The Challenges We Had Faced:</span> As our project had grown and more components had been implemented, many states had been nested and it was difficult to keep track of if the states had been passed through. This could have been easily resolved if we had utilized the Redux library from the beginning to make our application more extensible. Another challenge we had faced was using MongoDb, a NoSQL database. Since interdependencies of the components in projects and tasks, as well as the tasks themselves posed a problem in providing a seamless relationship between all of the components.</p>
                                <p><span>Moving Forward:</span> The next steps for this project would be to finish implementing the rest of the features of the application. After that, it would be to refactor the code, use Redux, and use a SQL database for a smoother relationship between the components. </p>
                                <p><span>Collaborators:</span> <a href="https://www.linkedin.com/in/bradymoir/">Brady Moir</a> | <a href="https://www.linkedin.com/in/dathanwong/">Dathan Wong</a></p>
                                <a href="https://github.com/MorningReference/JiraClone">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="OneStopShopModal" tabIndex="-1" role="dialog" aria-labelledby="OneStopShopModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">OneStopShop - For All Your Shopping Needs</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img className="img-fluid my-2" src="~/assets/img/gif/OneStopShop.gif" alt="" />
                                <p><span>Technologies used:</span> Python, MySQL, Jinja2, HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX</p>
                                <p><span>The Inspiration:</span> The idea had started off as a personal project, as my friend had been wanting a platform to sell his work on printful. Due, to the cost of sustaining the website through third party platforms and marketplaces, I thought that this might be a great opportunity to try and create an E-Commerce website as a project, as these sites are always in demand. A few of my collaborators were in agreement and this proved to be a great first project for us.</p>
                                <p><span>The Difference:</span> Most of the websites built to host all of the products are done through third-party platforms, but we had built a website from scratch and utilized printful's API to render any products that are to be sold.</p>
                                <p><span>The Challenges We Had Faced:</span> Due to this being all of our first project, we did not know what to expect in terms of project management. We initially had lofty aspirations that had to be streamlined for our presentation deadline. Luckily, we had drafted out a project outline and had prioritized our MVP. Another challenge most of us had gotten caught up with, was utilizing our source control: GitHub. There were many mistakes we made along the way that created even more headaches, however by the end of all the struggle I am confident enough to say that we all had become sufficently experienced with Git/GitHub. </p>
                                <p><span>Moving Forward:</span> Since we did not have any secure way to process our transactions, I would like to have a payment API to process our payments, such as Stripe API. Another feature I would like to add would be the admin portal to add and update any products to the catalog. Lastly, I would like to add the guest user feature, as this would be very convenient for the user and their experience with our website. </p>
                                <p><span>Collaborators:</span> <a href="https://www.linkedin.com/in/donald-l-57655a42/">Donald LeBlanc</a> | <a href="https://www.linkedin.com/in/paul-kramer-13666349/">Paul Kramer</a> | <a href="https://www.linkedin.com/in/vchamberlain/">Victoria Chamberlain</a></p>
                                <a href="https://github.com/MorningReference/OneStopShop">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="DemonSlayerModal" tabIndex="-1" role="dialog" aria-labelledby="DemonSlayerModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Demon Slayer - 2D Action RPG Platformer Game</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img className="img-fluid my-2" src="~/assets/img/gif/DemonSlayer.gif" alt="" />
                                <p><span>Technologies used:</span> Unity, C#, PlasticSCM, UnityTeams</p>
                                <p><span>The Inspiration:</span> As a lover of games, I had always been interested in game development. Our team took this opportunity to create a game based on a popular Japanese anime called Demon Slayer</p>
                                <p><span>The Difference:</span> We had the chance to utilize all of the pre-made assets to create all of the features necessary for our game, but we had stuck to the bare minimum for the sake of the experience that we would be able to gain from this. We had also collaborated with an artist that was able to provide us with our main character's asset and animation within the short time frame that we provided him.</p>
                                <p><span>The Challenges We Had Faced:</span> One of the greatest hurdle that we had faced was that, to us, Unity was a completely new technology that we did not have any formal training on. Most of the time was spent on research on how to implement certain features and having to swap between different version control systems due to the incompatability with them. However, by the end of it all, we had a version control system that worked (Unity Teams) and were able to produce a game we were proud of.</p>
                                <p><span>Moving Forward:</span> A few things that I would like to implement would be some additional levels, a working inventory system, as well as refactoring our combat system.</p>
                                <p><span>Collaborators:</span> <a href="https://www.linkedin.com/in/blanklevi/">Levi Blank</a> | <a href="https://www.linkedin.com/in/monicaaprilhong/">Monica Hong</a></p>
                                <a href="https://github.com/MorningReference/DemonSlayerUnity">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}