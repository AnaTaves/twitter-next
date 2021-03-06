import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
    ChatAlt2Icon,
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon,
} from '@heroicons/react/outline'


interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
  return (
    <section className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img
          src={tweet.profileImg}
          alt="User Profile Image"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username.toUpperCase()}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">@{tweet.username.replace(/\s+/g, '').toLowerCase()} . </p>
            <TimeAgo 
            className="text-sm text-gray-500"
            date={tweet._createdAt}/>
          </div>

          <p className="pt-1">{tweet.text}</p>
          {tweet.image && 
          <img src={tweet.image} alt="Tweet Image" className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"/>}
        </div>
      </div>

      <div className='mt-5 flex justify-between'>
          <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
            <ChatAlt2Icon className="h-5 w-5" />
            <p>5</p>
          </div>
          <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
          <SwitchHorizontalIcon className="h-5 w-5" />
          </div>
          <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
          <HeartIcon className="h-5 w-5" />
          </div>

          <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
          <UploadIcon className="h-5 w-5" />
          </div>
      </div>
    </section>
  )
}

export default Tweet
