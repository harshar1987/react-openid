// const scopes = ["openid", "profile","https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"];

export const googleConfig = {
  client_id:
    "393222777862-p7t7t0ie5qv7r9bqrd5por77gse7jl42.apps.googleusercontent.com",
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }/callback`,
  response_type: "token id_token",
  scope:
    "openid profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  authority: "https://accounts.google.com",
  silent_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ""}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
};
