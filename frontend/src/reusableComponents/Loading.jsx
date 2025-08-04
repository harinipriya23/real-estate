export const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br 
    from-gray-700  via-black to-neutral-900 text-white">
      <div className="flex gap-1 text-2xl font-semibold">
        {"Loading...".split("").map((letter, index) => (
          <span
            key={index}
            className="animate-bounce inline-block"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: `1s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
