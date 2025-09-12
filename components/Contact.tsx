import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export default function Contact({ pageInfo }: Props) {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Get In{" "}
          <span className="decoration-[#0ea5e9]/50 underline"> Touch! </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon
              className="text-[#0ea5e9] h-7 w-7"
              title="Email"
              width={"50px"}
            />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon
              className="text-[#0ea5e9] h-7 w-7"
              title="location"
              width={"50px"}
            />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
