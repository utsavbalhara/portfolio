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
          About
        </p>
      </div>
    </div>
  );
}
