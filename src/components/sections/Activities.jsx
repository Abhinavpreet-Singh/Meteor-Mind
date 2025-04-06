import ap1 from '../../assets/images/ap1.jpg';
import ap2 from '../../assets/images/ap2.jpg';
import ap3 from '../../assets/images/ap3.jpg';
import ap4 from '../../assets/images/ap4.jpg';

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      img: ap1,
      title: "Latest Quiz: Rocket Madness!",
      date: "September 24, 2024",
      content: "Swoop into our latest quiz about Rockets! Are you ready with your seat belts for a very expeditious escapade?",
      link: "https://blogs.nasa.gov/"
    },
    {
      id: 2,
      img: ap2,
      title: "Weekly Board: Top Scorers!",
      date: "September 20, 2024",
      content: "Check out the top scorers! Are you ready to topple them off? Be the victor and receive personalized goodies.",
      link: "https://blogs.nasa.gov/"
    },
    {
      id: 3,
      img: ap3,
      title: "Beyond Cosmos!",
      date: "September 18, 2024",
      content: "Let's talk about the things beyond our intellect. Get ready to meet Dr. AK and Dr. APS from ISRO. Registrations Open!",
      link: "https://blogs.nasa.gov/"
    },
    {
      id: 4,
      img: ap4,
      title: "Be the curator of our quizzes!",
      date: "September 10, 2024",
      content: "Buckle up your thoughts and let them float! Help us create the ultimate quiz experience!",
      link: "https://blogs.nasa.gov/"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Meteor Mind Latest News~!!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 border border-gray-200">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary hover:bg-opacity-80 text-white font-bold py-2 rounded transition-colors"
                >
                  Launch!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;