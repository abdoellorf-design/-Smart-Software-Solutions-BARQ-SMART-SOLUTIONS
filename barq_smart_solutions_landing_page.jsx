export default function BarqLandingPage() {
  const services = [
    {
      title: 'Restaurant Systems',
      desc: 'Smart POS systems, order management, delivery integration, and table management solutions.',
    },
    {
      title: 'Web Development',
      desc: 'Professional websites and modern web applications built for speed and performance.',
    },
    {
      title: 'Mobile Applications',
      desc: 'Android & iOS applications with modern UI/UX and scalable architecture.',
    },
    {
      title: 'Business Automation',
      desc: 'Automate workflows, analytics dashboards, and internal business systems.',
    },
  ];

  const projects = [
    {
      title: 'Restaurant Dashboard',
      category: 'POS System',
    },
    {
      title: 'Delivery Tracking App',
      category: 'Mobile App',
    },
    {
      title: 'Company Portfolio Website',
      category: 'Web Development',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-20 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
              ⚡ Smart Software Solutions
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              BARQ
              <span className="block text-cyan-400">SMART SOLUTIONS</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 max-w-xl mb-8">
              We build powerful software systems, restaurant management platforms,
              websites, and mobile applications designed to help businesses grow faster.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
                Get Started
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                View Projects
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Clients</p>
                    <h3 className="text-3xl font-bold">24+</h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-cyan-400 flex items-center justify-center text-black text-2xl font-bold">
                    ⚡
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
                    <h4 className="text-2xl font-bold mb-2">99%</h4>
                    <p className="text-gray-400 text-sm">Client Satisfaction</p>
                  </div>

                  <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
                    <h4 className="text-2xl font-bold mb-2">15+</h4>
                    <p className="text-gray-400 text-sm">Projects Delivered</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 text-black">
                  <p className="font-semibold mb-2">Modern Digital Experience</p>
                  <h3 className="text-3xl font-black leading-tight">
                    Websites + Apps + Systems
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-cyan-400 font-semibold mb-3">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-5xl font-black">
              What We Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-2xl mb-6">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 lg:px-20 py-20 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-cyan-400 font-semibold mb-3">PORTFOLIO</p>
              <h2 className="text-4xl lg:text-5xl font-black">
                Featured Projects
              </h2>
            </div>

            <button className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition w-fit">
              Explore More
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-[30px] overflow-hidden border border-white/10 bg-black/40"
              >
                <div className="h-64 bg-gradient-to-br from-cyan-400/20 to-blue-700/20 flex items-center justify-center text-7xl">
                  💻
                </div>

                <div className="p-7">
                  <p className="text-cyan-400 text-sm mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <button className="text-cyan-300 group-hover:translate-x-2 transition">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-700 rounded-[40px] p-10 lg:p-16 text-center text-black">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            Ready To Build
            <span className="block">Your Next Project?</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto mb-8 font-medium">
            Let Barq Smart Solutions transform your business with modern software solutions and premium digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-black text-white font-bold hover:scale-105 transition">
              Contact Us
            </button>

            <button className="px-8 py-4 rounded-2xl border border-black/20 hover:bg-black/10 transition font-semibold">
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-20 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-cyan-400">BARQ</h3>
            <p className="text-gray-500 mt-2">Smart Software Solutions</p>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
