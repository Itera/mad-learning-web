export type EnvironmentVariables = {
  apiUrls: {
    madLearning: string;
  },
  webUrl: string,
  webClientId: string,
  tenantId: string,
  apiClientId: string,
};

export function getEnvironmentVariables(): EnvironmentVariables {
  return (window as any).env;
}
