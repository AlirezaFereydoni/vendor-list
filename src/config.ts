// Types
type EnvironmentType = ["dev", "uat", "prod"];

interface iConfig {
  BASE_URL: string;
}

const mode: EnvironmentType = ["dev", "uat", "prod"];
const ENV = mode[0];

const environment = {
  dev: {
    BASE_URL: "https://snappfood.ir",
  },

  uat: {
    BASE_URL: "",
  },

  prod: {
    BASE_URL: "",
  },
};

const CONFIG: iConfig = environment[ENV];

export { CONFIG, ENV };
