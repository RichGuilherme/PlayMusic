import { MdPlayCircleFilled } from "react-icons/md";

import { HiPlus } from "react-icons/hi";
import * as S from "./style";

import { useState } from "react";


import { HiPauseCircle } from "react-icons/hi2";
import { PopMusicDelete } from "../../../modal/PopDeleteMusic";
import { BsThreeDots } from "react-icons/bs";
import { Modal } from "../../../modal";
import { useParams } from "react-router-dom";
import { Musics } from "./Musics";
import { useDispatch, useSelector } from "react-redux";
import { playPause } from "../../../../redux/features/playerSlice";
import { RootState } from "../../../../redux/store";



export const SongList = () => {
    const { isPlaying } = useSelector((state: RootState) => state.player)
    const [isOpen, setIsOpen] = useState(false)
    const [idMusicDelete, setIdMusicDelete] = useState("")

    const dispatch = useDispatch()
    const { IdPlaylist } = useParams()


    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handlePlayPause = () => {
        dispatch(playPause(!isPlaying))
    }

    return (
        <S.SectionListSong>
            <S.ListEdit>
                <div>
                    <div onClick={() => handlePlayPause()}>
                        {isPlaying ?
                            <HiPauseCircle
                                size={62} />
                            :
                            <MdPlayCircleFilled
                                size={62} />
                        }
                    </div>

                    <div>
                        <BsThreeDots size={27} />
                    </div>
                </div>

                <div>
                    <HiPlus size={37} />
                </div>
            </S.ListEdit>

            <S.ContainerPlayList>
                <S.HeaderList>
                    <div>
                        <div>
                            <div>
                                <span>#</span>
                            </div>

                            <div>
                                <span>Title</span>
                            </div>
                        </div>

                        <div>
                            <span>Artista</span>
                        </div>

                        <div>
                            <span>Duration</span>
                        </div>
                    </div>
                </S.HeaderList>

                <Musics
                    IdPlaylist={IdPlaylist}
                    setIsOpen={setIsOpen}
                    setIdMusicDelete={setIdMusicDelete} />

                <Modal isOpen={isOpen} handleClose={handleCloseModal}>
                    <PopMusicDelete
                        idMusicDelete={idMusicDelete}
                        setIsOpen={setIsOpen} />
                </Modal>


            </S.ContainerPlayList>
        </S.SectionListSong>
    )
}
