'use client';

export default function Footer() {
  return (
    <footer className="bg-black py-24 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          
          {/* Left Column */}
          <div className="space-y-12">
            <div className="flex flex-col space-y-4">
              <a href="/#men" className="text-2xl font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest">MEN</a>
              <a href="/#women" className="text-2xl font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest">WOMEN</a>
              <a href="/#hairless" className="text-2xl font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest">HAIRLESS</a>
              <a href="/#social" className="text-2xl font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest">SOCIAL</a>
            </div>
            
            <div className="flex flex-col space-y-2">
              <a href="/impressum" className="text-xs text-white/60 hover:text-white transition-colors uppercase tracking-widest">IMPRESSUM</a>
              <a href="/datenschutzerklarung" className="text-xs text-white/60 hover:text-white transition-colors uppercase tracking-widest">DATENSCHUTZERKLÄRUNG</a>
              <a href="#" className="text-xs text-white/60 hover:text-white transition-colors uppercase tracking-widest">COOKIE-RICHTLINIE (EU)</a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white uppercase tracking-widest">NEED FAST HELP?</h3>
            
            <div className="space-y-8">
              {/* <div>
                <p className="text-xs text-white/60 uppercase tracking-widest mb-2">E-MAIL</p>
                <a href="mailto:info@trygmbh.de" className="text-xl font-bold text-white hover:text-white/80 transition-colors">info@almaz.de</a>
              </div> */}
              
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest mb-2">TELEFON</p>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-white">Festnetz: 07131 2799722</p>
                  <p className="text-xl font-bold text-white">Mobil: 015906352885</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-8">
            <p className="text-xs text-white/60 uppercase tracking-widest">LOCATION</p>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-white uppercase tracking-widest">Königsberger</p>
              <p className="text-2xl font-bold text-white uppercase tracking-widest"> Str.</p>
              <p className="text-2xl font-bold text-white uppercase tracking-widest">14, 71034</p>
              <p className="text-2xl font-bold text-white uppercase tracking-widest">Böblingen</p>
            </div>
            <a href="https://maps.app.goo.gl/kenmBggtubyK8gZz6" target="blank" className="inline-block bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2 text-xs font-bold uppercase tracking-widest">
              ROUTE STARTEN
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-white/60 uppercase tracking-widest">
            © 2026 ALMAZ HAIRCUT | <span className="text-[#3b82f6]">MADE WITH TAHA MEHDI</span>
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border border-white/60 text-white/80 hover:text-white hover:border-white transition-colors px-6 py-3 text-sm uppercase tracking-widest"
          >
            GO ON TOP
          </button>
        </div>

      </div>
    </footer>
  );
}
