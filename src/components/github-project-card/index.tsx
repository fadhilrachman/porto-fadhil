import { Fragment } from 'react';
import { skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';
import { FaGithub } from 'react-icons/fa';
import { CgLink } from 'react-icons/cg';
const GithubProjectCard = ({
  githubProjects,
  loading,
  limit,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <div className="card shadow-lg compact bg-base-100" key={index}>
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <img src={item.img || '/placeholder.svg'} alt={item.name} />
            <div className="flex items-center truncate mt-2">
              <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                <span>{item.name}</span>
                <span className="text-xs text-opacity-60 font-normal">
                  #{item.language}
                </span>
              </div>
            </div>
            <p className="mb-3 mt-1 text-base-content text-opacity-60 text-sm">
              {item.description}
            </p>

            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {item.tech_used.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
            <div className="flex flex-grow justify-end space-x-3">
              <a
                href={item.github}
                target="_blank"
                className="btn btn-outline rounded-full btn-sm text-xs opacity-50"
                download
                rel="noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={item.html_url}
                target="_blank"
                className="btn btn-outline rounded-full btn-sm text-xs opacity-50"
                download
                rel="noreferrer"
              >
                <CgLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-base-content opacity-70">
                      My Personal Projects
                    </span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
