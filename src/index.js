import * as singleSpa from 'single-spa';
import { registerApp } from './register';
import './common-deps';

async function bootstrap() {
  const config = await getProjectConfig();
  config.projects.forEach(project => {
    registerApp({
      name: project.name,
      main: project.main,
      url: project.url,
      base: project.base,
      path: project.path
    });
  });
  singleSpa.start();
}

async function getProjectConfig() {
  return (await import('../project.config')).default;
}

bootstrap();
