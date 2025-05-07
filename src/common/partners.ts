import GoogleLogo from '../assets/partners/google.webp';
import FacebookLogo from '../assets/partners/facebook.png';
import AmazonLogo from '../assets/partners/amazon.webp';

export type Partner = {
  name: string;
  logo: ImageMetadata;
}

export const partners: Partner[] = [
  {
    name: 'Google',
    logo: GoogleLogo,
  },
  {
    name: 'Facebook',
    logo: FacebookLogo,
  },
  {
    name: 'Amazon',
    logo: AmazonLogo
  },
  {
    name: 'Amazon2',
    logo: AmazonLogo,
  }
];