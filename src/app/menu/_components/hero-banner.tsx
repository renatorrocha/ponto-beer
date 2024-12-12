interface HeroBannerProps {
  title: string;
  backgroundImage: string;
}

export function HeroBanner({ title, backgroundImage }: HeroBannerProps) {
  return (
    <div className="relative flex items-center overflow-hidden md:h-[40vh]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-primary-foreground">
        <h1 className="my-4 text-4xl font-bold md:text-7xl">{title}</h1>
      </div>
    </div>
  );
}
