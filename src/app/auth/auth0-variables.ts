interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'YPNie2nJxCFEoLcvKzXTs28kJKkP4kji',
  domain: 'dev-7i-1swum.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
