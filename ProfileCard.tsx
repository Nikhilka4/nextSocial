import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/18821588/pexels-photo-18821588/free-photo-of-young-woman-decorated-with-butterflies.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/20212665/pexels-photo-20212665/free-photo-of-blurred-blonde-woman-in-tank-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
         className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
    </div>
  );
};
export default ProfileCard;
