
import { ArrowRightIcon } from '@chakra-ui/icons'
import {Input,Button} from '@chakra-ui/react'

const ProjectSideBar: React.FC = () => {

    return (
        <div className="bg-project_side_bar text-white w-max font-bold h-screen p-20 text-nowrap text-center">
            <h1 className='text-3xl'>Projects</h1>
            <div className='flex flex-col my-4'>
            <Input className='my-2' variant="filled" placeholder='Add Project'/>
            <Button color={'white'} variant={'outline'} rightIcon={<ArrowRightIcon/>} >Add Project</Button>
            </div>
        </div>
    )
}

export default ProjectSideBar