'use client'

import React, { Suspense } from 'react'

function VideoSkeleton() {
  return (
    <div className="w-full flex justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <div className="aspect-video w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg overflow-hidden shadow-lg animate-pulse" />
      </div>
    </div>
  )
}

function VideoHeroContent({
  videoId = '1184340734',
  title = 'MKODONTO',
  aspectRatio = 'video',
  autoplay = false,
  loop = true,
  className = '',
}) {
  const aspectClass = aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'
  const autopauseParam = autoplay ? '0' : '1'
  const loopParam = loop ? '1' : '0'

  return (
    <div className={`w-full flex justify-center py-12 px-4 ${className}`}>
      <div className="w-full max-w-2xl">
        <div className={`relative w-full rounded-lg overflow-hidden shadow-lg ${aspectClass}`}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=${autopauseParam}&player_id=0&app_id=58479&loop=${loopParam}`}
            title={title}
            frameBorder="0"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default function VideoHero(props) {
  return (
    <Suspense fallback={<VideoSkeleton />}>
      <VideoHeroContent {...props} />
    </Suspense>
  )
}