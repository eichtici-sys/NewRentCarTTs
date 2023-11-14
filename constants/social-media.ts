import { BsInstagram, BsFacebook } from "react-icons/bs"
export type SocialMedia = {
  id: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  link: string
}
export const social: SocialMedia[] = [
  {
    id: "social-1",
    icon: BsFacebook,
    link: "https://www.facebook.com/profile.php?id=100064221667312&mibextid=ZbWKwL",
  },
  {
    id: "social-2",
    icon: BsInstagram,
    link: "https://instagram.com/new_rent_car?igshid=YmMyMTA2M2Y=",
  },
]
