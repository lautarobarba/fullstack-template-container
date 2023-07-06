import Image from "next/image";
import Link from "next/link";

export const Brand = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/images/logo.png"
        className="h-8 mr-3"
        alt="Template Logo"
        title="Template Logo"
        width={30}
        height={30}
        style={{ width: "auto", height: "auto" }}
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Template
      </span>
    </Link>
  );
};
