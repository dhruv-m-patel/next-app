export function getEnvironmentVariables() {
  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    host: process.env.HOST || 'http://localhost:3000',
  };
}
