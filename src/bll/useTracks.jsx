import { useState, useEffect } from 'react'
import { GetTrackList } from '../dal/api'
//import type { Track } from '../types/track'
export function useTracks(){
    const [tracks, setTracks] = useState(null)
    useEffect(() => {
      GetTrackList().then((res) => setTracks(res.data))
    }, [])
    return{tracks}
  }