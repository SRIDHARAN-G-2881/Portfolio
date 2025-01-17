import tech from "../Assets/tech2.png"
import { AiOutlineLinkedin,AiOutlineGithub} from 'react-icons/ai'
export default function Hero(){
    const config={
        subtitle:'iam a mern stack developer'
    }

    return (
        <section className='flex flex-col md:flex-row justify-centre  px-10 py-40 w-full h-full bg-primary'id='hero'>
           <div className='md:w-1/2 flex flex-col '>
               <h2 className=' text-white   text-4xl font-me-font'>Hi,<br></br>iam sridharan
               <p>{config.subtitle}</p>
             </h2>
             <div className='flex gap-3'>
                <a href='7' className='hover:text-white'><AiOutlineLinkedin size={30}/></a>
                <a href='7' className='hover:text-white'><AiOutlineGithub size={30}/></a>
             </div>
           </div>
           <img className="size-25" src={tech} alt="5"></img>
           

        </section>
    )
}