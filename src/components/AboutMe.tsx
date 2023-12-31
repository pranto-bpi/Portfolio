import Container from "./Container"
import Title from "./Title";
const AboutMe = () => {
  return (
   <section id="AboutMe">
     <Container className="bg-slate-900 text-zinc-200 px-4 font-medium  max-h-screen-lg  ">
     <Title title='About Me'/> 
     <p className="text-base tracking-wide mt-4">I am a web developer with 4+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem. I have experience working on a variety of projects, including building and maintaining single page applications, integrating with REST APIs, and implementing responsive design principles.</p>

     <p className="mt-2"> I am also proficient in using tools such as Webpack, npm, and Git for development and deployment. In addition to my technical skills, I am a strong communicator and team player. I am able to work effectively with cross-functional teams and am comfortable taking on new challenges and learning new technologies as needed.

I am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.</p>
    
    </Container>
    <Container>
    <hr className='mt-5' />
    </Container>
   </section>
  );
};

export default AboutMe