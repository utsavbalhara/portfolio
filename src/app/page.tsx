import { CustomScrollbar } from "@/components/ui/custom-scrollbar";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";

export default function Home() {
  return (
    <div className="relative">
      <CustomScrollbar />

      <div className="min-h-[300vh] w-full relative">
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.png)'
          }}
        />

        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-5xl mx-auto p-4 items-center">
            <div className="flex p-4 text-2xl pt-14 w-[700px] mx-auto h-[500px] flex-col items-start justify-end pointer-events-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Utsav Balhara
              </h1>
              <TextGradientScroll
                text="I'm a developer that loves building mobile and web apps that people don't hate. I like Swift & React/Next.js but also work with Kotlin & Python. I hate bad design and love consuming questionable amounts of coffee."
                className="text-white text-lg md:text-xl leading-relaxed"
                textOpacity="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
