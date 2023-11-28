import React from 'react';

const Profile = () => {
    const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];
    const education = [
        { school: 'University of XYZ', degree: 'Bachelor of Science in Computer Science', year: '2018 - 2022' },
        { school: 'ABC High School', degree: 'High School Diploma', year: '2014 - 2018' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-blue-500 py-6">
                <div className="container mx-auto text-white flex items-center">
                    <img
                        className="w-16 h-16 rounded-full mr-4"
                        src="profile-picture.jpg"
                        alt="Profile"
                    />
                    <div>
                        <h1 className="text-2xl font-semibold">John Doe</h1>
                        <p className="text-sm">Software Engineer at ABC Corp</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto mt-6 p-4">
                {/* Profile Summary */}
                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Profile Summary</h2>
                    <p>Experienced software engineer with a passion for building scalable web applications...</p>
                </div>

                {/* Skills */}
                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Skills</h2>
                    <ul className="list-disc pl-6">
                        {skills.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>



                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Education</h2>
                    <ul className="list-disc pl-6">
                        {education.map(edu => (
                            <li key={edu.school}>
                                <p>{edu.school}</p>
                                <p className="text-sm">{edu.degree}</p>
                                <p className="text-sm">{edu.year}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                


                
           
            </main >

    {/* Footer */ }
    < footer className = "bg-gray-200 py-4 text-center" >
        <p className="text-sm text-gray-600">© 2023 LinkedIn. All rights reserved.</p>
      </footer >
    </div >
  );
};

export default Profile;
