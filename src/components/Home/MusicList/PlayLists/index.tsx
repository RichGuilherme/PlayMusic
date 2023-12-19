import { PlayListsContainer, SPlayLists } from "./style"

import img from "../../../../assets/Leo Season.jpg"

export const PlayLists = () => {
    return (
        <SPlayLists>
            <h1>Listas adionadas</h1>

            <PlayListsContainer>
                <div>
                    <img src={img} alt="Thumbnail playlist" />
                    <span>
                        <a href="">Gospel</a>
                    </span>
                </div>
                
                <div>
                    <img src={img} alt="Thumbnail playlist" />
                    <span>
                        <a href="">Gospel</a>
                    </span>
                </div>
                <div>
                    <img src={img} alt="Thumbnail playlist" />
                    <span>
                        <a href="">Gospel</a>
                    </span>
                </div>
                <div>
                    <img src={img} alt="Thumbnail playlist" />
                    <span>
                        <a href="">Gospel</a>
                    </span>
                </div>
                <div>
                    <img src={img} alt="Thumbnail playlist" />
                    <span>
                        <a href="">Gospel</a>
                    </span>
                </div>

            </PlayListsContainer>
        </SPlayLists>
    )
}
