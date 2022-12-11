import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { sanityClient, urlFor } from "../sanity";
import { Certification } from "../typings";
type Props = {
  certification: Certification;
};

const CertificationCard = ({ certification }: Props) => {
  const imageProps = useNextSanityImage(sanityClient, certification?.image);
  return (
    <div className="grid grid-cols-4 gap-5">
      <div
        className="relative w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={urlFor(certification?.image).url()}
          layout="fill"
          objectFit={"contain"}
          alt=""
        />
          <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {certification?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
