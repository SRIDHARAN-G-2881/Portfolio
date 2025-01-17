import about from '../Assets/about.png'
export default function About(){

    return (
      <section className='flex flex-col md:flex-row bg-secondary' id='about'>
        <div className='md:w-1/2 h-1/4'>
            <img src={about}alt='5'></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-white border-b-4 border-primary mb-5 w-[90px]'>ABOUT ME</h2>
            <p className='text-white'>Motivated and detail-oriented recent graduate with a B. Tech in Computer Science and Business Systems, possessing strong skills in Java, C, and the MERN stack. Proficient in web development, database management.</p>
            </div>
            
        </div>
      </section>
    )
}