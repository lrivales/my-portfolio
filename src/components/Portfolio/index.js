import React, { useState } from "react";

function Portfolio() {
    const [projects] = useState([
        {
            img: 'app-toolkit.png',
            name: 'app toolkit',
            description: 'this is an application for a personal dashboard/homepage. it is a collection of lite apps for finding out information like weather, music, news, etc.',
            url: 'https://lrivales.github.io/app-toolkit/'
        },
        {
            img: 'contactless-menu.png',
            name: 'contactless menu',
            description: 'this is an application for restaurants that can be used by their customer for contactless ordering.',
            url: 'https://polar-earth-23819.herokuapp.com/'
        },
        {
            img: 'note-taker.png',
            name: 'note taker',
            description: 'this is a basic note taking application. it uses express.js and json for data storage and retrieval.',
            url: 'https://murmuring-sea-88897.herokuapp.com'
        },
        {
            img: 'budget-tracker.png',
            name: 'budget tracker',
            description: 'this is a basic budget tracking application. it also displays a basic line graph to visualize your money over time.',
            url: 'https://whispering-ocean-33517.herokuapp.com'
        },
        {
            img: 'food-festival.png',
            name: 'food festival',
            description: 'this is a basic app for a food festival.  it can be modified for any type of festival.',
            url: 'https://lrivales.github.io/food-festival/'
        },
        {
            img: 'zookeepr.png',
            name: 'zookeepr',
            description: 'this is an app for managing zoo animals and their keepers.',
            url: 'https://infinite-headland-85038.herokuapp.com'
        }
    ]);

    return(
        <div className="container">
            <div className="columns custom-padding">
                {projects.map((project) => {
                    return(
                        <div className="column" key={project.url}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={require(`../../img/${project.img}`)} alt={project.name} className="img-responsive" />
                                </div>
                                <div className="card-header">
                                    <div className="card-title h5 text-custom-quaternary">{project.name}</div>
                                </div>
                                <div className="card-body text-custom-primary">
                                    {project.description}
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary" onClick={() => window.open(`${project.url}`, "_blank")}>
                                        <i className="icon icon-forward"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;
