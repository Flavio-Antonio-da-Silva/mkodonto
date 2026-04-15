export default function VideoHero() {
  return (
    <div className="w-full flex justify-center py-12 px-4">
      <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Ps8wh2SY9LA?si=-RgIX9c6cL8I3Uqg&start=8"
          title="MK Odonto - Vídeo Principal"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}