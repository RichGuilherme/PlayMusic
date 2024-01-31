
import React, { useRef, useState } from 'react'
import { ContainerUpload, FormFile, LoadingArea, LoadingBar, UploadedArea } from './style'
import axiosInstanciaMusic from '../../../../api/axiosMusic'
import { LuCheck, LuUploadCloud } from "react-icons/lu";
import { ImFileMusic } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong } from '../../../../redux/features/playerSlice';
import { RootState } from '../../../../redux/store';

// type AddMusicProps = {

// }



export const AddMusic = () => {
    const [fileAudio, setFileAudio] = useState([])
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [showProgress, setShowProgress] = useState(false)
    const dispatch = useDispatch()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const {currentSongs, currentIndex,  activeSong}= useSelector((state: RootState) => state.player)

    const handleClickFile = () => {
        if(fileInputRef.current){
            fileInputRef.current.click()
        }
    }

    const handleFileAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const file = e.target.files?.[0]

        if(!file) return

        if(file){
            if(file.type !== "audio/mpeg"){
                return
            }
        }

        
        const fileName = file.name.length > 12 
        ? `${file.name.substring(0, 13)}... .${file.name.split('.')[1]}`
        : file.name

        const formData = new FormData()
        formData.append("music", file)
    
        
        setFileAudio(prevState => [...prevState, { name: fileName, loading: 0}])
        setShowProgress(true)

        axiosInstanciaMusic.post("music/create", formData, {
            onUploadProgress: ({loaded, total}) => {
               setFileAudio(prevState => {
                  const newFilesAudios = [...prevState]
                  newFilesAudios[newFilesAudios.length - 1].loading = Math.floor((loaded / total) * 100)
                  return newFilesAudios
               })

               if(loaded === total){
                   const fileSize = total < 1024
                   ? `${total} KB`
                   : `${(loaded / (1024*1024)).toFixed(2)} MB`

                   setUploadedFiles([...uploadedFiles, {name: fileName, size: fileSize}])
                   setFileAudio([])
                   setShowProgress(false)
               }
            }
        })
        .then((response) => {
            dispatch(setActiveSong({ song: activeSong, data: [response.data], i: 0 }))
        })
        .catch((error) => {
            console.log(error)
         
        })
    }

    return (
        <ContainerUpload>
            <FormFile  onClick={handleClickFile}>
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
            </FormFile>

            {showProgress && (
                <LoadingArea>
                    {fileAudio.map((fileAudio, index) => (
                        
                        <li key={index + 1}>
                            <i><ImFileMusic size={34} style={{ color: "#79b300" }} /></i>

                            <div>
                                <span>{`${fileAudio.name} - uploading`}  </span>
                                <span>{`${fileAudio.loading}%`}</span>

                                <LoadingBar>
                                    <div style={{ width: `${fileAudio.loading}%` }}>
                                    </div>
                                </LoadingBar>
                            </div>

                        </li>
                    ))}
                </LoadingArea>
            )}


            {uploadedFiles.map((files, index) => (
                <UploadedArea key={index + 1}>
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
                </UploadedArea>
            ))}

        </ContainerUpload>
    )
}
