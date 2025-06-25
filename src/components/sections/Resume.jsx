import React from "react";
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react";

const Resume = () => {
  const handleDownloadResume = () => {
    const resumeUrl = process.env.REACT_APP_RESUME_URL || "/assets/resume.pdf";
    try {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "resume.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download resume:", error);
      alert("Sorry, the resume could not be downloaded. Please try again later.");
    }
  };

  return (
    <section
      id="resume"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1
            id="resume-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            John Doe
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <a
              href="mailto:john.doe@example.com"
              className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              aria-label="Email John Doe"
            >
              <Mail size={16} />
              john.doe@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              aria-label="Call John Doe"
            >
              <Phone size={16} />
              +1 (234) 567-890
            </a>
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              New York, NY
            </span>
            <a
              href="https://johndoe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              aria-label="Visit John Doe's website"
            >
              <Globe size={16} />
              johndoe.com
            </a>
          </div>
          <button
            onClick={handleDownloadResume}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
            aria-label="Download resume PDF"
          >
            <Download size={16} />
            Download Resume
          </button>
        </header>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                B.S. in Computer Science
              </h3>
              <p className="text-gray-600">University of Example, New York, NY</p>
              <p className="text-gray-500">2016 - 2020</p>
              <p className="text-gray-600 mt-1">
                Graduated with Honors, GPA: 3.8/4.0
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Work Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Software Engineer
              </h3>
              <p className="text-gray-600">Tech Corp, New York, NY</p>
              <p className="text-gray-500">2021 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                <li>
                  Developed and maintained web applications using React and
                  Node.js.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver scalable
                  solutions.
                </li>
                <li>
                  Optimized application performance, reducing load times by 30%.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Junior Developer
              </h3>
              <p className="text-gray-600">Startup Inc., New York, NY</p>
              <p className="text-gray-500">2020 - 2021</p>
              <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                <li>Built responsive front-end interfaces with HTML, CSS, and JavaScript.</li>
                <li>Contributed to the development of RESTful APIs.</li>
                <li>Participated in code reviews and agile workflows.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Programming Languages
              </h3>
              <p className="text-gray-600">
                JavaScript, TypeScript, Python, Java
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Frameworks & Tools
              </h3>
              <p className="text-gray-600">
                React, Node.js, Tailwind CSS, Git
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Databases</h3>
              <p className="text-gray-600">MongoDB, PostgreSQL</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Other</h3>
              <p className="text-gray-600">
                Agile Methodologies, CI/CD, Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;