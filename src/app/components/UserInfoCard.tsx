import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex gap-2 items-center">
          <span className="text-xl text-black">Brandon Curtis</span>
          <span className="text-sm">@suvtufuwnf</span>
        </div>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          tempore eius, ut ab atque voluptates? Tenetur
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span className="">
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span className="">
            Went to <b>Jon Herrera</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span className="">
            Works at <b>spend Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="/" className="text-blue-500 font-medium">lama.dev</Link>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span className="">Joined November 2025</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  );
};
export default UserInfoCard;
