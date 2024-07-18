import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
    const {
        track,
        seekBar,
        seekBg,
        playStatus,
        play,
        pause,
        time,
        previous,
        next,
        seekSong,
        volume,
        changeVolume,
    } = useContext(PlayerContext);

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={track.image} alt="songPic" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img src={assets.shuffle_icon} alt="icon" className="w-4 cursor-pointer" />
                    <img onClick={previous} src={assets.prev_icon} alt="icon" className="w-4 cursor-pointer" />
                    {playStatus ? (
                        <img onClick={pause} src={assets.pause_icon} alt="icon" className="w-4 cursor-pointer" />
                    ) : (
                        <img onClick={play} src={assets.play_icon} alt="icon" className="w-4 cursor-pointer" />
                    )}
                    <img onClick={next} src={assets.next_icon} alt="icon" className="w-4 cursor-pointer" />
                    <img src={assets.loop_icon} alt="icon" className="w-4 cursor-pointer" />
                </div>
                <div className="flex items-center gap-5">
                    <p>
                        {formatTime(time.currentTime.minute)}:{formatTime(time.currentTime.second)}
                    </p>
                    <div
                        ref={seekBg}
                        onClick={seekSong}
                        className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
                    >
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-blue-800 rounded-full" />
                    </div>
                    <p>
                        {formatTime(time.totalTime.minute)}:{formatTime(time.totalTime.second)}
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img src={assets.play_icon} alt="icon" className="w-4" />
                <img src={assets.mic_icon} alt="icon" className="w-4" />
                <img src={assets.queue_icon} alt="icon" className="w-4" />
                <img src={assets.speaker_icon} alt="icon" className="w-4" />
                <img src={assets.volume_icon} alt="icon" className="w-4" />
                <div className="relative w-20 bg-slate-50 h-1 rounded cursor-pointer">
                    <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded"
                        style={{ width: `${volume * 100}%` }}
                    ></div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={changeVolume}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
                <img src={assets.mini_player_icon} alt="icon" className="w-4" />
                <img src={assets.zoom_icon} alt="icon" className="w-4" />
            </div>
        </div>
    );
};

export default Player;
