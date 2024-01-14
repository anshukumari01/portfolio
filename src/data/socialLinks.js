import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Strings from "@/constants/strings";

const socialLinks = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: <FontAwesomeIcon icon={faGithub} />,
    text: Strings.githubUsername,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.twitter,
    url: Strings.twitterLink,
    icon: <FontAwesomeIcon icon={faXTwitter} />,
    text: Strings.twitterUsername,
  },
];

export default socialLinks;
