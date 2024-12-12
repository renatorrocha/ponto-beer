interface HeroBannerProps {
  backgroundImage: string;
}

export function HeroBanner({ backgroundImage }: HeroBannerProps) {
  return (
    <div className="relative flex h-[10vh] items-center overflow-hidden md:h-[40vh]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
