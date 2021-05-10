import { NextSeo } from "next-seo";

export default function Seo(props) {
  // props: title, description, canonical, images (array {url, width, height, alt})
  const permaLink = `https://www.restaurantesportcenter.com.br/${props.canonical}`;
  return (
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={permaLink}
      openGraph={{
        url: permaLink,
        title: props.title,
        description: props.description,
        images: props.images,
      }}
    />
  );
}
