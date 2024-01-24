import { useEffect, useRef, useState } from "react"

import { TimeMusic } from "./timeMusic"
import { ContainerPlay } from "./style"
import { Controllers } from "./ControlButtons"
import { useDispatch } from "react-redux"
import { nextSong, playPause, songData } from "../../../../redux/features/playerSlice"

type PlayProps = {
    volumeProps: number
    muted: boolean
    music: string
    duration: number
    currentIndex: number 
    currentSongs: songData[]
}

export const Play = ({ volumeProps, muted, music, duration, currentSongs, currentIndex }: PlayProps) => {
    const [playing, setPlaying] = useState(false)
    const [loop, setLoop] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [musica, setMusica] = useState(`${music}`)

    const dispatch = useDispatch()
    const audioPlayRef = useRef<HTMLAudioElement>(null)

    if (audioPlayRef.current) {
        if (playing) {
            audioPlayRef.current?.play()
        } else {
            audioPlayRef.current?.pause()
        }
    }

    const handleNextSong = () => {
        dispatch(playPause(false));

       
            dispatch(nextSong((currentIndex + 1) % currentSongs?.length));
      
    }

    const handlePrevSong = () => {

    }

    useEffect(() => {
        if (audioPlayRef.current) {

            audioPlayRef.current.volume = volumeProps / 100
        }
    }, [audioPlayRef, volumeProps])

    // atualizar a música
    useEffect(() => {
        setMusica(music)
    }, [music])

    return (
        <ContainerPlay>
            <Controllers
                setPlaying={setPlaying}
                setLoop={setLoop}
                loop={loop}
                playing={playing}
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong} />

            <TimeMusic
                audioPlayRef={audioPlayRef}
                durationAudio={duration} />

            <audio
                src={musica}
                ref={audioPlayRef}
                autoPlay={playing}
                onEnded={handleNextSong}
                loop={loop}
                muted={muted}>
            </audio>
        </ContainerPlay>

    )
}
