import { ReactComponent as SvgGithub } from "../../../assets/svg/github.svg";
import { ReactComponent as SvgFacebook } from "../../../assets/svg/facebook.svg";
import { ReactComponent as SvgLinkedin } from "../../../assets/svg/linkedin.svg";
import { GITHUB_LINK, FACEBOOK_LINK, LINKEDIN_LINK } from "../../../constants";

export const SocialMedia = () => {
  return (
    <div>
      <ul className="flex items-center justify-around gap-4 sm:gap-8">
        <li>
          <a href={GITHUB_LINK}>
            <SvgGithub width={24} height={24} />
          </a>
        </li>
        <li>
          <a href={FACEBOOK_LINK}>
            <SvgFacebook width={24} height={24} />
          </a>
        </li>
        <li>
          <a href={LINKEDIN_LINK}>
            <SvgLinkedin width={24} height={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};
