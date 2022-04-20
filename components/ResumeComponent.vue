<template>
  <div>
    <span class="bg-primary flex pt-8 pb-40"> </span>
    <div>
      <div class="flex justify-center" data-aos="zoom-in">
        <img
          class="rounded-full transform -translate-y-2/4"
          src="~/assets/qimo.jpg"
          alt="image of qimo"
          width="250"
        />
      </div>
    </div>
    <div>
      <div class="flex flex-col items-center transform -translate-y-28">
        <h1 class="text-2xl" data-aos="zoom-in">Qi Mo Lin</h1>
        <p class="text-xl text-primary" data-aos="zoom-in">
          Software Developer
        </p>
      </div>
      <div class="block sm:flex sm:flex-grow transform -translate-y-20 mx-8">
        <div class="flex w-full justify-center">
          <div class="flex flex-col w-4/5 sm:w-2/5">
            <section data-aos="fade-right">
              <h2 class="text-xl text-primary mb-2">Objective</h2>
              <p class="mb-4">
                What I am looking for in a side job, is a flexible working place
                where I can apply my current knowledge, and continue learning
                alongside my studies.
              </p>
            </section>
            <section class="mb-4" data-aos="fade-right">
              <h2 class="text-xl text-primary mb-2">Skills</h2>
              <SkillsComponent
                v-for="skill in skills"
                :key="skill.name"
                :name="skill.name"
                :circles="skill.circles"
              />
            </section>
            <section class="mb-4" data-aos="fade-right">
              <h2 id="projects" class="text-xl text-primary mb-2">Projects</h2>
              <ul>
                <li
                  v-for="project in projects"
                  :key="project.name"
                  class="list-disc"
                >
                  {{ project.name }}
                </li>
              </ul>
            </section>
            <section class="mb-4" data-aos="fade-right">
              <h2 class="text-xl text-primary mb-2">Languages</h2>
              <ul>
                <li
                  v-for="language in languages"
                  :key="language"
                  class="list-disc"
                >
                  {{ language }}
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div class="flex w-full justify-center">
          <div class="flex flex-col w-4/5 sm:w-2/5">
            <section class="mb-4">
              <h2 class="text-xl text-primary mb-2" data-aos="fade-left">
                Work experience
              </h2>
              <WorkExperience
                v-for="work_experience in work_experiences"
                :key="work_experience.companyName"
                class="mb-2"
                data-aos="fade-left"
                :job-role="work_experience.jobRole"
                :company-name="work_experience.companyName"
                :start-date="work_experience.startDate"
                :end-date="work_experience.endDate"
                :bullet-points="work_experience.bulletPoints"
              />
            </section>
            <section>
              <h2 class="text-xl text-primary mb-2" data-aos="fade-left">
                Education
              </h2>
              <EducationComponent
                v-for="education in educations"
                :key="education.universityName"
                class="mb-4"
                data-aos="fade-left"
                :university-name="education.universityName"
                :major="education.major"
                :start-date="education.startDate"
                :location="education.location"
                :end-date="education.endDate"
                :bullet-points="education.bulletPoints"
              />
            </section>
          </div>
        </div>
      </div>
      <div id="contact" class="flex justify-center transform -translate-y-12">
        <section data-aos="fade-up">
          <h2 class="text-2xl text-primary mb-2">Send me an email</h2>
          <ul>
            <li class="flex items-center">
              <a class="text-2xl text-secondary" href="mailto:info@qimolin.com">
                <fa :icon="['fas', 'envelope']" />
              </a>
              <span class="text-lg ml-2 mb-1">info@qimolin.com</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    skills: [
      { name: 'JavaScript', circles: 5 },
      { name: 'VueJS', circles: 5 },
      { name: 'OO Design', circles: 4 },
      { name: 'C#', circles: 5 },
      { name: 'HTML5', circles: 4 },
      { name: 'CSS3', circles: 3 },
      { name: 'SQL', circles: 3 },
      { name: 'NoSQL', circles: 2 },
      { name: 'REST', circles: 4 },
      { name: 'Git', circles: 4 },
      { name: 'Agile & SCRUM', circles: 4 },
      { name: 'Python', circles: 3 },
      { name: 'PHP', circles: 2 },
      { name: 'Wordpress', circles: 2 },
      { name: 'C++', circles: 2 },
    ],

    projects: [
      { name: 'This website (Nuxt and TailwindCSS)' },
      { name: 'Chat app (Vue2 with Quasar)' },
      { name: 'Condominium management app (Angular with material)' },
      { name: 'Airport luggage belt simulation (C# Windows form)' },
      {
        name: 'Festival ticketing and consumables purchasing (C# Windows form)',
      },
    ],

    work_experiences: [
      {
        jobRole: 'Frontend Developer (intern)',
        companyName: 'Sogeti',
        startDate: 'February 2022',
        endDate: 'July 2022',
        bulletPoints: [
          'Building a cross platform sports challenges app',
          'Quasar, Vue3, Pinia, Typescript, Vite, Gitlab CI with dockerized runner, and Firebase',
        ],
      },
      {
        jobRole: 'Full-stack Developer',
        companyName: 'DOEN Horeca uitzendbureau',
        startDate: 'March 2021',
        endDate: 'present',
        bulletPoints: [
          'Built recruitment system from the ground up',
          'Vue2 with Vuetify, ExpressJS with Sequelize, MariaDB, and Docker',
          'Implementing features, fixing bugs',
        ],
      },
      {
        jobRole: 'Software Engineer (intern)',
        companyName: 'DAF Trucks N.V.',
        startDate: 'September 2020',
        endDate: 'January 2021',
        bulletPoints: [
          'Researched how to display Simulink models in Bitbucket',
        ],
      },
    ],

    educations: [
      {
        universityName: 'Fontys University of Applied Sciences',
        major: 'BSc in ICT & Software Engineering',
        startDate: 'September 2018',
        endDate: 'July 2022',
        location: 'Eindhoven, The Netherlands',
        bulletPoints: [
          'Taking up specialization courses in cyber security',
          'Taking up electives in image processing, logic engineering, test-driven development, data warehousing, C, and C++',
        ],
      },
      {
        universityName: 'Haaga-Helia University of Applied Sciences',
        major: 'Exchange semester in Business IT',
        startDate: 'August 2021',
        endDate: 'December 2021',
        location: 'Helsinki, Finland',
        bulletPoints: [
          'Taking up courses in SAP ERP, project management, Internationalization & Globalization, self marketing',
          'Taking up a an IoT project',
        ],
      },
    ],

    languages: [
      'Dutch (mother tongue, C2)',
      'English (fluent, C2)',
      'Mandarin (listening)',
      'French (listening)',
      'German (listening)',
    ],
  }),
}
</script>
