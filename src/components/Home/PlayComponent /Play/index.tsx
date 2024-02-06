import { useEffect, useRef, useState } from "react"

import { TimeMusic } from "./timeMusic"
import { ContainerPlay } from "./style"
import { Controllers } from "./ControlButtons"
import { useDispatch } from "react-redux"
import { activePlay, nextSong, prevSong, songData } from "../../../../redux/features/playerSlice"

type PlayProps = {
    volumeProps: number
    muted: boolean
    music: string
    duration: number
    isPlaying: boolean
    currentIndex: number
    currentSongs: { musics: songData[] }
}


export const Play = ({ volumeProps, muted, music, duration, isPlaying, currentSongs, currentIndex }: PlayProps) => {
    const [loop, setLoop] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [musica, setMusica] = useState(`${music}`)

    const dispatch = useDispatch()
    const audioPlayRef = useRef<HTMLAudioElement>(null)


    const handleNextSong = () => {
        let nextIndex;

        if (!shuffle) {
            nextIndex = (currentIndex + 1) % currentSongs.musics.length
        } else {
            do {
                nextIndex = Math.floor(Math.random() * currentSongs.musics.length)
            } while (nextIndex === currentIndex);
        }

        dispatch(nextSong(nextIndex))

    }

    const handlePrevSong = () => {

        if (currentIndex === 0) {
            dispatch(prevSong(currentSongs?.musics.length - 1))
        } else {
            dispatch(prevSong(currentIndex - 1))
        }
    }

    useEffect(() => {
        if (audioPlayRef.current) {
            if (isPlaying) {
                dispatch(activePlay(true))
                audioPlayRef.current.play()
            } else {
                audioPlayRef.current.pause()
            }
        }
    }, [isPlaying, dispatch])

    // atualizar o som do audio 
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
                isPlaying={isPlaying}
                setLoop={setLoop}
                loop={loop}
                setShuffle={setShuffle}
                shuffle={shuffle}
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong} />

            <TimeMusic
                audioPlayRef={audioPlayRef}
                durationAudio={duration} />

            <audio
                src={musica}
                ref={audioPlayRef}
                autoPlay={isPlaying}
                onEnded={handleNextSong}
                loop={loop}
                muted={muted}>
            </audio>
        </ContainerPlay>

    )
}