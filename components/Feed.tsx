import { RefreshIcon } from '@heroicons/react/outline'
import TweetBox from './TweetBox'
import { Tweet } from '../typings'
import TweetComponent from './Tweet'

interface Props {
  tweets: Tweet[]
}

export default function Feed({tweets }: Props) {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <header className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className="mr-5 mt-5 w-8 h-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </header>

      <div>
        <TweetBox/>
      </div>

      <div>
        {tweets.map(tweet => (
          <TweetComponent key={tweet._id} tweet={tweet}/>
        ))}
        
      </div>
    </div>
  )
}
