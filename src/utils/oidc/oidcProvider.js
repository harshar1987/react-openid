function OidcProvider() {
  (this.Google = "Google"),
    (this.AzureAd = "AzureAd"),
    (this.default = "default"),
    (this.isOidcProvider = function(authProvider) {
      return authProvider instanceof OidcProvider;
    });
}

let oidcProvider = new OidcProvider();
Object.freeze(oidcProvider);

export { oidcProvider };
