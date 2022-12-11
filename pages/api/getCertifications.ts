import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Certification } from "../../typings";

const query = groq`
*[_type=="certification"]| order(expires desc){
  ...,

  
}
`;

type Data = {
  certifications: Certification[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const certifications: Certification[] = await sanityClient.fetch(query);
  res.status(200).json({ certifications });
}
