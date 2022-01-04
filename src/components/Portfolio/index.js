import React from "react";

function Portfolio() {
    return(
        <div className="container">
            <div className="columns custom-padding">
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <img src={require(`../../img/app-toolkit.png`)} alt="app toolkit" className="img-responsive" />
                        </div>
                        <div className="card-header">
                            <div className="card-title h5 text-custom-quaternary">app toolkit</div>
                        </div>
                        <div className="card-body text-custom-primary">
                            this is an application for a personal dashboard/homepage. it is a collection of lite apps 
                            for finding out information like weather, music, news, etc.
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={() => window.open("https://lrivales.github.io/app-toolkit/", "_blank")}>
                                <i className="icon icon-forward"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <img src={require(`../../img/contactless-menu.png`)} alt="contactless menu ordering app" className="img-responsive" />
                        </div>
                        <div className="card-header">
                            <div className="card-title h5 text-custom-quaternary">contactless menu</div>
                        </div>
                        <div className="card-body text-custom-primary">
                            this is an application for restaurants that can be used by their customer for contactless ordering.
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={() => window.open("https://polar-earth-23819.herokuapp.com/", "_blank")}>
                                <i className="icon icon-forward"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
