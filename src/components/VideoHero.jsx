export default function VideoHero() {
  return (
    <div className="w-full flex justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%'
            }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ps8wh2SY9LA?si=6yOWF8b52IaxFeeB&start=8"
            title="YouTube video player"
            frameBorder="0"
            sandbox="allow-presentation allow-same-origin allow-scripts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}