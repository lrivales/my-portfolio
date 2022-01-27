import React, { useState } from "react";

function Portfolio() {
    const [projects] = useState([
        {
            img: 'app-toolkit.png',
            name: 'app toolkit',
            description: 'this is a collection of "lite" apps like a swiss army knife for the web. it can be extended for more.',
            url: 'https://lrivales.github.io/app-toolkit/',
            github: 'https://github.com/lrivales/app-toolkit'
        },
        {
            img: 'contactless-menu.png',
            name: 'contactless menu',
            description: 'this is an app that can be used for dine-in contactless ordering (meant for restaurant use only, not online).',
            url: 'https://polar-earth-23819.herokuapp.com/',
            github: 'https://github.com/lrivales/contactless-menu'
        },
        {
            img: "home-inventory.png",
            name: "home inventory",
            description: "This is a basic home inventory app to keep track of all the valuables in your home in case the unthinkable happens.",
            url:"",
            github:"https://github.com/lrivales/my-home-inventory"
        },
        // {
        //     img: 'note-taker.png',
        //     name: 'note taker',
        //     description: 'this is a very simple note taking application. it can be extended for more functionality like authentication, etc.',
        //     url: 'https://murmuring-sea-88897.herokuapp.com',
        //     github: 'https://github.com/lrivales/note-taker'
        // },
        // {
        //     img: 'budget-tracker.png',
        //     name: 'budget tracker',
        //     description: 'this is an app for a basic budget tracking application with a line graph for visualizing trends.',
        //     url: 'https://whispering-ocean-33517.herokuapp.com',
        //     github: 'https://github.com/lrivales/budget-tracker'
        // },
        // {
        //     img: 'food-festival.png',
        //     name: 'food festival',
        //     description: 'this is an app for a food festival (or any other type of festival) with an events schedule and ticket purchases.',
        //     url: 'https://lrivales.github.io/food-festival/',
        //     github: 'https://github.com/lrivales/food-festival'
        // },
        // {
        //     img: 'zookeepr.png',
        //     name: 'zookeepr',
        //     description: 'this is an app for managing zoo animals and their keepers (or anything else that needs managing).',
        //     url: 'https://infinite-headland-85038.herokuapp.com',
        //     github: 'https://github.com/lrivales/zookeepr'
        // }
    ]);

    return(
        <div className="container custom-padding">
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
                                    &nbsp;&nbsp;
                                    <button className="btn btn-primary" onClick={() => window.open(`${project.github}`, "_blank")}>
                                        <i className="icon icon-link"></i>
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
