function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-white text-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-lg border-2 border-primary transform hover:scale-105 transition-transform">
            <h2 className="text-5xl font-bold mb-2">1000+</h2>
            <p className="text-xl">Quizzes Taken</p>
          </div>
          <div className="p-8 rounded-lg border-2 border-primary transform hover:scale-105 transition-transform">
            <h2 className="text-5xl font-bold mb-2">500+</h2>
            <p className="text-xl">Galactic Questions</p>
          </div>
          <div className="p-8 rounded-lg border-2 border-primary transform hover:scale-105 transition-transform">
            <h2 className="text-5xl font-bold mb-2">99%</h2>
            <p className="text-xl">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;