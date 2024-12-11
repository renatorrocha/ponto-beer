import Image from "next/image";

interface MenuItemImageProps {
  src: string;
  alt: string;
}

export function MenuItemImage({ src, alt }: MenuItemImageProps) {
  return (
    <div className="relative h-full w-32 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 25vw, 33vw"
      />
    </div>
  );
}
