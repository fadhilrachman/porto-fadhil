import { useEffect, useState } from 'react';
import { CustomError, INVALID_CONFIG_ERROR } from '../constants/errors';
import { HelmetProvider } from 'react-helmet-async';
import '../assets/index.css';
import { getInitialTheme, getSanitizedConfig, setupHotjar } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import ErrorPage from './error-page';
import HeadTagEditor from './head-tag-editor';
import { DEFAULT_THEMES } from '../constants/default-themes';
import ThemeChanger from './theme-changer';
import { BG_COLOR } from '../constants';
import AvatarCard from './avatar-card';
import DetailsCard from './details-card';
import SkillCard from './skill-card';
import ExperienceCard from './experience-card';
import GithubProjectCard from './github-project-card';

import PublicationCard from './publication-card';
import LMSImg from '../assets/projects/lms.png';
import SijumImg from '../assets/projects/sijum.png';
import HRISImg from '../assets/projects/hris.png';
import ArticleImg from '../assets/projects/article.png';

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */
const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            <HeadTagEditor
              googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
              appliedTheme={theme}
            />
            <div className={`p-4 lg:p-10 min-h-full ${BG_COLOR}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {!sanitizedConfig.themeConfig.disableSwitch && (
                      <ThemeChanger
                        theme={theme}
                        setTheme={setTheme}
                        loading={loading}
                        themeConfig={sanitizedConfig.themeConfig}
                      />
                    )}
                    <AvatarCard
                      profile={{
                        name: 'Fadhil',
                        avatar: '',
                        company: 'Freelance',
                        bio: 'Frontend Developer | Backend Developer | Fullstack Developer',
                      }}
                      loading={false}
                      avatarRing={sanitizedConfig.themeConfig.displayAvatarRing}
                      resumeFileUrl={sanitizedConfig.resume.fileUrl}
                    />

                    <DetailsCard
                      profile={{
                        location: 'Bogor, Indonesia',
                        avatar: '',
                        name: 'Fadhil Rahman',
                      }}
                      loading={loading}
                      github={{ username: 'fadhilrachman' }}
                      social={{
                        linkedin: 'fadhil-rahman-856096247',
                        phone: '0881022077883',
                        email: 'muhfadhilrachman@gmail.com',
                      }}
                    />
                    <SkillCard
                      loading={loading}
                      skills={[
                        'Javascript',
                        'Typescript',
                        'React JS',
                        'Next JS',
                        'Node JS',
                        ' Express JS',
                        'Nest Js',
                        'Golang',
                        'PHP',
                        'Laravel',
                      ]}
                    />
                    <ExperienceCard
                      loading={loading}
                      experiences={[
                        {
                          from: 'August 2024',
                          to: 'March 2025',
                          position: 'Frontend Developer',
                          company: 'Arnatech',
                        },
                        {
                          from: 'Juny 2023',
                          to: 'August 2024',
                          position: 'Fullstack Developer',
                          company: 'Bahawan Integrasi Nusantara',
                        },
                        {
                          from: 'March 2022',
                          to: 'July 2022',
                          position: 'Frontend Developer',
                          company: 'Sagara Technology',
                        },
                      ]}
                    />
                    {/* {sanitizedConfig.certifications.length !== 0 && (
                      <CertificationCard
                        loading={loading}
                        certifications={sanitizedConfig.certifications}
                      />
                    )} */}
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    <PublicationCard
                      loading={loading}
                      publications={sanitizedConfig.publications}
                    />

                    <GithubProjectCard
                      header={sanitizedConfig.projects.github.header}
                      limit={sanitizedConfig.projects.github.automatic.limit}
                      githubProjects={[
                        {
                          description:
                            'Learning Management System (LMS) designed to facilitate online learning with interactive and easy to use experience',
                          github: 'https://github.com/fadhilrachman/lms-porto',
                          html_url: 'https://lms-porto.vercel.app/',
                          language: 'Fullstack',
                          name: 'Learning Management System ',
                          web: '2',
                          img: LMSImg,
                          tech_used: [
                            'Next JS',
                            'Tailwind & Next UI',
                            'Prisma',
                            'Mysql',
                          ],
                        },
                        {
                          description:
                            'Donation Web is an online donation platform that makes it easy for users to provide transparent and efficient assistance',
                          github: 'https://github.com/fadhilrachman/sijum',
                          html_url: 'https://sijum.vercel.app/',
                          language: 'Fullstack',
                          name: 'Web Donation ',
                          web: '25',
                          img: SijumImg,
                          tech_used: ['Next JS', 'ANTD', 'Express JS', 'Mysql'],
                        },
                        {
                          description:
                            'Article website with two roles: the author can manage content, while readers enjoy curated and interactive articles',
                          github:
                            'https://github.com/fadhilrachman/test_fe_seller_fadhil',
                          html_url:
                            'https://hris-backend-kappa.vercel.app/swagger/operator',
                          language: 'Fullstack',
                          name: 'ArticleHub ',
                          web: '3',
                          img: ArticleImg,
                          tech_used: [
                            'Next JS',
                            'Tailwind & Shacdn',
                            'Prisma',
                            'Mysql',
                          ],
                        },
                        {
                          description:
                            'HRIS API built with NestJS, supporting efficient employee, attendance, and leave management through structured endpoints',
                          github:
                            'https://github.com/fadhilrachman/hris_backend',
                          html_url:
                            'https://hris-backend-kappa.vercel.app/swagger/operator',
                          language: 'Backend',
                          name: 'HRIS Management ',
                          web: '2',
                          img: HRISImg,
                          tech_used: ['Nest JS', 'Prisma', 'Mysql'],
                        },
                      ]}
                      loading={loading}
                      username={sanitizedConfig.github.username}
                      googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                    />

                    {/* {sanitizedConfig.blog.display && (
                      <BlogCard
                        loading={loading}
                        googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                        blog={sanitizedConfig.blog}
                      />
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;
