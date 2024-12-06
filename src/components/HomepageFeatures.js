import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { faArrowRight, faDiagramProject, faFileInvoice, faHouseLaptop, faHouseUser, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faUsers, faCog, faPlane, faRobot, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';


const HomepageFeatures = () => (
  <div className={clsx('container max-w-xl mx-auto px-4 md:px-6 md:py-7 lg:px-8 lg:py-9 lg:max-w-screen-xl pt-4 md:pt-6 lg:pt-8 ')}>
      <ul className={clsx('grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 md:col-gap-6 lg:col-gap-8 lg:grid lg:gap-y-50')}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
  </div>
);

const Feature = ({ title, description, to, icon, target }) => (
  <li className={clsx('p-6 md:mt-6 lg:mt-8 pb-2 md:pb-2 lg:pb-2')}>
    <div className={clsx('flex')}>
        <div className={clsx('flex-shrink-0')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <div className={clsx('flex items-center justify-center h-10 w-10 rounded-md bg-nowinfblue-100 hover:bg-nowinfblue-200 text-nowwasabi hover:text-nowwasabi/70 dark:bg-nowwasabi dark:hover:bg-nowwasabi/70 dark:text-white dark:hover:text-white')}>
            <FontAwesomeIcon className={clsx('')} icon={icon} alt={title} />
            </div>
          </Link>
        </div>
        <div className={clsx('ml-4 mr-4')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <h4 className={clsx('text-xl leading-6 font-extrabold text-nowinfblue-100 hover:text-nowwasabi dark:text-white dark:hover:text-white/70')}>
              {title}
            </h4>
            <p className={clsx('text-md mt-2 leading-6 text-nowinfblue-100 hover:text-nowwasabi dark:text-nowwasabi dark:hover:text-nowwasabi/70')}>
              {description}
            </p>
          </Link>
        </div>
    </div>
  </li>
);

export default HomepageFeatures;

const FeatureList = [

  {
    title: 'Gestión de Casos de Teletrabajo',
    icon: faHouseUser,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine Studio (AES)</div><br/><strong>Nivel 1 - </strong>Gana experiencia valiosa a través de ejercicios prácticos con el App Engine Studio.
      </>
    ),
    to: 'labs/underconstruction/underconstruction',
    target: '_self',
  },

  {
    title: 'Gestión de Casos de Teletrabajo',
    icon: faHouseUser,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine Studio (AES)</div><br/><strong>Nivel 2 - </strong>Profundiza en el caso de uso explorando recursos más avanzados.
      </>
    ),
    to: 'labs/underconstruction/underconstruction',
    target: '_self',
  },

  {
    title: 'Colabora para Acelerar',
    icon: faPeopleGroup,
    description: (
      <>
      <div class="button-homepage-vancouver">📊 App Engine Management Center (AEMC)</div><br/>Aprende a gestionar aplicaciones low-code con el Centro de Gestión del App Engine.
      </>
    ),
    to: 'labs/underconstruction/underconstruction',
    target: '_self',
  },

  {
    title: 'IHub: Generador de Spokes',
    icon: faDiagramProject,
    description: (
      <>
      <div class="button-homepage-vancouver">🧩 Integration Hub</div><br/>Obtén más información sobre la función más reciente del Integration Hub: Generador de Spokes.
      </>
    ),
    to: 'labs/underconstruction/underconstruction',
    target: '_self',
  },

  {
    title: 'RPA Hub: Robotic Process Automation',
    icon: faRobot,
    description: (
      <>
      <div class="button-homepage-vancouver">⚙️ Automation Engine</div><br/>Obtén más información sobre el proceso de Automatización de Procesos de ServiceNow.
      </>
    ),
    to: 'labs/underconstruction/underconstruction',
    target: '_self',
  },

  {
    title: 'DocIntel: Document Intelligence',
    icon: faFileInvoice,
    description: (
      <>
      <div class="button-homepage-vancouver">⚙️ Automation Engine</div><br/>Automatiza tus flujos de trabajo basados en documentos con la Inteligencia Documental.
      </>
    ),
    to: 'labs/underconstruction/underconstruction',
    target: '_self',
  }

];
