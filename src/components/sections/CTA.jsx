import video5 from '../../assets/videos/video5.mp4';

function MeteorSection() {
  return (
    <section className="relative h-96">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={video5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Dive Into Infinity ∞</h2>
          <a 
            href="/topics" 
            className="inline-block bg-primary hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-colors border-2 border-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default MeteorSection;