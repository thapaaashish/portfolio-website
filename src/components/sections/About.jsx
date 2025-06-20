import React from "react";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "Express.js",
    "Firebase",
    "Figma",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Hi, I'm Aashish Thapa, a passionate and dedicated Computer
                Science student currently pursuing my BSc (Hons) in Computer
                Science. I specialize in building modern, responsive, and
                user-friendly web applications using the MERN Stack. 
              </p>
              <p className="mb-6">
                Over the past few years, I’ve
                developed multiple websites and applications—ranging from
                personal projects to academic assignments—that focus on both
                functionality and design. I enjoy turning complex problems into
                simple, elegant solutions, and I’m always eager to learn and
                apply new technologies.
              </p>
              <p className="mb-6">
                I’m particularly interested in
                full-stack development, UI/UX design, and building digital
                products that solve real-world problems. When I’m not coding,
                you’ll often find me exploring new tools, reading tech blogs, or
                refining designs. Let’s build something amazing together!
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dwhsjkzrn/image/upload/v1742663452/HomeFinder/profile_picture/users/IMG_7537_bxcj2o.jpg"
                  alt="Profile"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
