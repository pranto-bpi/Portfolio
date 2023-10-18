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
  return (
  <section id='myservices' >
    <Container className=" rounded-md mt-10"> 
  <Title  title='My Services' className='text-white'/> 
  <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 mt-10 '>
     { servicesDetails.map((item)=>(
          <div key={item?.title}
           className='bg-blue-950 p-5 rounded-md shadow-xl shadow-black hover:shadow-none'>
               <div className='flex items-center gap-2'>
                 <p className='text-xl font-bold  text-white mb-4'> {item?.title}</p> 
                 {<span className='text-designColor animate-bounce'>
                 {<item.icon />}
                 </span>}
               </div>
                 <p className='text-zinc-400 tracking-wide  text-justify'>{item?.description}</p>
          </div>
     ))}
  </div>
  
  </Container>
  <Container>
    <hr className='mt-5' />
    </Container>

  </section>

  ) 
  
}

export default MyServices