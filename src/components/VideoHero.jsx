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
            src="https://player.vimeo.com/video/1184340734?badge=0&autopause=0&player_id=0&app_id=58479&loop=1"
            title="MKODONTO"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}