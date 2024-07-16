import { projectsArray } from '@/app/data/portfolioData';
import { ProjectDetailCard } from '@/app/components/ProjectDetailCard';

const fetchProject = async (url) => {
    const targetProject = projectsArray.find(project => project.url === url);
    return targetProject;
}



const projectDetailPage = async ({params}) => {

  const project = await fetchProject(params.url)



  return (
    <ProjectDetailCard project={project} />
  )
}

export default projectDetailPage;