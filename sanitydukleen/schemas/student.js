export default {
  name: "student",
  type: "document",
  title: "Student",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "lastname",
      type: "string",
    },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
    },
    {
      name: "phone",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "curso",
      type: "reference",
      to: [{ type: "curso" }],
    },
  ],
};
