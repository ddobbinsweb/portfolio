export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "Date Started",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "Currently Working Here",
      type: "boolean",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of:[{type:"string"}]
    },
  ],

  preview: {
    select: {
      title: 'company',
      role: 'jobTitle',
      media: 'companyImage',
    },
    prepare(selection) {
      const {role} = selection
      return Object.assign({}, selection, {
        subtitle: role && `${role}`,
      })
    },
  },
};
