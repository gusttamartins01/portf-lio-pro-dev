export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const base =
    "rounded-xl font-semibold transition duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-purple-500 text-white hover:bg-purple-400 shadow-md hover:shadow-lg",
    outline:
      "border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white",
    ghost:
      "text-gray-300 hover:text-purple-400",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
