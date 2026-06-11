export default function SkyXMusicWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20 blur-3xl"></div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-xl font-bold shadow-lg">
            🎵
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wide">SKY x MUSIC</h1>
            <p className="text-sm text-gray-400">Discord Music Bot</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#dashboard" className="hover:text-cyan-400 transition">Dashboard</a>
          <a href="#commands" className="hover:text-cyan-400 transition">Commands</a>
        </nav>

        <div className="flex gap-3">
          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
            className="px-5 py-2 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-lg"
          >
            Add Bot
          </a>

          <a
            href="https://discord.com/login"
            className="px-5 py-2 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            Login
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-cyan-300 mb-6">
            Premium Discord Music Experience
          </div>

          <h2 className="text-6xl font-black leading-tight mb-6">
            Elevate Your <span className="text-cyan-400">Discord</span> Music Experience
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
            High-quality audio streaming, ultra-fast playback, smart queue management, 24/7 music, and a modern dashboard for complete control.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition text-lg font-bold shadow-2xl"
            >
              Invite SKY x MUSIC
            </a>

            <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition text-lg">
              Explore Features
            </button>
          </div>

          <div className="flex gap-8 mt-12 text-center">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">1M+</h3>
              <p className="text-gray-400">Songs Played</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">10K+</h3>
              <p className="text-gray-400">Servers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">99.9%</h3>
              <p className="text-gray-400">Uptime</p>
            </div>
          </div>
        </div>

        {/* Music Card */}
        <div className="relative">
          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold">Now Playing</h3>
                <p className="text-gray-400">SKY x MUSIC Player</p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-2xl">
                🎶
              </div>
            </div>

            <div className="bg-black/40 rounded-3xl p-6 border border-white/10">
              <div className="w-full h-60 rounded-3xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 mb-6 flex items-center justify-center text-7xl shadow-inner">
                🎧
              </div>

              <h4 className="text-2xl font-bold mb-2">Night Vibes Mix</h4>
              <p className="text-gray-400 mb-6">Streaming with crystal-clear quality</p>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-6">
                <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </div>

              <div className="flex justify-center gap-5 text-3xl">
                <button className="hover:scale-110 transition">⏮️</button>
                <button className="w-16 h-16 rounded-full bg-cyan-400 text-black font-bold hover:scale-110 transition shadow-lg">
                  ▶
                </button>
                <button className="hover:scale-110 transition">⏭️</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-5">Powerful Features</h2>
          <p className="text-gray-400 text-lg">Everything you need for the ultimate music experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🎵",
              title: "HQ Audio",
              desc: "Enjoy smooth and high-quality music streaming without lag.",
            },
            {
              icon: "⚡",
              title: "Fast Playback",
              desc: "Ultra-fast response time with optimized music loading.",
            },
            {
              icon: "🔁",
              title: "Loop & Queue",
              desc: "Manage playlists, queue songs, and loop tracks easily.",
            },
            {
              icon: "🌐",
              title: "Dashboard",
              desc: "Control your server music settings from a modern web panel.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:bg-white/10 transition shadow-xl"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl font-black mb-6">Modern Dashboard</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Users can log in with Discord, manage their servers, configure music settings, and invite the bot directly from your website.
            </p>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>✅ Discord OAuth2 Login</li>
              <li>✅ Server Selection</li>
              <li>✅ Music Controls</li>
              <li>✅ Role & Permission Settings</li>
              <li>✅ Premium Features Panel</li>
            </ul>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Dashboard</h3>
              <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-500/20">
                Online
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
                <div className="flex justify-between mb-2">
                  <span>Music Volume</span>
                  <span>80%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-cyan-400"></div>
                </div>
              </div>

              <div className="bg-black/30 rounded-2xl p-5 border border-white/10 flex items-center justify-between">
                <span>24/7 Mode</span>
                <button className="px-5 py-2 rounded-full bg-cyan-400 text-black font-bold">
                  Enabled
                </button>
              </div>

              <div className="bg-black/30 rounded-2xl p-5 border border-white/10 flex items-center justify-between">
                <span>Autoplay</span>
                <button className="px-5 py-2 rounded-full bg-purple-500 text-white font-bold">
                  Active
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commands */}
      <section id="commands" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Popular Commands</h2>
          <p className="text-gray-400 text-lg">Easy-to-use music commands for everyone.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/play",
            "/skip",
            "/queue",
            "/pause",
            "/resume",
            "/loop",
          ].map((cmd, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{cmd}</h3>
              <p className="text-gray-400">Simple and powerful music control command.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-8 py-24 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-16 backdrop-blur-xl shadow-2xl">
          <h2 className="text-5xl font-black mb-6">Ready to Power Your Server?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Invite SKY x MUSIC today and enjoy powerful music streaming with a stunning dashboard.
          </p>

          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
            className="inline-block px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition text-xl font-black shadow-2xl"
          >
            Add SKY x MUSIC
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 SKY x MUSIC • All Rights Reserved
      </footer>
    </div>
  );
}
