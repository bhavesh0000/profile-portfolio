import React from 'react';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png"

import { Card } from 'react-bootstrap';

const Projects = () =>{
    const ProjectList = [
        {
         id: 1,
         name: "contact management backend",
         imageUrl: project1,
         

        },
        {
         id: 2,
         name: "live chatting app",
         imageUrl: project2,
    
        },
        {
         id: 3,
         name: "e-commerce website",
         imageUrl: project1,
        },
        {
            id: 4,
            name: "extras",
            imageUrl: project2,
           },

    ];
    return(
    <div className='projects'>
        <h2><font>Projects</font></h2>
        <div className='wrapper'>
            {ProjectList.map((item) =>{
                return (
                <div>
                    <Card>
                        <Card.Img variant='top' src={item.imageUrl}/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                );    
            })}
        </div>
        </div>
    );
    
};

export default Projects;