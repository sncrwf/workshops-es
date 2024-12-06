import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/workshops-es/labs/collaborate-vancouver/tags',
    component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/tags', '58d'),
    exact: true
  },
  {
    path: '/workshops-es/labs/collaborate-vancouver/tags/dicas',
    component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/tags/dicas', '803'),
    exact: true
  },
  {
    path: '/workshops-es/search',
    component: ComponentCreator('/workshops-es/search', '441'),
    exact: true
  },
  {
    path: '/workshops-es/labs/collaborate-vancouver',
    component: ComponentCreator('/workshops-es/labs/collaborate-vancouver', 'e41'),
    routes: [
      {
        path: '/workshops-es/labs/collaborate-vancouver/0.0-get_started/common',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/0.0-get_started/common', '371'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/0.0-get_started/intro',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/0.0-get_started/intro', 'aec'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/0.0-get_started/lab-structure',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/0.0-get_started/lab-structure', 'cea'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/0.0-get_started/solutions',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/0.0-get_started/solutions', '2e6'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/0.0-get_started/tips',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/0.0-get_started/tips', '3ff'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/admins-group',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/admins-group', 'bea'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/complete',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/complete', '0f7'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/credential',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/credential', '37f'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/environments',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/environments', '643'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/intake',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/intake', 'dd5'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/pipeline',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/pipeline', '7a8'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/user-provisioning',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.1-prod/user-provisioning', '245'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/collaboration',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/collaboration', '284'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/complete',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/complete', 'a7c'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/credential',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/credential', '865'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/environment',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/1.0-implementation/1.2-dev/environment', '5e3'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/build-app-from-template',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/build-app-from-template', '0c8'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/collaboration-approval',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/collaboration-approval', '924'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/collaboration-request',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/collaboration-request', '008'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/configure-integration',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/configure-integration', 'd86'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/deployment-approval',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/deployment-approval', 'ee2'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/deployment-request',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/deployment-request', 'b59'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/intake',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/intake', 'ff4'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/intake-approval',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/intake-approval', '368'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/lab-complete',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/lab-complete', '63b'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/2.0-simulation/overview',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/2.0-simulation/overview', 'f52'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/admin-guide',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/admin-guide', '1b4'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/aes-vs-studio',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/aes-vs-studio', 'ef7'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/cloning',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/cloning', '9c7'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/docs',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/docs', '8f9'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/faqs',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/faqs', '425'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/install-reqs',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/install-reqs', '4e1'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/optional-tasks',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/optional-tasks', '853'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/personas',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/personas', '9d8'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/3.0-additional_content/prepare-env',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/3.0-additional_content/prepare-env', 'cc4'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/lab-guide-pdf',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/lab-guide-pdf', '148'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/Survey',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/Survey', 'ec4'),
        exact: true,
        sidebar: "labaemc"
      },
      {
        path: '/workshops-es/labs/collaborate-vancouver/vancouver',
        component: ComponentCreator('/workshops-es/labs/collaborate-vancouver/vancouver', 'bdb'),
        exact: true,
        sidebar: "labaemc"
      }
    ]
  },
  {
    path: '/workshops-es/labs/docintel',
    component: ComponentCreator('/workshops-es/labs/docintel', '441'),
    routes: [
      {
        path: '/workshops-es/labs/docintel/configure-docintel/1-use-case',
        component: ComponentCreator('/workshops-es/labs/docintel/configure-docintel/1-use-case', 'e38'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/configure-docintel/2-flow',
        component: ComponentCreator('/workshops-es/labs/docintel/configure-docintel/2-flow', '9ee'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/configure-docintel/3-advanced',
        component: ComponentCreator('/workshops-es/labs/docintel/configure-docintel/3-advanced', 'acd'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/design/1-locate-doc',
        component: ComponentCreator('/workshops-es/labs/docintel/design/1-locate-doc', '7d8'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/design/2-explore-tables',
        component: ComponentCreator('/workshops-es/labs/docintel/design/2-explore-tables', 'bb5'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/e2e/1-submit',
        component: ComponentCreator('/workshops-es/labs/docintel/e2e/1-submit', '3dc'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/e2e/2-autofill',
        component: ComponentCreator('/workshops-es/labs/docintel/e2e/2-autofill', 'ec1'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/e2e/3-export',
        component: ComponentCreator('/workshops-es/labs/docintel/e2e/3-export', 'c1b'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/introduction',
        component: ComponentCreator('/workshops-es/labs/docintel/introduction', '837'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/lab-guide-pdf',
        component: ComponentCreator('/workshops-es/labs/docintel/lab-guide-pdf', '234'),
        exact: true,
        sidebar: "docintel"
      },
      {
        path: '/workshops-es/labs/docintel/survey',
        component: ComponentCreator('/workshops-es/labs/docintel/survey', '6fc'),
        exact: true,
        sidebar: "docintel"
      }
    ]
  },
  {
    path: '/workshops-es/labs/logistics',
    component: ComponentCreator('/workshops-es/labs/logistics', '71e'),
    routes: [
      {
        path: '/workshops-es/labs/logistics/get_started/overview',
        component: ComponentCreator('/workshops-es/labs/logistics/get_started/overview', '502'),
        exact: true,
        sidebar: "logistics"
      },
      {
        path: '/workshops-es/labs/logistics/utah',
        component: ComponentCreator('/workshops-es/labs/logistics/utah', 'ce3'),
        exact: true
      }
    ]
  },
  {
    path: '/workshops-es/labs/rpa',
    component: ComponentCreator('/workshops-es/labs/rpa', '916'),
    routes: [
      {
        path: '/workshops-es/labs/rpa/finish',
        component: ComponentCreator('/workshops-es/labs/rpa/finish', '793'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops-es/labs/rpa/introduction',
        component: ComponentCreator('/workshops-es/labs/rpa/introduction', 'dca'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops-es/labs/rpa/lab-guide-pdf',
        component: ComponentCreator('/workshops-es/labs/rpa/lab-guide-pdf', 'ba4'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops-es/labs/rpa/review-app',
        component: ComponentCreator('/workshops-es/labs/rpa/review-app', '115'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops-es/labs/rpa/rpa-design',
        component: ComponentCreator('/workshops-es/labs/rpa/rpa-design', '282'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops-es/labs/rpa/rpa-hub',
        component: ComponentCreator('/workshops-es/labs/rpa/rpa-hub', '664'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops-es/labs/rpa/survey',
        component: ComponentCreator('/workshops-es/labs/rpa/survey', 'fe3'),
        exact: true,
        sidebar: "rpa"
      },
      {
        path: '/workshops-es/labs/rpa/vm-connect',
        component: ComponentCreator('/workshops-es/labs/rpa/vm-connect', 'd81'),
        exact: true,
        sidebar: "rpa"
      }
    ]
  },
  {
    path: '/workshops-es/labs/spokegen',
    component: ComponentCreator('/workshops-es/labs/spokegen', 'e6d'),
    routes: [
      {
        path: '/workshops-es/labs/spokegen/create-the-spoke',
        component: ComponentCreator('/workshops-es/labs/spokegen/create-the-spoke', '04a'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/lab-guide-pdf',
        component: ComponentCreator('/workshops-es/labs/spokegen/lab-guide-pdf', '242'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/optional-lab-section-1',
        component: ComponentCreator('/workshops-es/labs/spokegen/optional-lab-section-1', '704'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/optional-lab-section-2',
        component: ComponentCreator('/workshops-es/labs/spokegen/optional-lab-section-2', 'f9f'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/overview',
        component: ComponentCreator('/workshops-es/labs/spokegen/overview', '826'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/Survey',
        component: ComponentCreator('/workshops-es/labs/spokegen/Survey', 'e3e'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/test-the-spoke',
        component: ComponentCreator('/workshops-es/labs/spokegen/test-the-spoke', '46a'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/use-case',
        component: ComponentCreator('/workshops-es/labs/spokegen/use-case', '7a1'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/use-spoke-in-a-flow',
        component: ComponentCreator('/workshops-es/labs/spokegen/use-spoke-in-a-flow', '39b'),
        exact: true,
        sidebar: "spokegen"
      },
      {
        path: '/workshops-es/labs/spokegen/vancouver',
        component: ComponentCreator('/workshops-es/labs/spokegen/vancouver', 'a7a'),
        exact: true,
        sidebar: "spokegen"
      }
    ]
  },
  {
    path: '/workshops-es/labs/telework-201_vancouver',
    component: ComponentCreator('/workshops-es/labs/telework-201_vancouver', 'e19'),
    routes: [
      {
        path: '/workshops-es/labs/telework-201_vancouver/CHANGELOG',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/CHANGELOG', '8c5'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Conclusion',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Conclusion', '7a6'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Flow',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Flow', '303'),
        exact: true
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Flow/Create-Decision-Table',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Flow/Create-Decision-Table', '3ad'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Flow/Create-People-Finder-Spoke',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Flow/Create-People-Finder-Spoke', 'cd9'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Flow/Modify-Main-Flow',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Flow/Modify-Main-Flow', 'b04'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Governance',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Governance', 'a4e'),
        exact: true
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Governance/Securely-Expand',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Governance/Securely-Expand', '1ab'),
        exact: true
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Introduction/Import-App',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Introduction/Import-App', 'ac5'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Introduction/Overview',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Introduction/Overview', 'fa7'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Introduction/takeoff',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Introduction/takeoff', '07c'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Introduction/vancouver',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Introduction/vancouver', '6c8'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/lab-guide-pdf',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/lab-guide-pdf', '8c2'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Portal',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Portal', 'aa4'),
        exact: true
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Portal/3.1 Branding',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Portal/3.1 Branding', 'fef'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Portal/3.2 Add a Widget',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Portal/3.2 Add a Widget', '187'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Portal/3.3 Create a Widget',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Portal/3.3 Create a Widget', 'fc5'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Smarter-Forms',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Smarter-Forms', '9fb'),
        exact: true
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Smarter-Forms/Playbook',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Smarter-Forms/Playbook', 'afb'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Smarter-Forms/Record-Producer',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Smarter-Forms/Record-Producer', '551'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-201_vancouver/Survey',
        component: ComponentCreator('/workshops-es/labs/telework-201_vancouver/Survey', '122'),
        exact: true,
        sidebar: "teleworkvancouver"
      }
    ]
  },
  {
    path: '/workshops-es/labs/telework-vancouver-101',
    component: ComponentCreator('/workshops-es/labs/telework-vancouver-101', '13d'),
    routes: [
      {
        path: '/workshops-es/labs/telework-vancouver-101/0.0-introduction/app-engine-overview',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/0.0-introduction/app-engine-overview', 'a56'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/0.0-introduction/lab-goals',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/0.0-introduction/lab-goals', '631'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/0.0-introduction/planning',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/0.0-introduction/planning', 'a76'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/0.0-introduction/takeoff',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/0.0-introduction/takeoff', 'bfe'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/0.0-introduction/use-case',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/0.0-introduction/use-case', '5a4'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/configure-telework-form',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/configure-telework-form', '779'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-app',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-app', '2bd'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-telework-case-table',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/create-telework-case-table', 'c4f'),
        exact: true
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/import-data',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/import-data', 'b21'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/overview',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/overview', '347'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/review',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/review', '583'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/review-input-data',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/review-input-data', 'fae'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/table-builder-data',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/1.0-Build-the-Foundation/table-builder-data', 'c74'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/configure-record-producer',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/configure-record-producer', '89e'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/create-record-producer',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/create-record-producer', '83d'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/overview',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/overview', '18e'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-aes',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-aes', '17c'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-portal',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/preview-in-portal', '23e'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/review',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/2.0-The-User-Experience/review', 'f82'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/create-workflow',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/create-workflow', 'c29'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/overview',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/overview', '1e0'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/review',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/review', '8b5'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/test-workflow',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/3.0-Automate-Work/test-workflow', '55a'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/configure-dashboard',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/configure-dashboard', '006'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/configure-lists',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/configure-lists', '879'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/create',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/create', 'eb1'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/overview',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/overview', 'f9d'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/review',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/review', '1a9'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/use',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/4.0-Manage-Work/use', 'b87'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/5.0-conclusion/appendix',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/5.0-conclusion/appendix', '23f'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/5.0-conclusion/lab-review',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/5.0-conclusion/lab-review', '631'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/5.0-conclusion/resources',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/5.0-conclusion/resources', 'fc2'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/6.0-Bonus/Create-People-Finder-Spoke',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/6.0-Bonus/Create-People-Finder-Spoke', '443'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/CHANGELOG',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/CHANGELOG', '850'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/lab-guide-pdf',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/lab-guide-pdf', '4ae'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/Survey',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/Survey', '366'),
        exact: true,
        sidebar: "teleworkvancouver"
      },
      {
        path: '/workshops-es/labs/telework-vancouver-101/vancouver',
        component: ComponentCreator('/workshops-es/labs/telework-vancouver-101/vancouver', '817'),
        exact: true,
        sidebar: "teleworkvancouver"
      }
    ]
  },
  {
    path: '/workshops-es/',
    component: ComponentCreator('/workshops-es/', 'fc7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
