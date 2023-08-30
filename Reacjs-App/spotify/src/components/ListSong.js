import React, { useContext, useState } from 'react'
import { Songs } from '../Context'

export default function ListSong() {
  const {dataSongs, handleSetSong} = useContext(Songs);
  const [idSong, setIdSong] = useState(0)
  const handlePlaySong = (idSong) =>{
    setIdSong(idSong)
    handleSetSong(idSong)
  }
  return (
    <div className='col-span-2 bg-slate-800 overflow-hidden  overflow-y-scroll'>
        <table className='table-auto w-full relative'>
        <thead className="sticky top-0 h-12 text-white bg-slate-700">
          <tr>
          <th className="w-[10%] min-w-[30px]">#</th>
            <th className="w-[60%] text-left">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%]">
                <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSongs.map((song, index) => (
                <tr className={`h-12 bg-slate-600 text-teal-100 ${idSong === song.id && 'text-teal-600'} hover:bg-slate-600`}
                key={index} 
                onClick={() => handlePlaySong(song.id)}
                > 
                <td className=" text-center">{index + 1}</td>
                <td>{song.name}</td>
                <td className=" text-center">{song.author}</td>
                <td className="text-center">
                    <a href={song.url}>
                        <i className="fa fa-download"></i>
                    </a>
                </td>
            </tr>
          ))}
        
        </tbody>
        </table>
    </div>
  )
}
