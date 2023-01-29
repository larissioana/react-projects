import { projects } from "../data";


const Portfolio=()=>{
    return(
        <div className="projects-container">
        {projects.map((project)=>{
            const {id,image,url}=project;
            return  <div className="projects-info" key={id}>
            <a href={url} target="_blank" rel="noreferrer">
            <img src={image} alt="projects"/>
            </a>
          </div>
        })}
    </div>
       
    )
};
export default Portfolio;
