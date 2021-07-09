
import {
    Project1, Project2, Project3, Project4, Project5, Project6
} from './Project';


import Project1Img from '../assets/Project1.png';
import Project2Img from '../assets/Project2.png';
import Project3Img from '../assets/Project3.png';
import Project4Img from '../assets/Project4.png';
import Project5Img from '../assets/Project5.png';
import Project6Img from '../assets/Project6.png';

interface Project {
    id: number;
    image: string;
    description: any;
}

const Projects = [
    {
        id: 1, image: Project1Img, description: Project1
    },
    {
        id: 2, image: Project2Img, description: Project2
    },
    {
        id: 3, image: Project3Img, description: Project3
    },
    {
        id: 4, image: Project4Img, description: Project4
    },
    {
        id: 5, image: Project5Img, description: Project5
    },
    {
        id: 6, image: Project6Img, description: Project6
    },
]

export default Projects;