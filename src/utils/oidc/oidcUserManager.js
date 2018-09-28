import { createUserManager } from "redux-oidc";
import { googleConfig, azureAdConfig } from "./oidc_config";
import { oidcProvider } from "./oidcProvider";

export const UserManager = (function() {
  let instance = null;
  return {
    getInstance: function(authProvider) {
      if (authProvider === undefined) {
        return getIdentityProvider(oidcProvider.default);
      }

      instance = getIdentityProvider(authProvider);
      function getIdentityProvider(authProvider) {
        var identityProviders = {
          Google: function() {
            return createUserManager(googleConfig);
          },
          AzureAd: function() {
            return createUserManager(azureAdConfig);
          },
          default: function() {
            if (instance != null) {
              return instance;
            }

            return createUserManager(azureAdConfig);
          }
        };

        return identityProviders[authProvider]();
      }

      return instance;
    }
  };
})();
