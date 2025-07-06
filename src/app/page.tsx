export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: 'url(/background.png)'
      }}
    >
      <div className="flex-1 max-w-2xl p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your Name
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          I build useful (sometimes cool) stuff- mostly with Python, Swift,
          Kotlin, and React/Next.js I ship products that people don&apos;t hate,
          occasionally break things in interesting ways, and consume a
          questionable amount of coffee in the process.
        </p>
      </div>
    </div>
  );
}
