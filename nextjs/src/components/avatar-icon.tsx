import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AvatarIcon = () => {
  const svgData = encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                d="M256 73.825a182.175 182.175 0 1 0 182.18 182.18A182.177 182.177 0 0 0 256 73.825zm0 71.833a55.05 55.05 0 1 1-55.054 55.046A55.046 55.046 0 0 1 256 145.658zm.52 208.723h-80.852c0-54.255 29.522-73.573 48.885-90.906a65.68 65.68 0 0 0 62.885 0c19.363 17.333 48.885 36.651 48.885 90.906z"
                data-name="Profile"
            />
        </svg>
    `);

  const svgUrl = `data:image/svg+xml,${svgData}`;

  return (
    <Avatar className="mx-2">
      <AvatarImage src={svgUrl} />
      <AvatarFallback>{svgUrl}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
