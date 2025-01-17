import resume from '../Assets/RESUME-SRIDHARAN G.pdf.jpg'
export default function About(){

    return (
      <section className='flex flex-col md:flex-row  justify-center bg-secondary'id='resume'>
        <div className='md:w-1/2 h-1/4'>
            <img  className='w-[550px] h-[650px] px-5 py-6' src={resume}alt='5'></img>
        </div>
        <div className='py-7 md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-white border-b-4 border-primary mb-5 w-[90px]'>RESUME</h2>
            <p className='text-white'>click here to download my resume     <a  className='btn' href='file:///C:/Users/sridh/Downloads/SRIDHARAN%20G-RESUME.pdf'>DOWNLOAD</a></p>
            </div>
            
        </div>
      </section>
    )
}