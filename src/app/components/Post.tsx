import Image from "next/image"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* user */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/27555576/pexels-photo-27555576/free-photo-of-a-woman-sitting-on-a-couch-in-front-of-a-painting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                <span className="font-medium">Luis Bryant</span>
            </div>
        <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer" />
        </div>
        {/* desc */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src="https://images.pexels.com/photos/25244939/pexels-photo-25244939/free-photo-of-swoyambhu-mahachaitya-in-kathmandu-in-nepal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae asperiores tempora omnis incidunt deserunt nobis dolores itaque quaerat eveniet nostrum, enim reprehenderit repellendus? Veritatis voluptatibus animi dolore nam, fugiat provident.</p>
        </div>
        {/* interaction */}
        <div className="flex items-center justify-between text-sm mt-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline"> Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline"> Comments</span></span>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline"> Shares</span></span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Post