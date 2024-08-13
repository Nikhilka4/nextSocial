import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src="https://images.pexels.com/photos/18028832/pexels-photo-18028832/free-photo-of-road-through-forest-in-summer.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-contain rounded-full"
      />
      {/* post */}
      <div className="flex-1">
        {/* text input */}
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind/" className="flex-1 p-2 bg-slate-100 rounded-lg"></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400">
          <div className="">
          <Image
            src="/addimage.png"
            alt=""
            width={20}
            height={20}
          />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
