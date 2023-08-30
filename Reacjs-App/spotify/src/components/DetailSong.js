import React from 'react'

export default function DetailSong() {
  return (
    <div className='col-span-1 p-3 bg-slate-700 text-start'>
        <div className="text-[#38bdf8] font-bold">Now playing</div>
        <div className="text-2xl">Sing me to sleep</div>
        <div className="flex items-center justify-center mt-16">
          <img className="w-64" alt="avatar" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" />
        </div>
        <div className="flex justify-evenly items-center h-24">
            <img className="w-16 rounded-full" alt="logo" src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"/>
            <span className="text-xl text-white">Alan Walker</span>
        </div>
    </div>
  )
}
