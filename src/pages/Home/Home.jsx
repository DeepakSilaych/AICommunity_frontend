import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpg";
import img from "../../assets/img.jpg";
import right from "../../assets/right.png";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';



export default function Home() {
    return (
        <div className="h-full flex flex-col bg-black">
            <div className="w-full m-8" >
                <div className="w-full h-50 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-2 mb-0">
                    <div className="text-xl text-green-500 font-pressStart">Hey AI Enthusiast!</div>
                        <div className="flex flex-col md:flex-row gap-2 mb-0">
                            <div className="text-xl font-bold text-white font-sans">Welcome to the</div> 
                                <div className="text-xl block text-yellow-400 font-sans font-extrabold">
                                    <TypeAnimation
                                    sequence={[
                                        'AI Community IITB',
                                        2000,
                                        "",
                                        1000,
                                        'AI innovation at IITB',
                                        2000,
                                        '',
                                        1000,
                                        'AI learning hub of IITB',
                                        2000,   
                                        '',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    />
                                </div>
                                
                            </div>
                        
                </div>
            </div>

            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center">
                <h1 className="font-pressStart text-xl mb-2 text-green-500 underline">Our Mission</h1>
                <div className="text-white text-lg font-sans">
                At <span className="text-yellow-400">AICommunity IITB</span>, we are dedicated to fostering a vibrant and inclusive community for everyone interested in artificial intelligence. Our mission is to empower individuals to explore, learn, and collaborate in the rapidly evolving field of <span className="text-yellow-400">AI</span>. We believe that by bringing together people with diverse backgrounds and expertise, we can drive innovation and create positive impacts on society.

                <ul className="flex flex-wrap  gap-2 mt-4">
                {missionPoints.map((point, index) => (
                    <li key={index} className="text-white  md:max-w-[49%] bg-[rgba(50,50,50,.3)] hover:bg-[rgba(50,50,50,.5)] p-4 rounded-lg flex flex-col">
                    <div className="text-lg text-green-500 text-center">{point.title}</div>
                    <p className="text-white text-sm">{point.content}</p>
                    </li>
                ))}
                </ul>
                <div className="text-green-500 mt-4">
                Join us on our journey to explore the possibilities of AI and contribute to a future where technology serves humanity's best interests.
                </div>
            </div>

            <span className="flex justify-end">
                <img src='./img/virus.png' alt="virus" className="w-16 h-16"/>
            </span>

                
            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center mb-8">
                <h1 className="font-pressStart text-xl mb-2 text-green-500 underline flex justify-between align-text-bottom">Our History</h1>
                <p className="text-white text-lg font-sans">
                    <span className="text-yellow-400">AICommunity IITB</span> was founded with the vision of creating a collaborative environment for <span className="underline">students</span> passionate about artificial intelligence.Our founding members are <Link className="underline" to="https://www.linkedin.com/in/nikhiltiwari-iitb/" >Nikhil Tiwari</Link>, <Link className="underline" to="https://www.linkedin.com/in/vishruth-n/" >Vishruth N.</Link>  they had a vision to build a community…. then the ‘’torch’’ was passed down to <Link className="underline" to="https://linkedin.com/in/navyanshmahla" >Navyansh Mahla</Link> and <Link className="underline" to="https://www.linkedin.com/in/amankhande/" >Aman Khande</Link> now finally to us… keeping the original ideas and thought process alive…
                    </p>
                    <ol className="list-decimal mt-4">
                    {historyPoints.map((point, index) => (
                        <li key={index} className="text-green-500 mt-4">
                        <p className="text-white"><span className="text-xl text-green-500">{point.title}:</span> {point.content}</p>
                        </li>
                    ))}
                    </ol>
                    <div className="text-green-500 mt-6">
                    Our journey has been marked by a passion for AI and a commitment to excellence. We are proud of our history and excited about the future as we continue to advance AI knowledge and its applications.
                    </div>
            </div>

            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center mb-8">
                <h1 className="font-pressStart text-xl mb-2 text-green-500 underline flex justify-between align-text-bottom">Events</h1>
                <div className="text-white text-2xl font-sans">Clash of T-AI-TANS hackathon</div>
            </div>


            {/* <div className="md:w-full w-[100vw] h-auto rounded-lg flex flex-col bg-opacity-50 pr-4 md:p-8 justify-center mb-8">
                <h1 className="font-pressStart text-xl mb-2 text-green-500 underline flex justify-between align-text-bottom">Resources</h1>
                <div className="text-white text-lg font-sans">
                <div className="p-8">
                    <ul className="list-disc ml-6">
                        <li className="mb-2 underline">
                        Foundational Concepts
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            Introduction to Artificial Intelligence
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Overview of AI and its history</li>
                                <li className="mb-1">Key concepts and terminology</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            Machine Learning Basics
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Types of machine learning (supervised, unsupervised, reinforcement)</li>
                                <li className="mb-1">Common algorithms and techniques</li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="mb-2 underline">
                        Programming and Tools
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            Programming Languages for AI
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Python for AI and machine learning</li>
                                <li className="mb-1">R and other languages commonly used in AI</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            AI Development Tools and Frameworks
                            <ul className="list-circle ml-6">
                                <li className="mb-1">TensorFlow, PyTorch, and other popular frameworks</li>
                                <li className="mb-1">Libraries for data manipulation and visualization (e.g., NumPy, Pandas, Matplotlib)</li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="mb-2 underline">
                        Advanced Topics
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            Deep Learning
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Neural networks and architectures (CNNs, RNNs, LSTMs)</li>
                                <li className="mb-1">Techniques for training deep models</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            Natural Language Processing (NLP)
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Text analysis and processing</li>
                                <li className="mb-1">Sentiment analysis, language translation, and chatbots</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            Computer Vision
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Image recognition and classification</li>
                                <li className="mb-1">Object detection and image generation</li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="mb-2 underline">
                        Specialized Areas
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            Reinforcement Learning
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Concepts and applications</li>
                                <li className="mb-1">Key algorithms (Q-learning, Deep Q-Networks)</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            AI in Robotics
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Integration of AI in robotic systems</li>
                                <li className="mb-1">Applications and challenges in robotics</li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="mb-2 underline">
                        Practical Applications
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            AI in Healthcare
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Diagnosis, treatment recommendations, and personalized medicine</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            AI in Finance
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Algorithmic trading, fraud detection, and risk assessment</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            AI in Autonomous Vehicles
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Self-driving technology and its challenges</li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="mb-2 underline">
                        Ethical and Societal Considerations
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            Ethics in AI
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Fairness, transparency, and accountability in AI systems</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            Impact of AI on Society
                            <ul className="list-circle ml-6">
                                <li className="mb-1">AI’s influence on job markets and privacy concerns</li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="mb-2 underline">
                        Career and Professional Development
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            Building a Career in AI
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Skills and qualifications needed for AI roles</li>
                                <li className="mb-1">Career paths and job opportunities</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            Networking and Community Building
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Joining AI communities and attending conferences</li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="mb-2 underline">
                        Tutorials and Courses
                        <ul className="list-decimal ml-6">
                            <li className="mb-1">
                            Online AI Courses
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Recommendations for MOOCs and tutorials</li>
                            </ul>
                            </li>
                            <li className="mb-1">
                            Hands-on Projects
                            <ul className="list-circle ml-6">
                                <li className="mb-1">Project ideas for practical experience</li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>

                </div>
            </div> */}
            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center mb-8">
                <h1 className="font-pressStart text-xl mb-2 text-green-500 underline flex justify-between align-text-bottom">
                    Gallery
                </h1>
                <div className="flex flex-col md:flex-row text-wrap  text-white p-8 align-middle gap-4">
                    {galleryImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className=" md:w-1/3 md:h-1/3 rounded-lg"
                    />
                    ))}
                </div>
            </div>
        </div>

    </div>
    );
}



const missionPoints = [
    {
      title: "Blogs and Technical Reports",
      content: "We document our work meticulously and maintain a systematic pipeline. Regular blogs keep everyone updated on the latest AI and machine learning trends, ensuring continuous engagement and knowledge sharing."
    },
    {
      title: "Collaboration and Innovation",
      content: "We encourage collaboration among our members to spark creativity and innovation. By connecting students, professionals, and enthusiasts, we create a space where ideas can be shared, and projects can flourish."
    },
    {
      title: "Hackathons",
      content: "We collaborate with partners to host hackathons of varying difficulty levels, making them accessible for everyone to engage and reach effective solutions. Additionally, we actively participate in many high-prep hackathons."
    },
    {
      title: "Supportive Network",
      content: "Our community is a supportive network where members can share challenges, celebrate achievements, and find mentorship. We believe in building strong connections that foster personal and professional growth."
    }
  ];    


  const historyPoints = [
    {
      title: "Formation and Early Beginnings",
      content: "The community was established as a small group focused on AI study sessions and workshops. Our founding members were driven by a shared enthusiasm for AI and a desire to explore its applications across various fields."
    },
    {
      title: "Expansion and Formal Recognition",
      content: "As interest in AI grew, our community expanded its activities and gained official recognition from the institute. We began organizing guest lectures, hackathons, and collaborative projects that attracted participants from diverse academic backgrounds."
    },
    {
      title: "Continuing Growth and Innovation",
      content: "Today, the AI Community, IITB continues to grow and evolve. We remain committed to fostering a supportive environment where members can learn, innovate, and collaborate. Our annual events, such as AI symposiums and workshops, have become key highlights in the institute’s calendar."
    }
  ];

  const galleryImages = [
    { src: img1, alt: "img1" },
    { src: img2, alt: "img2" },
    { src: img3, alt: "img3" }
  ];