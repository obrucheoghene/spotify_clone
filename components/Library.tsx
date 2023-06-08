"use client";
import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';
import usePlayer from '@/hooks/usePlayer';
import useOnPlay from '@/hooks/useOnPlay';
import useSubscrbeModal from '@/hooks/useSubscribeModal';

interface librayProps {
    songs: Song[]
}
const Library: React.FC<librayProps> = ({songs}) => {
    const subscribeModal = useSubscrbeModal()
    const authModal = useAuthModal();
    const {user, subscription} = useUser()
    const uploadModal = useUploadModal();
    const  onPlay = useOnPlay(songs)

    const player = usePlayer();

    const onClick = () => {
        if(!user) {
            return authModal.onOpen
        }
        if (!subscription) {
            return subscribeModal.onOpen();
        }
        return uploadModal.onOpen();

    }

  return (
    <div className=" flex flex-col">
        <div className=" flex items-center justify-between px-5 pt-4">
            <div className=" inline-flex item-center gap-x-2">
                <TbPlaylist size={26} className=' text-neutral-400'/>
                <p className=' text-neutral-400 font-medium text-md'>Your libray</p>
            </div>

            <AiOutlinePlus onClick={onClick}
            size={20}
            className='text-neutral-400 cursor-pointer hover:text-white transition'/>
            
        </div>
        <div className=' flex flex-col gap-y-2 mt-4 px-3'>
                {
                    songs.map((song) => (
                       <MediaItem onClick={(id: string) => onPlay(id)}
                       key={song.id}
                       data={song}
                       />
                    ))
                }
        </div>
    </div>
  )
}

export default Library