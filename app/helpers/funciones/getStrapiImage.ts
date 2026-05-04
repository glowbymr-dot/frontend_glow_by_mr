export const getStrapiImage = (url: string) => {
  return `${process.env.NEXT_PUBLIC_STRAPI}${url}`;
};
