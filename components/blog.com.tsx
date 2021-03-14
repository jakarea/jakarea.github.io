/***********************
  Blog Component
 ***********************/

  const Blog = (props) => {
    return (
    <section id="resume" className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-xs-12">
                    <div className="resume-box blog-post">
                        <h4><a href="blog/vuex-what-why-when-and-where-85ca471fe217">Vuex what, why, when and where?</a></h4>
                        <div className="blog-thumb">
                            <img src="static/img/blog/what-is-vuex.jpeg" alt=""/>
                        </div>
                        <div className="resume-row">
                            <div className="info">
                                <div className="info-title">Category:</div>
                                <div className="value">Vuejs</div>
                                <div className="info-title">Published:</div>
                                <div className="value">Dec 26, 2017 </div>
                                <div className="info-title">Tag:</div>
                                <div className="value">Vuex</div>
                            </div>
                            <div className="post">
                                <p>Vuex is a concept to manage state(data) centrally of vue js application. It is
                                    created by evan you, creator of vue js, inspired from flux and redux. It’s a
                                    library, works with only vue js. It helps to manage state(data) of a large scale
                                    application in structured way.</p>
                                <br />
                                <p>As We know that vuex manage state centrally, So We can share state with other
                                    components in application using vuex. Managing state is a complex and debugging
                                    state is more bored task, When so much data traveling from one component to others.
                                    Vuex handle it in a simple way and developer can track state and debug easily.</p>
                            </div>
                            <div className="blog-action">
                                <a href="blog/vuex-what-why-when-and-where-85ca471fe217"
                                    className="m-btn pull-right">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-xs-12">
                    <div className="resume-box blog-post sidebar">
                        <form action="" method="get">
                            <div className="col-lg-12 side-form">
                                <div className="form-group">
                                    <label className="sr-only">Search...</label>
                                    <input className="form-control search_box" name="query" placeholder="Search..."
                                        type="text" />
                                    <button className="m-btn">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="resume-box blog-post sidebar">
                        <div className="section-title">
                            <h2>About<span> Me</span></h2>
                        </div>
                        <div className="about-me">
                            <p>
                                Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                                Aenean tincidunt sit amet erat malesuada interdum. Ae Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Aenean tincidunt sit amet erat malesuada interdum. Ae adipiscing elit. Aenean
                                tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum
                                scelerisque.
                            </p>
                        </div>
                    </div>
                    <div className="resume-box blog-post sidebar">
                        <div className="section-title">
                            <h2>Recent<span> Posts</span></h2>
                        </div>
                        <div className="recent-post">
                            <ul>
                                <li>
                                    <a href="">Vuex What, Why, When And Where?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-box blog-post sidebarß">
                        <div className="section-title">
                            <h2>Categories<span> </span></h2>
                        </div>
                        <div className="recent-post">
                            <ul>
                                <li className="cat-item cat-item-15"><a href="">Vuejs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  };
  
export default Blog;
  