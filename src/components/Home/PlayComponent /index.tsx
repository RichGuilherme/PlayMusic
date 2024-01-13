import { LuHeart } from "react-icons/lu";
import { ContainerControlles, MusicDetails, VoidDetails, Volume } from "./style"
import { Play } from "./Play";
import { useContext, useEffect, useState } from "react";
import { SlVolume2, SlVolumeOff } from "react-icons/sl";
import { MusicContext } from "../../../context/musicContext";

export const PlayComponent = () => {
  const [volume, setVolume] = useState(50)
  const [mute, setMute] = useState(false)
  const { musicCurrent } = useContext(MusicContext)
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(musicCurrent.thumbnail)
  }, [musicCurrent])


  const handleMute = () => {
    if (!mute) {
      setMute(true)
      setVolume(0)
    } else {

      setMute(false)
      setVolume(50)
    }
  }

  return (
    <ContainerControlles>
      {musicCurrent.length !== 0 ?
        <MusicDetails>
          <img src={imageUrl} alt="image" />

          <div>
            <h1>{musicCurrent.title}</h1>
            <p>{musicCurrent.artist}</p>
          </div>

          <LuHeart size={21} />
        </MusicDetails>
        :
        <VoidDetails></VoidDetails>
      }

      <Play
        volumeProps={volume}
        muted={mute}
        music={musicCurrent.storage_url} />

      <Volume>
        <div onClick={() => handleMute()}>
          {mute ?
            <SlVolumeOff
              size={25} />
            :
            <SlVolume2
              size={25} />
          }
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </Volume>
    </ContainerControlles>
  )
}
