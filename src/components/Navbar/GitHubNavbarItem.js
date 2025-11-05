import React from 'react';
import Link from '@docusaurus/Link';

export default function GitHubNavbarItem() {
  return (
    <Link
      href="https://github.com/foreverfl/kb-base"
      target="_blank"
      rel="noopener noreferrer"
      className="navbar__item navbar__link header-github-link"
      aria-label="GitHub repository"
    >
      <span />
    </Link>
  );
}