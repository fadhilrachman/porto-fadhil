import { Fragment } from 'react';
import { SanitizedPublication } from '../../interfaces/sanitized-config';

const PublicationCard = ({}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  const renderPublications = () => {
    return (
      <div className="card space-y-2 text-opacity-60  font-normal text-base-content p-4 shadow-lg compact bg-base-100 cursor-pointer">
        <p>
          {' '}
          Hello, I am a Software Engineer with 2 years experiences, started
          studying programming in 2021 and started my career in 2022, my daily
          activity is working as a Fulltime Fullstack Developer and also when I
          took a job part time Freelance Web Developer
        </p>
        <p>
          {' '}
          I am very interested in the world of software development and
          committed to continuing to learn and develop in this field. I am a
          graduate of MERN fullstack Bootcamp (MongoDB, ExpressJS, ReactJS, and
          NodeJS) 4 months fullstack bootcamp at Eduwork.id. At Bootcamp this I
          learned a lot about the entire technology stack MERN, including
          MongoDB database, ExpressJS framework for the side development server,
          ReactJS framework for front-end development, and NodeJS runtime
          environment
        </p>
      </div>
    );
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
                    <span className="text-base-content opacity-70">About</span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="">{renderPublications()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;
