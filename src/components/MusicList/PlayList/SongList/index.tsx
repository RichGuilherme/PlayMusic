import { MdPlayCircleFilled } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { CardMusic, ContainerPlayList, HeaderList, ListEdit, Musics, SSongList} from "./style";
import imgCard from "../../../../assets/Leo Season.jpg"


export const SongList = () => {
    return (
        <SSongList>
            <ListEdit>
                <div>
                    <span>
                        <MdPlayCircleFilled size={62} />
                    </span>

                    <div>
                        <BsThreeDots size={27} />
                    </div>
                </div>

                <div>
                    <HiPlus size={37} />
                </div>
            </ListEdit>

            <ContainerPlayList>
                <HeaderList>
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
                </HeaderList>

                <Musics>
                    <CardMusic>
                        <div>
                            <span>1</span>
                            <div>
                                <img src={imgCard} alt="Image do card" />
                                <a href="#">Arde Outra Vez</a>
                            </div>
                        </div>

                        <span>Thalles Roberto</span>

                        <div>
                            <span>4:40</span>
                            <BsThreeDots size={20} />
                        </div>
                    </CardMusic>
                    <CardMusic>
                        <div>
                            <span>1</span>
                            <div>
                                <img src={imgCard} alt="Image do card" />
                                <a href="#">Arde Outra Vez</a>
                            </div>
                        </div>

                        <span>Thalles Roberto</span>

                        <div>
                            <span>4:40</span>
                            <BsThreeDots size={20} />
                        </div>
                    </CardMusic>
                    <CardMusic>
                        <div>
                            <span>1</span>
                            <div>
                                <img src={imgCard} alt="Image do card" />
                                <a href="#">Arde Outra Vez</a>
                            </div>
                        </div>

                        <span>Thalles Roberto</span>

                        <div>
                            <span>4:40</span>
                            <BsThreeDots size={20} />
                        </div>
                    </CardMusic>
                    <CardMusic>
                        <div>
                            <span>1</span>
                            <div>
                                <img src={imgCard} alt="Image do card" />
                                <a href="#">Arde Outra Vez</a>
                            </div>
                        </div>

                        <span>Thalles Roberto</span>

                        <div>
                            <span>4:40</span>
                            <BsThreeDots size={20} />
                        </div>
                    </CardMusic>
                
                </Musics>

            </ContainerPlayList>
        </SSongList>
    )
}
