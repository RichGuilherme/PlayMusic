import { ControlButtons } from './style'
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiPauseCircle } from "react-icons/hi2";
import { MdPlayCircleFilled } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { playPause } from '../../../../../redux/features/playerSlice';

type ControllersProps = {
    setLoop: React.Dispatch<SetStateAction<boolean>>
    setShuffle: React.Dispatch<SetStateAction<boolean>>
    loop: boolean
    shuffle: boolean
    isPlaying: boolean
    handlePrevSong: () => void
    handleNextSong: () => void
}

export const Controllers = ({ setLoop,  setShuffle, loop, isPlaying, shuffle, handlePrevSong, handleNextSong }: ControllersProps) => {
    const dispatch = useDispatch()

    const handlePlayPause = () => {
        dispatch(playPause(!isPlaying))
    }

    return (
        <ControlButtons>
            <button
                onClick={() => setShuffle((shuffle: unknown) => !shuffle)}
                style={{ color: `${shuffle ? "#ffff" : ""}` }}>
                <HiOutlineSwitchHorizontal size={23} />
            </button>

            <button onClick={handlePrevSong}>
                <FiChevronLeft size={23} />
            </button>

            <button onClick={() => handlePlayPause()}>
                {isPlaying ?
                    <HiPauseCircle

                        size={41} />
                    :
                    <MdPlayCircleFilled
                        size={41} />
                }
            </button>

            <button onClick={handleNextSong}>
                <FiChevronRight size={23} />
            </button>

            <button
                onClick={() => setLoop((loop: unknown) => !loop)}
                style={{ color: `${loop ? "#ffff" : ""}` }}>

                <LuRefreshCcw size={23} />
            </button>
        </ControlButtons>
    )
}
