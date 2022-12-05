export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heroPhrases",
      title: "Hero Phrases",
      type: "array",
      of:[{type:"string"}]
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{type:"reference",to:{type:"social"}}],
    }
  ],

  preview: {
    select: {
      title: 'name',
      name: 'name',
      media: 'profilePic',
    },
    // prepare(selection) {
    //   const {name} = selection
    //   return Object.assign({}, selection, {
    //     subtitle: name && `by ${name}`,
    //   })
    // },
  },
};
