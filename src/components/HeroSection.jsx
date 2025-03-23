import video1 from "/Users/shreya/Desktop/UIWeb/virtualr-main/src/assets/video1.mp4";
import video2 from "/Users/shreya/Desktop/UIWeb/virtualr-main/src/assets/video2.mp4";

const HeroSection = () => {
  return (
    <div id="hs" className="flex flex-col justify-center items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500 font-bold"> Best
                </span> 
            <span className="text-blue-500 font-bold "> Online Courses in
                </span>  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 font-bold"> India
                </span>    
        </h1>
        <p className="mt-10 text-lg text-center text-nuetral-500 max-w-4xl">
        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 font-bold">SkillSphere </span>, your ultimate destination for high-quality online courses! Whether you're looking to enhance your skills, advance your career, or explore new passions, we’ve got you covered.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-blue-500
            py-3 px-4 mx-3 rounded-md text-bold"> Try free course</a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border"> Explore courses</a>
        </div>
        <div className="flex mt-10 justify-center gap-x-8">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video1} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video2} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroSection
