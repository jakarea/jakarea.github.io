import React, { useEffect } from "react";
import Nav from "../../components/nav.component";
import Blog from "../../components/blog.com";
import Footer from "../../components/footer.component";

export default function Home(props) {
  return (
    <>
      <Nav />
      <section id="resume" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xs-12">
                        <div className="resume-box blog-post">
                            <h4><a href="#">Vuex what, why, when and where?</a></h4>
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
                                    <br />
                                    <p>
                                        It is not necessary to use vuex in your application. The necessity depends on how
                                        much you application will grow. If you need share child’s data with parent or
                                        siblings, you can use shared event emitters in a small application. But, When your
                                        app will become large enough, Vuex will be the right choice for sharing data.
                                    </p>
                                    <br />

                                    <p>You know the future of your application, that will grow enough. There are so many
                                        component and need to communicate with each other. Then why not vuex? It will help
                                        you to track all events. vuex separate your business logic from another component,
                                        but can use from any component.</p>
                                    <br />
                                    <p>In this article, I have tried to make you clear, What is vuex? In My next article I
                                        will dig into vuex with hands on code.</p>
                                </div>
                                <div className="pull-right" title="Comment On">
                                    <a href="https://medium.com/@jakareaparvez/vuex-what-why-when-and-where-85ca471fe217" target="_blank"><svg width="35" height="35" viewBox="5 5 35 35" className="q">
                                        <path
                                            d="M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z">
                                        </path>
                                    </svg>
                                </a>
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
      <Footer />
    </>
  );
}