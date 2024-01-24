import { LuHeart } from "react-icons/lu";
import { ContainerControlles, MusicDetails, VoidDetails, Volume } from "./style"
import { Play } from "./Play";
import { useEffect, useState } from "react";
import { SlVolume2, SlVolumeOff } from "react-icons/sl";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";


export const PlayComponent = () => {
  const [volume, setVolume] = useState(50)
  const [mute, setMute] = useState(false)
  const {
    activeSong,
    currentIndex,
    currentSongs,
    isPlaying,
    isActive } = useSelector((state: RootState) => state.player)
  const [imageUrl, setImageUrl] = useState("");


  useEffect(() => {
    if (activeSong && activeSong.thumbnail) {
      setImageUrl(activeSong.thumbnail)
      
    }
  }, [activeSong])


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
      {activeSong !== null ?
        <MusicDetails>
          <img src={imageUrl} alt="image" />

          <div>
            <h1>{activeSong.title}</h1>
            <p>{activeSong.artist}</p>
          </div>

          <LuHeart size={21} />
        </MusicDetails>
        :
        <VoidDetails></VoidDetails>
      }

      <Play
        volumeProps={volume}
        muted={mute}
        currentIndex={currentIndex}
        currentSongs={currentSongs}
        music={activeSong?.storage_url}
        duration={activeSong?.duration} />

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
