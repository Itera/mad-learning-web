export type EnvironmentVariables = {
  apiUrls: {
    madLearning: string;
  };
};

export function getEnvironmentVariables(): EnvironmentVariables {
  return (window as any).env;
}
