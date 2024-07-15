import { projectsArray } from '@/app/data/portfolioData';
import { ProjectDetailCard } from '@/app/components/ProjectDetailCard';

const fetchProject = async (url) => {
    const targetProject = projectsArray.find(project => project.url === url);
    return targetProject;
}



const projectDetailPage = async ({params}) => {



  const project = await fetchProject(params.url)


  console.log("logging project:", project.src)

  // initial={{ opacity: 0, x: -200 }}
  // whileInView={{ opacity: 1, x: 0 }}

  return (
    <ProjectDetailCard project={project} />
  )
}

export default projectDetailPage;