import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {siteConfig.title}
        </h1>
        <p className="text-xl md:text-2xl text-green-100 mb-8">
          {siteConfig.tagline}
        </p>
        <div className="flex justify-center">
          <Link
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to my documentation site">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}