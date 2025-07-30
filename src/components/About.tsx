import React from 'react';
import { GraduationCap, Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const qualifications = [
    'BA LL.B from DDU University Gorakhpur',
    'Bar Council of India Certified',
  ];

  const achievements = [
    { icon: Award, title: 'Excellence Award', desc: 'Outstanding Legal Service 2023' },
    { icon: Users, title: '10+ Clients', desc: 'Successfully Represented' },
    { icon: GraduationCap, title: 'Expert Speaker', desc: 'Legal Seminars & Workshops' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg"
                alt="Advocate Singh"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            <div className="absolute top-6 -left-6 w-24 h-24 bg-blue-800/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 left-1/3 w-32 h-32 bg-amber-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-sm tracking-wide uppercase">About Advocate</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Advocate Gaurav Mishra
              </h2>
              <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 2+ years of distinguished legal practice, Advocate Gaurav Mishra has established himself as one of the most trusted legal professionals in the region. His unwavering commitment to justice and client success has earned him recognition across various courts.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Specializing in criminal law, family disputes, and property matters, he brings a wealth of experience and a strategic approach to every case. His dedication to understanding client needs and providing personalized legal solutions sets him apart in the legal fraternity.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualifications & Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <achievement.icon className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;