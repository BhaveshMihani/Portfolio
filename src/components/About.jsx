import React from "react";

const About = () => {
  return (
    <>
      <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p className="text-justify mb-6">
            Hello, I'm Bhavesh, a passionate Web developer with a keen eye for MERN Stack. 
            With a background in BCA, I strive to create impactful and visually stunning 
            software solutions that leave a lasting impression.
          </p>

          <section className="mb-8">
            <h2 className="text-green-600 font-semibold text-xl mb-3">Education & Training</h2>
            <ul className="list-disc pl-5 space-y-2 text-[17px]">
              <li>Bachelor of Computer Applications (BCA), C. B. Patel College Affiliated with VNSGU, 2022 - 25</li>
              <li>Higher Secondary Certificate (HSC), Sindhu Seva Samiti School, Completed in 2022</li>
              <li>Secondary School Certificate (SSC), Sindhu Seva Samiti School, Completed in 2020</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-green-600 font-semibold text-xl mb-3">Skills & Expertise</h2>
            <ul className="list-disc pl-5 space-y-2 text-[17px]">
              <li>AWS: EC2, IAM, VPC, S3, RDS, DynamoDB, CloudWatch, Lambda, CloudTrail, Auto Scaling, Load Balancing</li>
              <li>Languages: C, C++, VB.NET, HTML, Python, Java</li>
              <li>Web Technologies: React JS, jQuery, Bootstrap</li>
              <li>Database Management: SQL, NoSQL</li>
              <li>Developer Tools: Git, VS Code, Visual Studio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-green-600 font-semibold text-xl mb-3">Professional Experience</h2>
            <ul className="list-disc pl-5 space-y-2 text-[17px]">
              <li>
                <strong>Back Office Executive, Unique World Placement</strong> 
                <ul className="list-disc pl-5 mt-2 space-y-2 text-[17px]">
                  <li>Generating leads via Message Shooting, coordinating with clients, handling HR requirements, and managing back office</li>
                  <li>Client Coordination</li>
                  <li>Human Resource Management</li>
                  <li>Administrative Support</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-green-600 font-semibold text-xl mb-3">Achievements & Awards</h2>
            <ul className="list-disc pl-5 space-y-2 text-[17px]">
              <li>Designed and deployed a two-tier web application on AWS using best practices</li>
              <li>Developed and deployed an innovative audio streaming and real-time chatting platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-green-600 font-semibold text-xl mb-3">Mission Statement</h2>
            <p className="text-justify">
              My mission is to leverage my skills and creativity to deliver innovative AI-based solutions 
              that exceed client expectations and contribute positively to the digital landscape. 
              I am committed to continuous learning and growth, always seeking new challenges and 
              opportunities to expand my horizons.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
