import { Certification } from "../typings";
import CertificationCard from "./CertificationCard";

type Props = {
    certifications: Certification [];
}

const Certifications = ({certifications}:Props) => {

  return (
    <div className="h-screen h-screen flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0  mx-auto items-center">
      <h3 className="sectionHeader">Certifications</h3>
        {certifications?.map((certification)=>(
          <CertificationCard key={certification?._id} certification={certification} />
         
        ))}

    </div>
  )
}

export default Certifications