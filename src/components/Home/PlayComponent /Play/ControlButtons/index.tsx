import { ControlButtons } from './style'
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiPauseCircle } from "react-icons/hi2";
import { MdPlayCircleFilled } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { SetStateAction } from 'react';

type ControllersProps = {
    setLoop: React.Dispatch<SetStateAction<boolean>>
    setPlaying: React.Dispatch<SetStateAction<boolean>>
    setShuffle: React.Dispatch<SetStateAction<boolean>>
    loop: boolean
    shuffle: boolean
    playing: boolean
    handlePrevSong: () => void
    handleNextSong: () => void
}

export const Controllers = ({ setLoop, setPlaying, setShuffle, loop, playing, shuffle, handlePrevSong, handleNextSong }: ControllersProps) => {


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

            <button onClick={() => setPlaying((playing: unknown) => !playing)}>
                {playing ?
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
