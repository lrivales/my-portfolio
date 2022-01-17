import React, { useState } from "react";
import resume from "./resume.docx"

function Resume() {
    const [frontEndSkills] = useState(['html', 'css', 'javascript', 'responsive design', 'react', 'bootstrap'])

    const [backEndSkills] = useState(['apis', 'node', 'express', 'mysql | sequelize', 'mongodb | mongoose', 'graphql', 'rest'])

    return(
        <div id="resume" className="container">
            <div className="text-center">
                <a href={resume} download className="text-custom-quaternary">download my resume</a>
            </div>
            <div className="columns">
                <div className="column">
                    <h1 className="text-center text-custom-quaternary">front-end skills</h1>
                    {frontEndSkills.map((skill) => {
                        return(
                            <h2 className="text-center text-custom-primary" key={skill}>{skill}</h2> 
                        )
                    })}
                </div>
                <div className="column">
                    <h1 className="text-center text-custom-quaternary">back-end skills</h1>
                    {backEndSkills.map((skill) => {
                        return(
                            <h2 className="text-center text-custom-primary" key={skill}>{skill}</h2> 
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Resume;
