import { Link } from 'react-router-dom';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Rahul Sharma',
      position: 'Founder & CEO',
      bio: 'Rahul has over 15 years of experience in retail and e-commerce. He founded Serconst with a vision to create a premium shopping destination for fashion enthusiasts.',
      image: '/src/assets/team-1.jpg'
    },
    {
      name: 'Priya Patel',
      position: 'Creative Director',
      bio: 'With a background in fashion design, Priya leads our creative team and ensures that Serconst stays ahead of the latest trends and styles.',
      image: '/src/assets/team-2.jpg'
    },
    {
      name: 'Amit Kumar',
      position: 'Head of Operations',
      bio: 'Amit oversees our day-to-day operations, ensuring smooth logistics, timely deliveries, and maintaining our high standards of customer service.',
      image: '/src/assets/team-3.jpg'
    },
    {
      name: 'Neha Gupta',
      position: 'Marketing Director',
      bio: 'Neha brings her expertise in digital marketing to help Serconst connect with fashion-conscious consumers across India.',
      image: '/src/assets/team-4.jpg'
    }
  ];
  
  // Company milestones
  const milestones = [
    {
      year: '2015',
      title: 'Founded in Mumbai',
      description: 'Serconst was established with a small team of fashion enthusiasts.'
    },
    {
      year: '2017',
      title: 'Expanded Product Range',
      description: 'Added accessories and footwear to our clothing collection.'
    },
    {
      year: '2019',
      title: 'Nationwide Shipping',
      description: 'Expanded our logistics to deliver to all major cities across India.'
    },
    {
      year: '2020',
      title: 'Mobile App Launch',
      description: 'Launched our mobile shopping app for iOS and Android.'
    },
    {
      year: '2022',
      title: 'Sustainability Initiative',
      description: 'Introduced eco-friendly packaging and sustainable product lines.'
    },
    {
      year: '2023',
      title: 'One Million Customers',
      description: 'Celebrated serving our one millionth customer.'
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-6 bg-gray-200">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80 flex items-center">
              <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-2xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Our Story
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-6">
                    Discover the journey behind The Indian Garment Company and our mission to redefine fashion in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Mission Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            At The Indian Garment Company, our mission is to provide high-quality, stylish clothing that celebrates the rich textile heritage of India while embracing contemporary global trends.
          </p>
          <p className="text-lg text-gray-700">
            We believe that fashion should be accessible, sustainable, and expressive. Our curated collections are designed to help our customers look and feel their best, without compromising on quality or values.
          </p>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-600">
              We are committed to excellence in every stitch, fabric, and finish. Our products undergo rigorous quality checks to ensure they meet our high standards.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We're dedicated to reducing our environmental footprint through eco-friendly materials, ethical manufacturing, and sustainable business practices.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
            <p className="text-gray-600">
              We celebrate diversity and design our collections to be inclusive, offering a wide range of sizes, styles, and price points to cater to all customers.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Journey Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 md:-translate-y-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6 md:w-1/2">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                      <h3 className="text-xl font-bold ml-2">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Meet Our Team Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind The Indian Garment Company who work tirelessly to bring you the best in fashion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                {/* Placeholder for team member image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "I've been shopping with Serconst for over a year now, and I'm consistently impressed by the quality of their clothes and the excellent customer service. Their attention to detail is remarkable."
            </p>
            <div className="flex items-center">
              <div className="mr-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>
              <div>
                <h4 className="font-medium">Ananya Desai</h4>
                <p className="text-gray-500 text-sm">Mumbai</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "What sets Serconst apart is their commitment to sustainability. I love that I can shop fashionable clothes while knowing they're made ethically. The packaging is also eco-friendly!"
            </p>
            <div className="flex items-center">
              <div className="mr-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>
              <div>
                <h4 className="font-medium">Vikram Singh</h4>
                <p className="text-gray-500 text-sm">Delhi</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "The range of sizes and styles available at Serconst is impressive. As someone who often struggles to find clothes that fit well, I appreciate their inclusive approach to fashion."
            </p>
            <div className="flex items-center">
              <div className="mr-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>
              <div>
                <h4 className="font-medium">Meera Reddy</h4>
                <p className="text-gray-500 text-sm">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-primary rounded-lg shadow-sm p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Fashion Journey</h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Discover our latest collections and be part of our growing community of fashion enthusiasts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/shop" className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Shop Now
          </Link>
          <Link to="/contact" className="bg-transparent text-white border border-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;