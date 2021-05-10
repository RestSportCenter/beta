import { DefaultSeo } from "next-seo";

export default function SeoPadrao() {
  <DefaultSeo
    openGraph={{
      type: "website",
      locale: "pt_BR",
      url: "https://www.restaurantesportcenter.com.br/",
      site_name: "Restaurante Sport Center",
    }}
    titleTemplate="Sport Center | %s"
    defaultTitle="Restaurante Sport Center"
    additionalLinkTags={[
      {
        rel: "icon",
        href: "https://www.restaurantesportcenter.com.br/favicon.ico",
      },
    ]}
  />;
}
