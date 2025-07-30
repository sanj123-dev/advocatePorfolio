import React from 'react';
import { Scale, Users, Home, Briefcase, FileText, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: 'Criminal Law',
      description: 'Expert defense in criminal cases including theft, assault, fraud, and other criminal charges.',
      features: ['Bail Applications', 'Trial Representation', 'Appeals', 'Legal Consultation'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Comprehensive family legal services including divorce, custody, and matrimonial disputes.',
      features: ['Divorce Proceedings', 'Child Custody', 'Maintenance Cases', 'Domestic Violence'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Home,
      title: 'Property Law',
      description: 'Complete property legal services covering real estate transactions and property disputes.',
      features: ['Property Registration', 'Title Verification', 'Dispute Resolution', 'Documentation'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description: 'Business legal services including company formation, contracts, and corporate compliance.',
      features: ['Company Registration', 'Contract Drafting', 'Compliance', 'Mergers & Acquisitions'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Civil Litigation',
      description: 'Civil court representation for various disputes including contracts and property matters.',
      features: ['Contract Disputes', 'Tort Claims', 'Injunctions', 'Damages Recovery'],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Constitutional Law',
      description: 'Expert guidance on constitutional matters and fundamental rights protection.',
      features: ['Fundamental Rights', 'Writ Petitions', 'PIL', 'Constitutional Disputes'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm tracking-wide uppercase">Our Services</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Legal Expertise Across Multiple Domains
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal services tailored to meet your specific needs with professional excellence and dedication
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <service.icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105`}
                >
                  Get Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't navigate legal challenges alone. Get expert guidance from an experienced advocate.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;