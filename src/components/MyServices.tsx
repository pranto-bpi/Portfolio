import { servicesDetails } from '@/constants/Data'
import Container from './Container'
import Title from './Title'
import { ReactElement } from 'react'

interface Props {
     title:string,
     description:string,
     icon:ReactElement,
}

const MyServices = () => {
  return <Container className="border border-zinc-200 rounded-md mt-10"> 
  <Title  title='My Services'/> 
  <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 mt-10 '>
     { servicesDetails.map((item)=>(
          <div key={item?.title}
           className='border border-black p-5 rounded-md shadow-xl hover:shadow-none'>
               <div className='flex items-center gap-2'>
                 <p className='text-xl font-bold mb-4'> {item?.title}</p> 
                 {<span className='text-designColor animate-bounce'>
                 {<item.icon />}
                 </span>}
               </div>
                 <p>{item?.description}</p>
          </div>
     ))}
  </div>
  </Container>

   
  
}

export default MyServices