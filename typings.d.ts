interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  bio: string;
  email: string;
  address: string;
  heroImage: Image;
  profilePic: Image;
}
export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  progress: number;
}
export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  skills: Skill[];
}
export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  LinkToBuild: string;
  summary: string;
  skills: Skill[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
