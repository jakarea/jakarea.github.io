/***********************
  About Component
 ***********************/

  const Projects = (props) => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="row project-row bg project">
                    <div className="col-xs-12 col-lg-6">
                        <div className="personal-info">
                            <h3><a href="#" target="_blank">Job portal website built with react and nodejs</a></h3>
                            <div className="skills">
                                <ul>
                                    <li><a href="#" target="_blank">Bootstrap 4</a></li>
                                    <li><a href="#" target="_blank">jQuery 3</a></li>
                                    <li><a href="#" target="_blank">React 16</a></li>
                                    <li><a href="#" target="_blank">Typehead.js</a></li>
                                    <li><a href="#" target="_blank">Moment.js</a></li>
                                    <li><a href="#" target="_blank">Node.js</a></li>
                                    <li><a href="#" target="_blank">Express</a></li>
                                    <li><a href="#" target="_blank">MongoDB</a></li>
                                </ul>
                            </div>
                            <p>A complete solution to get a job and post a job. This is the most important product of our company. We made this project for job seekers and recruiters to find his best matching job and employee. Recently this product has been launched focused on the Japanese market. There are three languages available Bangla, English, and Japanese. The portal is built with those key tools</p>
                            <div className="about-actions">
                                <a className="m-btn lets-talk" role="button" href="#">Details</a>
                                <a className="m-btn lets-talk" target="_blank" role="button" href="http://careers-trip.com">Live Preview</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6 pull-right">
                        <div className="project-pic">
                            <img src="./static/img/projects/job-portal-website-built-with-node-react.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row project-row bg project">
                    <div className="col-lg-6">
                        <div className="project-pic"><img src="./static/img/inventory.png" title="" alt=""/></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="personal-info">
                            <h3><a href="#" target="_blank">Old age care service at home</a></h3>
                            <div className="skills">
                                <ul>
                                    <li><a href="#" target="_blank">Bootstrap 4</a></li>
                                    <li><a href="#" target="_blank">jQuery 3</a></li>
                                    <li><a href="#" target="_blank">php</a></li>
                                    <li><a href="#" target="_blank">MySQL</a></li>
                                </ul>
                            </div>
                            <p>
                                Most of the content is static using bootstrap PHP and MySQL. There are dynamic parts for notice board and job post. Admin can post notice and job visible to all.
                            </p>
                            <p>One can see a job post according to category. It is handled by ajax. Visitor can change the category on dropdown, onChange category, He can see different jobs served by ajax.
                            </p>
                            <p>
                                On notice board pagination made by custom PHP code, all code is written in an object oriented php and data stored in MySQL database connected by PDO.
                            </p>
                            <div className="about-actions"><a className="m-btn lets-talk" role="button" href="#">Live Preview</a></div>
                        </div>
                    </div>
                </div>
                <div className="row project-row bg project">
                    <div className="col-xs-12 col-lg-6">
                        <div className="personal-info">
                            <h3><a href="#" target="_blank">Infertility harvestmen treatment consultancy
                            </a></h3>
                            <div className="skills">
                                <ul>
                                    <li><a href="#" target="_blank">Bootstrap 4</a></li>
                                    <li><a href="#" target="_blank">jQuery 3</a></li>
                                    <li><a href="#" target="_blank">php</a></li>
                                    <li><a href="#" target="_blank">MySQL</a></li>
                                </ul>
                            </div>
                            <p>This is a consultancy website for infertility harvesting. It was for one of the Japanese clients from Tokyo. This site is made with bootstrap, jQuery, and PHP. There we used a custom PHP framework based on MVC pattern.  Most of the content of this site is static. There was a critical part of marketing purposes.</p>
                            <p>There is a consultancy form with more than 30 different fields. Depending on users input, User gets an email according to their answers. Another tricky part we fixed by cron job, The user who fillup form they will get a promotional email after a period. This email content and duration for getting each email was depends of input contents. </p>
                            <p>Finally, we are very pleased to deliver a great product and the client was very happy with us.
                            </p>
                            <div className="about-actions"><a className="m-btn lets-talk" role="button" href="#">Live Preview</a></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6 pull-right">
                        <div className="project-pic"><img src="./static/img/01.jpg" title="" alt=""/></div>
                    </div>
                </div>
                <div className="row project-row bg project">
                    <div className="col-lg-6">
                        <div className="project-pic"><img src="./static/img/inventory.png" title="" alt=""/></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="personal-info">
                            <h3><a href="#" target="_blank">Multi-level marketing </a></h3>
                            <div className="skills">
                                <ul>
                                    <li><a href="#" target="_blank">Bootstrap 4</a></li>
                                    <li><a href="#" target="_blank">jQuery 3</a></li>
                                    <li><a href="#" target="_blank">php</a></li>
                                    <li><a href="#" target="_blank">MySQL</a></li>
                                    <li><a href="#" target="_blank">Laravel 5.1</a></li>
                                    <li><a href="#" target="_blank">Typehead.js</a></li>
                                    <li><a href="#" target="_blank">Carbon</a></li>
                                </ul>
                            </div>
                            <p>
                                Eslmbd is a multi-level marketing website. Where they use a 50:50 binary system. Members can buy product form sales center/shop. Shop have to collect point form admin by payment. Every product has some point value. By selling product, point will reduce and buyer earn point, After collecting point, they can convert point into cash from sales center.
                            </p>
                            <b>Project Task/Challenge</b>
                            <p>The challenging part of this project was to generate tree view, Every user and admin can see downlink and he can go to the last person, Who is in his left or right side. But he can’t see top-level person. 
                                Another tricky part was to generate a summary How many total numbers of people are on the left or right side. And much he earns.
                                </p>
                                <b>Project Solution</b>
                            <p>I handled that part by recursive programming, Each time I get a user passing by URL, Search whose is parent is this, Again call this function with a maximum limit.  Then I store them in a temporary stack, Finally when cross limit or no user found, then generate a array/tree from stack and send as response.
                            </p>
                            <div className="about-actions"><a className="m-btn lets-talk" role="button" href="#">Live Preview</a></div>
                        </div>
                    </div>
                </div>
                <div className="row project-row bg project">
                    <div className="col-xs-12 col-lg-6">
                        <div className="personal-info">
                            <h3><a href="#" target="_blank">Infertility harvestmen treatment consultancy
                            </a></h3>
                            <div className="skills">
                                <ul>
                                    <li><a href="#" target="_blank">Bootstrap 4</a></li>
                                    <li><a href="#" target="_blank">jQuery 3</a></li>
                                    <li><a href="#" target="_blank">php</a></li>
                                    <li><a href="#" target="_blank">MySQL</a></li>
                                </ul>
                            </div>
                            <p>This is a consultancy website for infertility harvesting. It was for one of the Japanese clients from Tokyo. This site is made with bootstrap, jQuery, and PHP. There we used a custom PHP framework based on MVC pattern.  Most of the content of this site is static. There was a critical part of marketing purposes.</p>
                            <p>There is a consultancy form with more than 30 different fields. Depending on users input, User gets an email according to their answers. Another tricky part we fixed by cron job, The user who fillup form they will get a promotional email after a period. This email content and duration for getting each email was depends of input contents. </p>
                            <p>Finally, we are very pleased to deliver a great product and the client was very happy with us.
                            </p>
                            <div className="about-actions"><a className="m-btn lets-talk" role="button" href="#">Live Preview</a></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6 pull-right">
                        <div className="project-pic"><img src="./static/img/01.jpg" title="" alt=""/></div>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  
export default Projects;
  