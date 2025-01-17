import ecomm from '../Assets/website-blog.jpg'
import mee from '../Assets/me.png'
export default function Project(){

    return (
        <section className=" flex flex-col px-5 py-10 justify-center bg-primary text-white"id='project'>
          <div className="w-full">
          <div className="flex flex-col  gap-0 px-10 py-5">
          <h2 className=" font-bold border-b-4 border-secondary mb-5 w-[80px]">PROJECTS</h2><br/>
          <p>These are some of my best project.I have built thus using React.js,Express.js,Node,js,javascript and tailwind css</p>
          </div>
            
        </div>
          <div className="w-full">
              <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                <img  className='h-[150px]'src={ecomm} alt='5'></img>
                   <div className='absolute left-0 rigth-0 bottom-[0px] top-0 bg-secondary opacity-0 hover:opacity-100'>
                    <p className='text-center py-20 w-[225px]'>The web app allows students to register skills completed in previous semesters</p>
                    </div>
                </div>  
                <div className='relative' >
                <img className='h-[150px]'src={ecomm} alt='5'></img>
                    <div className='absolute left-0 rigth-0 bottom-[0px] top-0 bg-secondary opacity-0 hover:opacity-100' >
                    <p className='text-center py-20 w-[225px]'>The web app streamlines student results management </p>
                    </div>
                </div>
               
          </div>
             
          </div>
        </section>
    )
}