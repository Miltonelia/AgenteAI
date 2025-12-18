export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-8 text-center">
        <h1 className="text-5xl font-bold mb-4">AgenteAI</h1>
        <p className="text-2xl mb-8">Tu agente de voz en español con Grok Voice</p>
        <p className="text-xl mb-8">Habla de TODO: crypto, amor, ciencia, memes, yields...</p>
      </header>

      <main className="max-w-4xl mx-auto px-8">
        <div className="bg-gray-900 rounded-xl p-8 mb-12 text-center">
          <h2 className="text-3xl mb-6">Prueba 1 minuto GRATIS</h2>
          <audio controls className="mx-auto mb-6">
            <source src="https://tu-demo-voice.mp3" type="audio/mpeg" />
          </audio>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-xl px-8 py-4 rounded-lg">
            Hablar con AgenteAI ahora ($0.10/min)
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl mb-4">Precios simples</h3>
            <ul className="text-left">
              <li>$10 = 100 minutos</li>
              <li>$20 = 250 minutos (bonus)</li>
              <li>Paga con tarjeta o crypto</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl mb-4">Habla de TODO</h3>
            <p>Trading, DeSci, amor, chismes, filosofía, memes... sin límites.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl mb-4">Tecnología</h3>
            <p>Grok Voice API + Nevermined Pay</p>
            <p>Monetizado per-minuto</p>
          </div>
        </div>

        <div className="text-center">
          <a href="https://nevermined.app/tu-agente-link" className="bg-green-600 hover:bg-green-700 text-white text-xl px-8 py-4 rounded-lg inline-block">
            Comprar créditos ahora
          </a>
        </div>
      </main>

      <footer className="p-8 text-center text-gray-500 mt-16">
        <p>@AgenteAI en X • .agente TLD • Powered by Grok & Nevermined</p>
      </footer>
    </div>
  )
}
