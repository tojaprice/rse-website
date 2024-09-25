import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col p-24 bg-white justify-center items-center w-full gap-4">
      <Image
        src="/assets/under-construction.webp"
        width="800"
        height="400"
        alt="Web page under construction"
        className="rounded-lg"
      />
      <h1 className="text-rs-gray font-bold text-2xl">
        This web page is currently being built, be with you shortly 👍
      </h1>
    </div>
  );
}
