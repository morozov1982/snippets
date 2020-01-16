import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illum aperiam aut ex nemo libero aliquid, accusantium, soluta ipsam saepe eius nulla natus, sunt numquam consequuntur! Reprehenderit in ducimus veritatis!</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by the Net Nonja</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
