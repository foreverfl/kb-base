import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import { GitHubNavbarItem } from '@site/src/components/Navbar';

// Extend the original ComponentTypes with custom navbar items
export default {
  ...ComponentTypes,
  'custom-githubIcon': GitHubNavbarItem,
};