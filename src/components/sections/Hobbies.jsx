import video2 from '../../assets/videos/video2.mp4';

function VideoSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto">
        <div className="video-container w-full max-w-4xl mx-auto">
          <video 
            width="100%" 
            height="100%" 
            autoPlay 
            loop 
            muted
            className="rounded-lg shadow-2xl"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;