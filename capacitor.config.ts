import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'social-media-algobulls',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
