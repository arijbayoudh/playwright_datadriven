/// <reference types="node" />
export type Environment = 'recette' | 'preprod' | 'prod';

interface EnvConfig {
  baseURL: string;
  email: string;
  password: string;
}

const ENV: Record<Environment, EnvConfig> = {
  recette: {
    baseURL: 'https://recette.demowebshop.tricentis.com/',
    email: 'arij.bayoudh@gmail.com',
    password: 'Arij2026',
  },
  preprod: {
    baseURL: 'https://preprod.demowebshop.tricentis.com/',
    email: 'arij.bayoudh@gmail.com',
    password: 'Arij2026',
  },
  prod: {
    baseURL: 'https://demowebshop.tricentis.com/',
    email: 'arij.bayoudh@gmail.com',
    password: 'Arij2026',
  },
};

export default ENV; 