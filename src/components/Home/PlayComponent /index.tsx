import { LuHeart } from "react-icons/lu";
import { ContainerControlles, MusicDetails, VoidDetails, Volume } from "./style"
import { Play } from "./Play";
import { useContext, useEffect, useState } from "react";
import { SlVolume2, SlVolumeOff } from "react-icons/sl";
import { IdContext } from "../../../context/idContext";

export const PlayComponent = () => {
  const [volume, setVolume] = useState(50)
  const [mute, setMute] = useState(false)
  const { idMusic } = useContext(IdContext)
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(idMusic.thumbnail)
  }, [idMusic])


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
      {idMusic.length !== 0 ?
        <MusicDetails>
          <img src={imageUrl} alt="image" />

          <div>
            <h1>{idMusic.title}</h1>
            <p>{idMusic.artist}</p>
          </div>

          <LuHeart size={21} />
        </MusicDetails>
        :
        <VoidDetails></VoidDetails>
      }

      <Play
        volumeProps={volume}
        muted={mute}
        music={idMusic.storage_url} />

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
