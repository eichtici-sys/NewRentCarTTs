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
    link: "https://www.facebook.com/profile.php?id=100064221667312",
  },
  {
    id: "social-2",
    icon: BsInstagram,
    link: "https://instagram.com/newrentcartrujillo?igshid=YTA1Njc0MTg3OQ==",
  },
]
