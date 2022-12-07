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

export default function Contact({pageInfo}: Props) {
  const {
    register,
    handleSubmit,
    reset
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:${pageInfo?.email}?subject=${formData.subject}&body=${formData.message}`;
   reset();
  };
  
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Get In <span className="decoration-[#0ea5e9]/50 underline"> Touch! </span>
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
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')}placeholder="Email" className="contactInput" type="email" />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea   {...register('message')} placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#0ea5e9] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
