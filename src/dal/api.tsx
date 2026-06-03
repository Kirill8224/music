function apiHeaders(){
  const apiKey= import.meta.env.VITE_API_KEY
  if(!apiKey){
    return undefined
  }
  return{'api-key': apiKey}
}

export function GetTrackDetail(trackId: string) {
  return fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    { headers: apiHeaders() },
  ).then((res) => res.json())
}

export function GetTrackList() {
  return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: apiHeaders(),
  }).then((res) => res.json())
}
