import backgroundVideo from '../../assets/videos/video4.mp4';

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Meteor Mind</h1>
        <p className="text-xl md:text-2xl mb-8">Where Curiosity Meets the Cosmos!</p>
        <a 
          href="/topics" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Start Quiz
        </a>
      </div>
    </section>
  );
}

export default HeroSection;