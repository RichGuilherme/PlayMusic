
import React, { useRef, useState } from 'react'
import * as S from './style'
import axiosInstanciaMusic from '../../../api/axiosMusic'
import { LuCheck, LuUploadCloud } from "react-icons/lu";
import { ImFileMusic } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong } from '../../../redux/features/playerSlice';
import { RootState } from '../../../redux/store';
import { useParams } from 'react-router-dom';

type MusicFile = {
    name: string;
    loading: number;
}

type UploadedFile = {
    name: string;
    size: string;
}

export const AddMusic = () => {
    const [fileAudio, setFileAudio] = useState<MusicFile[]>([])
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
    const [showProgress, setShowProgress] = useState(false)
    const dispatch = useDispatch()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { currentIndex, activeSong, currentSongs } = useSelector((state: RootState) => state.player)
    const { IdPlaylist } = useParams()

    const handleClickFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleFileAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const file = e.target.files?.[0]

        if (!file) return

        if (file) {
            if (file.type !== "audio/mpeg") {
                return
            }
        }


        const fileName = file.name.length > 12
            ? `${file.name.substring(0, 13)}... .${file.name.split('.')[1]}`
            : file.name

        const formData = new FormData()
        formData.append("music", file)


        setFileAudio(prevState => [...prevState, { name: fileName, loading: 0 }])
        setShowProgress(true)

        axiosInstanciaMusic.post(`music/create/${IdPlaylist}`, formData, {
            onUploadProgress: ({ loaded, total }) => {
                if (total !== undefined) {
                    setFileAudio((prevState) => {
                        const newFilesAudios = [...prevState]
                        newFilesAudios[newFilesAudios.length - 1].loading = Math.floor((loaded / total) * 100)
                        return newFilesAudios
                    })
                }

                if (loaded === total) {
                    const fileSize = total < 1024
                        ? `${total} KB`
                        : `${(loaded / (1024 * 1024)).toFixed(2)} MB`

                    setUploadedFiles([...uploadedFiles, { name: fileName, size: fileSize }])
                    setFileAudio([])
                    setShowProgress(false)
                }
            }
        })
            .then((res) => {
                const newMusicObject = res.data
                const attCurrentSongs = [...currentSongs.musics, newMusicObject]

                dispatch(setActiveSong({ song: activeSong, data: { ...currentSongs, musics: attCurrentSongs }, i: currentIndex }))
            })
            .catch((error) => {
                console.log(error)

            })
    }

    return (
        <S.ContainerUpload>
            <S.FormFile onClick={handleClickFile}>
                <input
                    type="file"
                    name="music"
                    onChange={handleFileAudio}
                    ref={fileInputRef}
                    hidden />

                <div>
                    <LuUploadCloud size={85} style={{ color: "#79b300" }} />
                </div>
                <h2>Importe seu arquivo aqui</h2>
                <p>Arraste ou clique para fazer upload</p>
            </S.FormFile>

            {showProgress && (
                <S.LoadingArea>
                    {fileAudio.map((fileAudio, index) => (

                        <li key={index + 1}>
                            <i><ImFileMusic size={34} style={{ color: "#79b300" }} /></i>

                            <div>
                                <span>{`${fileAudio.name} - uploading`}  </span>
                                <span>{`${fileAudio.loading}%`}</span>

                                <S.LoadingBar>
                                    <div style={{ width: `${fileAudio.loading}%` }}>
                                    </div>
                                </S.LoadingBar>
                            </div>

                        </li>
                    ))}
                </S.LoadingArea>
            )}


            {uploadedFiles.map((files, index) => (
                <S.UploadedArea key={index + 1}>
                    <li>
                        <div>
                            <i ><ImFileMusic size={34} style={{ color: "#79b300" }} /></i>
                            <div>
                                <span>{files.name}</span>
                                <span>{files.size}</span>
                            </div>
                        </div>
                        <LuCheck size={23} style={{ color: "#79b300" }} />
                    </li>
                </S.UploadedArea>
            ))}

        </S.ContainerUpload>
    )
}
