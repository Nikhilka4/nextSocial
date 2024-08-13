import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-auto text-sm">
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src=""
            alt=""
            className="w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};
export default Stories;
