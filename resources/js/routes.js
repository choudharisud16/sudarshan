import { createWebHistory, createRouter } from "vue-router";
import AboutSudarshan from './components/AboutSudarshan.vue';
import ContactSudarshan from './components/ContactSudarshan.vue';
import EducationSudarshan from './components/EducationSudarshan.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import ExperineceSudarshan from './components/ExperineceSudarshan.vue';
import ExtraCurricularSudarshan from './components/ExtraCurricularSudarshan.vue';
import HighlightsSudarshan from './components/HighlightsSudarshan.vue';
import LearningsSudarshan from './components/LearningsSudarshan.vue';

const history = createWebHistory();

const routes = [
  {
    name: 'AboutSudarshan',
    path: '/',
    component: AboutSudarshan
  },
  {
    name: 'ContactSudarshan',
    path: '/contact-sudarshan',
    component: ContactSudarshan
  },
  {
    name: 'EducationSudarshan',
    path: '/education-sudarshan',
    component: EducationSudarshan
  },
  {
    name: 'ExampleComponent',
    path: '/example-sudarshan',
    component: ExampleComponent
  },
  {
    name: 'ExperineceSudarshan',
    path: '/experience-sudarshan',
    component: ExperineceSudarshan
  },
  {
    name: 'ExtraCurricularSudarshan',
    path: '/extracurricular-sudarshan',
    component: ExtraCurricularSudarshan
  },
  {
    name: 'HighlightsSudarshan',
    path: '/highlights-sudarshan',
    component: HighlightsSudarshan
  },
  {
    name: 'LearningsSudarshan',
    path: '/learnings-sudarshan',
    component: LearningsSudarshan
  },
];

const router = createRouter({ history, routes});

export default router;
