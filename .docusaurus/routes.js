import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/workshops/__docusaurus/debug',
    component: ComponentCreator('/workshops/__docusaurus/debug', '249'),
    exact: true
  },
  {
    path: '/workshops/__docusaurus/debug/config',
    component: ComponentCreator('/workshops/__docusaurus/debug/config', 'c25'),
    exact: true
  },
  {
    path: '/workshops/__docusaurus/debug/content',
    component: ComponentCreator('/workshops/__docusaurus/debug/content', 'a38'),
    exact: true
  },
  {
    path: '/workshops/__docusaurus/debug/globalData',
    component: ComponentCreator('/workshops/__docusaurus/debug/globalData', '8a5'),
    exact: true
  },
  {
    path: '/workshops/__docusaurus/debug/metadata',
    component: ComponentCreator('/workshops/__docusaurus/debug/metadata', '860'),
    exact: true
  },
  {
    path: '/workshops/__docusaurus/debug/registry',
    component: ComponentCreator('/workshops/__docusaurus/debug/registry', '0a9'),
    exact: true
  },
  {
    path: '/workshops/__docusaurus/debug/routes',
    component: ComponentCreator('/workshops/__docusaurus/debug/routes', 'af6'),
    exact: true
  },
  {
    path: '/workshops/labs/collaborate-vancouver/tags',
    component: ComponentCreator('/workshops/labs/collaborate-vancouver/tags', '05c'),
    exact: true
  },
  {
    path: '/workshops/labs/collaborate-vancouver/tags/dicas',
    component: ComponentCreator('/workshops/labs/collaborate-vancouver/tags/dicas', 'b36'),
    exact: true
  },
  {
    path: '/workshops/search',
    component: ComponentCreator('/workshops/search', 'f02'),
    exact: true
  },
  {
    path: '/workshops/labs/collaborate-vancouver',
    component: ComponentCreator('/workshops/labs/collaborate-vancouver', 'fb5'),
    routes: [
      {
        path: '/workshops/labs/collaborate-vancouver/0.0-get_started/common',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/0.0-get_started/common', '57c'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/0.0-get_started/intro',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/0.0-get_started/intro', '43c'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/0.0-get_started/lab-structure',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/0.0-get_started/lab-structure', '041'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/0.0-get_started/solutions',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/0.0-get_started/solutions', 'aff'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/0.0-get_started/tips',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/0.0-get_started/tips', 'fda'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/admins-group',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/admins-group', 'dd4'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/complete',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/complete', '3f2'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/credential',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/credential', 'f5e'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/environments',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/environments', '029'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/intake',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/intake', 'f01'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/pipeline',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/pipeline', '725'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/user-provisioning',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.1-prod/user-provisioning', '125'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/collaboration',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/collaboration', 'bba'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/complete',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/complete', 'ca2'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/credential',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/credential', '9ab'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/environment',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/1.0-implementation/1.2-dev/environment', 'd94'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/build-app-from-template',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/build-app-from-template', '08e'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/build-app-from-template-v2',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/build-app-from-template-v2', 'a6b'),
        exact: true
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/collaboration-approval',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/collaboration-approval', 'a4f'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/collaboration-request',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/collaboration-request', '848'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/configure-integration',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/configure-integration', 'b31'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/deployment-approval',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/deployment-approval', '97c'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/deployment-request',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/deployment-request', '17c'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/intake',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/intake', 'b7f'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/intake-approval',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/intake-approval', 'c40'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/lab-complete',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/lab-complete', '0d5'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/2.0-simulation/overview',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/2.0-simulation/overview', '28b'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/admin-guide',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/admin-guide', 'aa5'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/aes-vs-studio',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/aes-vs-studio', '05f'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/cloning',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/cloning', 'd04'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/docs',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/docs', 'f26'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/faqs',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/faqs', '80d'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/install-reqs',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/install-reqs', 'c49'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/optional-tasks',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/optional-tasks', '64e'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/personas',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/personas', 'd64'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/3.0-additional_content/prepare-env',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/3.0-additional_content/prepare-env', '9e2'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/lab-guide-pdf',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/lab-guide-pdf', '1b4'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/Survey',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/Survey', 'a32'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops/labs/collaborate-vancouver/vancouver',
        component: ComponentCreator('/workshops/labs/collaborate-vancouver/vancouver', '41b'),
        exact: true,
        sidebar: "labaemc"
      }
    ]
  },
  {
    path: '/workshops/labs/docintel',
    component: ComponentCreator('/workshops/labs/docintel', '491'),
    routes: [
      {
        path: '/workshops/labs/docintel/configure-docintel/1-use-case',
        component: ComponentCreator('/workshops/labs/docintel/configure-docintel/1-use-case', '1b9'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/configure-docintel/2-flow',
        component: ComponentCreator('/workshops/labs/docintel/configure-docintel/2-flow', '478'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/configure-docintel/3-advanced',
        component: ComponentCreator('/workshops/labs/docintel/configure-docintel/3-advanced', 'c0d'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/design/1-locate-doc',
        component: ComponentCreator('/workshops/labs/docintel/design/1-locate-doc', '35f'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/design/2-explore-tables',
        component: ComponentCreator('/workshops/labs/docintel/design/2-explore-tables', 'dfe'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/e2e/1-submit',
        component: ComponentCreator('/workshops/labs/docintel/e2e/1-submit', '408'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/e2e/2-autofill',
        component: ComponentCreator('/workshops/labs/docintel/e2e/2-autofill', '9e2'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/e2e/3-export',
        component: ComponentCreator('/workshops/labs/docintel/e2e/3-export', '31f'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/introduction',
        component: ComponentCreator('/workshops/labs/docintel/introduction', '09d'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/lab-guide-pdf',
        component: ComponentCreator('/workshops/labs/docintel/lab-guide-pdf', '3ff'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops/labs/docintel/survey',
        component: ComponentCreator('/workshops/labs/docintel/survey', 'ccc'),
        exact: true,
        sidebar: "docintel"
      }
    ]
  },
  {
    path: '/workshops/labs/logistics',
    component: ComponentCreator('/workshops/labs/logistics', '283'),
    routes: [
      {
        path: '/workshops/labs/logistics/build_an_app/overview',
        component: ComponentCreator('/workshops/labs/logistics/build_an_app/overview', 'a16'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/build_an_app/purpose',
        component: ComponentCreator('/workshops/labs/logistics/build_an_app/purpose', '6ef'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/build_an_app/section1',
        component: ComponentCreator('/workshops/labs/logistics/build_an_app/section1', '273'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/build_an_app/section2',
        component: ComponentCreator('/workshops/labs/logistics/build_an_app/section2', '610'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/get_started/goals',
        component: ComponentCreator('/workshops/labs/logistics/get_started/goals', 'd77'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/get_started/overview',
        component: ComponentCreator('/workshops/labs/logistics/get_started/overview', 'f4d'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/get_started/setup',
        component: ComponentCreator('/workshops/labs/logistics/get_started/setup', '78b'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/get_started/usecase',
        component: ComponentCreator('/workshops/labs/logistics/get_started/usecase', 'fe9'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops/labs/logistics/utah',
        component: ComponentCreator('/workshops/labs/logistics/utah', 'ada'),
        exact: true
      }
    ]
  },
  {
    path: '/workshops/labs/rpa',
    component: ComponentCreator('/workshops/labs/rpa', 'b8d'),
    routes: [
      {
        path: '/workshops/labs/rpa/finish',
        component: ComponentCreator('/workshops/labs/rpa/finish', '142'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops/labs/rpa/introduction',
        component: ComponentCreator('/workshops/labs/rpa/introduction', '258'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops/labs/rpa/lab-guide-pdf',
        component: ComponentCreator('/workshops/labs/rpa/lab-guide-pdf', '455'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops/labs/rpa/review-app',
        component: ComponentCreator('/workshops/labs/rpa/review-app', '582'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops/labs/rpa/rpa-design',
        component: ComponentCreator('/workshops/labs/rpa/rpa-design', '867'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops/labs/rpa/rpa-hub',
        component: ComponentCreator('/workshops/labs/rpa/rpa-hub', '822'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops/labs/rpa/survey',
        component: ComponentCreator('/workshops/labs/rpa/survey', '893'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops/labs/rpa/vm-connect',
        component: ComponentCreator('/workshops/labs/rpa/vm-connect', '506'),
        exact: true,
        sidebar: "rpa"
      }
    ]
  },
  {
    path: '/workshops/labs/spokegen',
    component: ComponentCreator('/workshops/labs/spokegen', '509'),
    routes: [
      {
        path: '/workshops/labs/spokegen/create-the-spoke',
        component: ComponentCreator('/workshops/labs/spokegen/create-the-spoke', 'b88'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/lab-guide-pdf',
        component: ComponentCreator('/workshops/labs/spokegen/lab-guide-pdf', '0be'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/optional-lab-section-1',
        component: ComponentCreator('/workshops/labs/spokegen/optional-lab-section-1', '5a1'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/optional-lab-section-2',
        component: ComponentCreator('/workshops/labs/spokegen/optional-lab-section-2', '9af'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/overview',
        component: ComponentCreator('/workshops/labs/spokegen/overview', '09b'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/Survey',
        component: ComponentCreator('/workshops/labs/spokegen/Survey', '629'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/test-the-spoke',
        component: ComponentCreator('/workshops/labs/spokegen/test-the-spoke', '9ff'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/use-case',
        component: ComponentCreator('/workshops/labs/spokegen/use-case', 'e85'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/use-spoke-in-a-flow',
        component: ComponentCreator('/workshops/labs/spokegen/use-spoke-in-a-flow', '96d'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops/labs/spokegen/vancouver',
        component: ComponentCreator('/workshops/labs/spokegen/vancouver', 'a41'),
        exact: true,
        sidebar: "spokegen"
      }
    ]
  },
  {
    path: '/workshops/labs/telework-201_vancouver',
    component: ComponentCreator('/workshops/labs/telework-201_vancouver', 'ce1'),
    routes: [
      {
        path: '/workshops/labs/telework-201_vancouver/CHANGELOG',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/CHANGELOG', '11e'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Conclusion',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Conclusion', 'ff8'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Flow',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Flow', '24a'),
        exact: true
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Flow/Create-Decision-Table',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Flow/Create-Decision-Table', '3b2'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Flow/Create-People-Finder-Spoke',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Flow/Create-People-Finder-Spoke', '58f'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Flow/Modify-Main-Flow',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Flow/Modify-Main-Flow', '04d'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Governance',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Governance', 'c4f'),
        exact: true
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Governance/Securely-Expand',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Governance/Securely-Expand', 'c3c'),
        exact: true
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Introduction/Import-App',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Introduction/Import-App', '3f9'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Introduction/Overview',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Introduction/Overview', 'd8b'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Introduction/takeoff',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Introduction/takeoff', '2a4'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Introduction/vancouver',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Introduction/vancouver', 'b20'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/lab-guide-pdf',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/lab-guide-pdf', 'e65'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Portal',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Portal', '8f8'),
        exact: true
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Portal/3.1 Branding',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Portal/3.1 Branding', 'f19'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Portal/3.2 Add a Widget',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Portal/3.2 Add a Widget', 'a17'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Portal/3.3 Create a Widget',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Portal/3.3 Create a Widget', 'd08'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Smarter-Forms',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Smarter-Forms', '0b2'),
        exact: true
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Smarter-Forms/Playbook',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Smarter-Forms/Playbook', '738'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Smarter-Forms/Record-Producer',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Smarter-Forms/Record-Producer', 'bde'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-201_vancouver/Survey',
        component: ComponentCreator('/workshops/labs/telework-201_vancouver/Survey', '744'),
        exact: true,
        sidebar: "teleworkvancouver"
      }
    ]
  },
  {
    path: '/workshops/labs/telework-vancouver-101',
    component: ComponentCreator('/workshops/labs/telework-vancouver-101', '404'),
    routes: [
      {
        path: '/workshops/labs/telework-vancouver-101/0.0-introduction/app-engine-overview',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/0.0-introduction/app-engine-overview', 'de5'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/0.0-introduction/lab-goals',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/0.0-introduction/lab-goals', '3b9'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/0.0-introduction/planning',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/0.0-introduction/planning', '7eb'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/0.0-introduction/takeoff',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/0.0-introduction/takeoff', 'd49'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/0.0-introduction/use-case',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/0.0-introduction/use-case', '32e'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/configure-telework-form',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/configure-telework-form', '8ea'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-app',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-app', 'a4b'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-telework-case-table',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-telework-case-table', '353'),
        exact: true
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/import-data',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/import-data', '2c8'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/overview',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/overview', 'ea8'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/review',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/review', 'adf'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/review-input-data',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/review-input-data', 'dbe'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/table-builder-data',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/1.0-Build-the-Foundation/table-builder-data', '2fb'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/configure-record-producer',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/configure-record-producer', '224'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/create-record-producer',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/create-record-producer', '3cb'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/overview',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/overview', '75c'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-aes',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-aes', '4fe'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-portal',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-portal', '488'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/review',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/2.0-The-User-Experience/review', '723'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/3.0-Automate-Work/create-workflow',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/3.0-Automate-Work/create-workflow', 'f71'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/3.0-Automate-Work/overview',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/3.0-Automate-Work/overview', '772'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/3.0-Automate-Work/review',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/3.0-Automate-Work/review', '0c7'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/3.0-Automate-Work/test-workflow',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/3.0-Automate-Work/test-workflow', 'a24'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/4.0-Manage-Work/configure-dashboard',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/4.0-Manage-Work/configure-dashboard', '96f'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/4.0-Manage-Work/configure-lists',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/4.0-Manage-Work/configure-lists', '36c'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/4.0-Manage-Work/create',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/4.0-Manage-Work/create', '429'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/4.0-Manage-Work/overview',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/4.0-Manage-Work/overview', '140'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/4.0-Manage-Work/review',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/4.0-Manage-Work/review', '135'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/4.0-Manage-Work/use',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/4.0-Manage-Work/use', 'dca'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/5.0-conclusion/appendix',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/5.0-conclusion/appendix', '334'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/5.0-conclusion/lab-review',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/5.0-conclusion/lab-review', 'c2f'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/5.0-conclusion/resources',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/5.0-conclusion/resources', 'c67'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/6.0-Bonus/Create-People-Finder-Spoke',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/6.0-Bonus/Create-People-Finder-Spoke', '5d5'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/CHANGELOG',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/CHANGELOG', '4e6'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/lab-guide-pdf',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/lab-guide-pdf', '8d2'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/Survey',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/Survey', '0e5'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops/labs/telework-vancouver-101/vancouver',
        component: ComponentCreator('/workshops/labs/telework-vancouver-101/vancouver', '9b5'),
        exact: true,
        sidebar: "teleworkvancouver"
      }
    ]
  },
  {
    path: '/workshops/',
    component: ComponentCreator('/workshops/', 'c86'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
