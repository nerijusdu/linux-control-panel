type AppConfig = {
  apiUrl: string;
};

const devConfig: AppConfig = {
  apiUrl: 'http://localhost:4200/api'
};

const prodConfig: AppConfig = {
  apiUrl: '/api'
};

const config = () => process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
