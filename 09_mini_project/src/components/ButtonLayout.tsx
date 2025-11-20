import Link from "next/link";

const ButtonLayout = ({
  label,
  type,
  href,
}: {
  label: string;
  type: "button" | "logo";
  href?: string;
}) => {
  return (
    <div
      className={`border-2 border-amber-600 rounded-lg relative ${
        type === "button"
          ? "cursor-pointer has-[:hover]:bg-gray-900 hover:text-amber-700"
          : ""
      }`}
    >
      <div
        className={
          "border-2 border-amber-600 rounded-lg p-2 font-semibold relative left-1 top-1 " +
          (type === "button" ? "cursor-pointer" : "")
        }
      >
        {type === "button" ? (
          <Link href={href as string} className="cursor-pointer">
            {label}
          </Link>
        ) : (
          label
        )}
      </div>
    </div>
  );
};

export default ButtonLayout;
