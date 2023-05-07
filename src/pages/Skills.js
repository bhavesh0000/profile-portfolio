import React, { useState } from 'react';




const Skills = () =>{
    const SkillList = [
        {
            id: 1,
         Category: "Technical Skills ",
         skills: [
            'Node and Express Js',
            'React',
            'JavaScript',
            'MongoDb'
         ]
        },
        {
            id: 2,
            Category: "Software Skills",
            skills: [
               'Microsoft Office',
               'Ms PowerPoint',
               'Ms Excel',
               'Matlab basic',
               'Basic Adobe',

            ]

        },
        {
            id: 3,
            Category: "Personal Skills",
            skills: [
               'Time Management',
               'Honest ',
               'Team Player',
               'Hard Working',
               'Communication',

            ]
        },
        {
            id: 4,
            Category: "Languages",
            skills: [
               'English (verbal and written)',
               'Hindi',
            ]
        },
    ]

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryHover = (categoryId)=>{
        setActiveCategory(categoryId)
    }
    
    return (
        <div className='skill'>
          <div className="category-list">
            {SkillList.map((item) => (
              <div key={item.id} 
               className={`category ${activeCategory === item.id ? 'active' : ''}`}
               onMouseEnter={() => handleCategoryHover(item.id)}
               onMouseLeave={() => handleCategoryHover(null)}
               >
                <h2>{item.Category}</h2>
                {activeCategory === item.id && (
                <ul>
                  {item.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    
export default Skills;