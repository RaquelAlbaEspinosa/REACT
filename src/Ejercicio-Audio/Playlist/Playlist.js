import React from 'react';
import { Song1 } from './Songs/Song1';
import { Song2 } from './Songs/Song2';
import { Song3 } from './Songs/Song3';
import { Song4 } from './Songs/Song4';
import { Song5 } from './Songs/Song5';
import { Song6 } from './Songs/Song6';
import { Song7 } from './Songs/Song7';
import { Song8 } from './Songs/Song8';
import { Song9 } from './Songs/Song9';
import { Song10 } from './Songs/Song10';
import { Song11 } from './Songs/Song11';
import "./Playlist.scss";

export const Playlist = () => {
  return (
    <>
        <table className='songs'>
            <tr className='enunciado'>
                <td>#</td>
                <td className='titles'>Título</td>
                <td>Duración</td>
            </tr>
            <Song1 />
            <Song2 />
            <Song3 />
            <Song4 />
            <Song5 />
            <Song6 />
            <Song7 />
            <Song8 />
            <Song9 />
            <Song10 />
            <Song11 />
        </table>
    </>
  )
}
