import React from 'react';
import { ImagePlaylist } from './ImagePlaylist/ImagePlaylist';
import { Playlist } from './Playlist/Playlist';
import { Radio } from './Radio/Radio';

import "./style.scss";

export const EjercicioAudio = () => {
  return (
    <>
        <div className="reproductor">
            <h1>Reproductor audio</h1>
            <hr />
            <h2>Banda: The black keys</h2>
            <h2>Disco: The camino</h2>
            <div className="plailistImage">
                <div className="playlist">
                    <Playlist />
                </div>
                <div className="image">
                    <ImagePlaylist />
                </div>
            </div>
            <div className="radio">
                <Radio />
            </div>
        </div>
    </>
  )
}
