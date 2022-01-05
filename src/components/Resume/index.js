import React, { useState } from "react";

function Resume() {
    const [frontEndSkills] = useState(['html', 'css', 'jquery', 'responsive design', 'react', 'bootstrap'])

    const [backEndSkills] = useState(['apis', 'node', 'express', 'mysql, sequelize', 'mongodb, mongoose', 'rest'])

    return(
        <div id="resume" className="container">
            <div className="columns">
                <div className="column col-6">
                    <h1 className="text-right text-custom-quaternary">front-end skills</h1>
                    {frontEndSkills.map((skill) => {
                        return(
                            <h2 className="text-right text-custom-primary" key={skill}>{skill}</h2> 
                        )
                    })}
                </div>
                <div className="column col-6">
                    <h1 className="text-right text-custom-quaternary">back-end skills</h1>
                    {backEndSkills.map((skill) => {
                        return(
                            <h2 className="text-right text-custom-primary" key={skill}>{skill}</h2> 
                        )
                    })}
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Resume;
