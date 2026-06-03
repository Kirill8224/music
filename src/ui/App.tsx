import { useState, useEffect } from 'react'

// Описываем базовые интерфейсы для безопасности TypeScript
interface Track {
  id: string
  attributes: {
    title: string
    attachments: Array<{ url: string }>
  }
}

interface TrackDetails extends Track {
  attributes: Track['attributes'] & {
    lyrics?: string
  }
}

export default function App() {
  // ИСПРАВЛЕНО: переименовано selectedTracknpm -> selectedTrack, добавлены типы
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  const [tracks, setTracks] = useState<Track[] | null>(null)
  const [track, setTrack] = useState<TrackDetails | null>(null)

  // 1. Запрос списка всех треков
  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: { 
        //'api-key': 'fd817c12-1857-4bc3-9299-bedb266aad8c' 
        }
    })
      .then((res) => res.json())
      .then((traks) => setTracks(traks.data))
  }, [])

  // 2. ЗАПРОС ДЕТАЛЕЙ
  useEffect(() => {
    if (!selectedTrack) return 
    
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrack.id, {
      headers: { 'api-key': 'fd817c12-1857-4bc3-9299-bedb266aad8c' }
    })
      .then((res) => res.json())
      .then((trak) => setTrack(trak.data))
  }, [selectedTrack])

  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>No tracks</span>
      </div>
    )
  }

  return (
    <div>
      <h1>Musicfun</h1>
      <button onClick={() => {
        setSelectedTrack(null)
        setTrack(null)
      }}>
        reset selection
      </button>
      
      <div style={{ display: "flex" }}>
        <ul>
          {tracks.map((t) => {
            return (
              <li 
                key={t.id} 
                style={{ border: t.id === selectedTrack?.id ? "1px solid orange" : "none" }}
              >
                <div 
                  onClick={() => setSelectedTrack(t)} 
                  style={{ cursor: "pointer" }}
                >
                  {t.attributes.title}
                </div>
                {/* ИСПРАВЛЕНО: добавлена проверка на наличие attachment, чтобы избежать краша */}
                {t.attributes.attachments?.[0]?.url && (
                  <audio src={t.attributes.attachments[0].url} controls></audio>
                )}
              </li>
            )
          })}
        </ul>
        
        <div>
          <h3>details</h3>
          <p>{selectedTrack === null ? 'no traks' : `номер трека: ${selectedTrack.id}`}</p>
          <p>{selectedTrack === null ? '' : `название трека: ${track?.attributes?.title || 'загрузка...'}`}</p>
          <div>
            <h4>lyrics</h4>
            <p>{track?.attributes?.lyrics ?? 'текста нет '}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
