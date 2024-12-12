interface MenuItemImageProps {
  src: string;
  alt: string;
}

export function MenuItemImage({ src, alt }: MenuItemImageProps) {
  return (
    <div className="relative h-full w-32 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 25vw, 33vw"
        loading="lazy"
      />
    </div>
  );
}
