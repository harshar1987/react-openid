// const scopes = ["openid", "profile"];

export const azureAdConfig = {
  client_id: "df4d398c-3851-46a7-97f7-7a4554db041a",
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }/callback`,
  response_type: "id_token",
  scope: "openid profile",
  post_logout_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ""}/`,
  authority:
    "https://login.microsoftonline.com/cbede638-a3d9-459f-8f4e-24ced73b4e5e/",
  silent_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ""}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  metadata: {
    issuer: "https://sts.windows.net/cbede638-a3d9-459f-8f4e-24ced73b4e5e/",
    jwks_uri:
      "https://login.microsoftonline.com/cbede638-a3d9-459f-8f4e-24ced73b4e5e/discovery/keys",
    end_session_endpoint:
      "https://login.microsoftonline.com/cbede638-a3d9-459f-8f4e-24ced73b4e5e/oauth2/logout",
    authorization_endpoint:
      "https://login.microsoftonline.com/cbede638-a3d9-459f-8f4e-24ced73b4e5e/oauth2/authorize"
  },
  signingKeys: [
    {
      kty: "RSA",
      use: "sig",
      kid: "7_Zuf1tvkwLxYaHS3q6lUjUYIGw",
      x5t: "7_Zuf1tvkwLxYaHS3q6lUjUYIGw",
      n:
        "vVzG98jfA-7UcUZkvrCdId9ypfoOW97MsXXBupSzr8NLkaHG28eTr72crI24KPOeQQqqXptMiCdRu9M-vRRQpreF7Or8P2eQa7ipfwtU41VaRvneaOc3jmWdV84uHpVDsnz_1S3_JtueFyfZrXa9aJHRzrz31OC1Gn6LRuRP11iX7f_B8_z5sGqaiXCejvKiO_8PEzPzqbOFLuVbqZL3PNi12zLogdwXY_1chpzZNo_R59SkutBjzXC5MTeBSHazqPu2o0ftoorY80C7Fe3Ia1n2v5uDSAysNddUonKVA72bhnknS-7PzGAISUuDe4k84jyr-PRist7msfLrsAKDQw",
      e: "AQAB",
      x5c: [
        "MIIDBTCCAe2gAwIBAgIQE7nbxEiAlqhFdKnsKV+nuTANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE4MDYyMTAwMDAwMFoXDTIwMDYyMTAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAL1cxvfI3wPu1HFGZL6wnSHfcqX6DlvezLF1wbqUs6/DS5GhxtvHk6+9nKyNuCjznkEKql6bTIgnUbvTPr0UUKa3hezq/D9nkGu4qX8LVONVWkb53mjnN45lnVfOLh6VQ7J8/9Ut/ybbnhcn2a12vWiR0c6899TgtRp+i0bkT9dYl+3/wfP8+bBqmolwno7yojv/DxMz86mzhS7lW6mS9zzYtdsy6IHcF2P9XIac2TaP0efUpLrQY81wuTE3gUh2s6j7tqNH7aKK2PNAuxXtyGtZ9r+bg0gMrDXXVKJylQO9m4Z5J0vuz8xgCElLg3uJPOI8q/j0YrLe5rHy67ACg0MCAwEAAaMhMB8wHQYDVR0OBBYEFDnSNW3pMmrshl3iBAS4OSLCu/7GMA0GCSqGSIb3DQEBCwUAA4IBAQAFs3C5sfXSfoi7ea62flYEukqyVMhrDrpxRlvIuXqL11g8KEXlk8pS8gEnRtU6NBeHhMrhYSuiqj7/2jUT1BR3zJ2bChEyEpIgOFaiTUxq6tXdpWi/M7ibf8O/1sUtjgYktwJlSL6FEVAMFH82TxCoTWp2g5i2lmZQ7KxiKhG+Vl9nw1bPX57hkWWhR7Hpes0MbpGNZI2IEpZSjNG1IWPPOBcaOh4ed2WBQcLcaTuAaELlaxanQaC0B3029To80MnzpZuadaul3+jN7JQg0MpHdJJ8GMHAWe/IjXc0evJNhVUcKON41hzTu0R+Sze7xq1zGljQihJgcNpO9oReBUsX"
      ]
    },
    {
      kty: "RSA",
      use: "sig",
      kid: "i6lGk3FZzxRcUb2C3nEQ7syHJlY",
      x5t: "i6lGk3FZzxRcUb2C3nEQ7syHJlY",
      n:
        "szl9bI1ofBiqcJ_FUESqF8Mcpac2GqZUcf0xxgz5uxGz3GXsOS7Cxu8Pq85visA21U66XL4SK_99iGHCfxQUTiTNNFdZEQgf66gUJQPIi3C1Py82fbndfNe4WIh4cSRKgczi9yR0_4buU8RBFm1CNXZNMH_vp4Gu2ct0_8ACCngoTj-SNK4oS-fiXCIq1BZg-YIE-HXx6vCYgXAGtqYrkLM0pPfXJxNimLctmmNsiWPNbuDO9f0_r9T52ZOak658rMlsCedcq94xxFRmXvBdbFCnIoYBnSr7wUohxVus7SaVvI-5AbKcA6h-yeGo9BV47iVuwSByYv1BdZ3F2fqRiw",
      e: "AQAB",
      x5c: [
        "MIIDBTCCAe2gAwIBAgIQWOnQG5bZiIFAbuSzrxjvbDANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE4MDgwMTAwMDAwMFoXDTIwMDgwMTAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALM5fWyNaHwYqnCfxVBEqhfDHKWnNhqmVHH9McYM+bsRs9xl7DkuwsbvD6vOb4rANtVOuly+Eiv/fYhhwn8UFE4kzTRXWREIH+uoFCUDyItwtT8vNn253XzXuFiIeHEkSoHM4vckdP+G7lPEQRZtQjV2TTB/76eBrtnLdP/AAgp4KE4/kjSuKEvn4lwiKtQWYPmCBPh18erwmIFwBramK5CzNKT31ycTYpi3LZpjbIljzW7gzvX9P6/U+dmTmpOufKzJbAnnXKveMcRUZl7wXWxQpyKGAZ0q+8FKIcVbrO0mlbyPuQGynAOofsnhqPQVeO4lbsEgcmL9QXWdxdn6kYsCAwEAAaMhMB8wHQYDVR0OBBYEFMXZ+lF0trQrd4uWs+lQ7h0mls63MA0GCSqGSIb3DQEBCwUAA4IBAQAA/TRp5Cx6WWA04dCvoJNTd80KSO8uGrM2V4VhTlIU1zf8cjMocmBXSA0v+P3onkBHHwnMJs6fWuwcBL4vhqZ4jonPcgl3tUIGgDwywM3V4mC1JLZJXlBZASsAuKmHm6qwge6RVs+Ub1fcpOIViMgW/1Wj1tZm/v/NGHQ+EEJV1UXtE5OnFnzD+9TrfOTI/l855ryKNS6I+XNbtcIJUL87OWkMRgNgjOhBnmldA27sWWkFWfvxB0J7FvOkyWaLlyNe/jqCL3jYXzz0XBNGMbatmeKS3fgIihVUJ32Vt7GXI4ed0HuvhhZ6d+fvMnBPWdfteu018YHKeXyk/c2aegcj"
      ]
    },
    {
      kty: "RSA",
      use: "sig",
      kid: "2S4SCVGs8Sg9LS6AqLIq6DpW-g8",
      x5t: "2S4SCVGs8Sg9LS6AqLIq6DpW-g8",
      n:
        "oZ-QQrNuB4ei9ATYrT61ebPtvwwYWnsrTpp4ISSp6niZYb92XM0oUTNgqd_C1vGN8J-y9wCbaJWkpBf46CjdZehrqczPhzhHau8WcRXocSB1u_tuZhv1ooAZ4bAcy79UkeLiG60HkuTNJJC8CfaTp1R97szBhuk0Vz5yt4r5SpfewIlBCnZUYwkDS172H9WapQu-3P2Qjh0l-JLyCkdrhvizZUk0atq5_AIDKRU-A0pRGc-EZhUL0LqUMz6c6M2s_4GnQaScv44A5iZUDD15B6e8Apb2yARohkWmOnmRcTVfes8EkfxjzZEzm3cNkvP0ogILyISHKlkzy2OmlU6iXw",
      e: "AQAB",
      x5c: [
        "MIIDKDCCAhCgAwIBAgIQBHJvVNxP1oZO4HYKh+rypDANBgkqhkiG9w0BAQsFADAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwHhcNMTYxMTE2MDgwMDAwWhcNMTgxMTE2MDgwMDAwWjAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQChn5BCs24Hh6L0BNitPrV5s+2/DBhaeytOmnghJKnqeJlhv3ZczShRM2Cp38LW8Y3wn7L3AJtolaSkF/joKN1l6GupzM+HOEdq7xZxFehxIHW7+25mG/WigBnhsBzLv1SR4uIbrQeS5M0kkLwJ9pOnVH3uzMGG6TRXPnK3ivlKl97AiUEKdlRjCQNLXvYf1ZqlC77c/ZCOHSX4kvIKR2uG+LNlSTRq2rn8AgMpFT4DSlEZz4RmFQvQupQzPpzozaz/gadBpJy/jgDmJlQMPXkHp7wClvbIBGiGRaY6eZFxNV96zwSR/GPNkTObdw2S8/SiAgvIhIcqWTPLY6aVTqJfAgMBAAGjWDBWMFQGA1UdAQRNMEuAEDUj0BrjP0RTbmoRPTRMY3WhJTAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXOCEARyb1TcT9aGTuB2Cofq8qQwDQYJKoZIhvcNAQELBQADggEBAGnLhDHVz2gLDiu9L34V3ro/6xZDiSWhGyHcGqky7UlzQH3pT5so8iF5P0WzYqVtogPsyC2LPJYSTt2vmQugD4xlu/wbvMFLcV0hmNoTKCF1QTVtEQiAiy0Aq+eoF7Al5fV1S3Sune0uQHimuUFHCmUuF190MLcHcdWnPAmzIc8fv7quRUUsExXmxSX2ktUYQXzqFyIOSnDCuWFm6tpfK5JXS8fW5bpqTlrysXXz/OW/8NFGq/alfjrya4ojrOYLpunGriEtNPwK7hxj1AlCYEWaRHRXaUIW1ByoSff/6Y6+ZhXPUe0cDlNRt/qIz5aflwO7+W8baTS4O8m/icu7ItE="
      ]
    }
  ]
};
