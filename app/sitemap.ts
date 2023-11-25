import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.newrentcar.com.pe",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.newrentcar.com.pe/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.newrentcar.com.pe/fleet",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ]
}
