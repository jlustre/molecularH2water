const localApiBaseUrl = "http://localhost:8000";
const stagingApiBaseUrl = "https://admin.staging.molecularh2water.com";
const productionApiBaseUrl = "https://admin.molecularh2water.com";
const configuredApiBaseUrl = import.meta.env.VITE_MEDIA_API_BASE_URL?.trim();

const localSiteUrl = "http://localhost:8000";
const stagingSiteUrl = "https://staging.molecularh2water.com";
const productionSiteUrl = "https://www.molecularh2water.com";
const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();

function joinApiUrl(baseUrl: string, endpoint: string) {
  return `${baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;
}

function resolveSiteBaseUrl(): string {
  if (configuredSiteUrl) {
    return configuredSiteUrl.replace(/\/$/, "");
  }

  const hostname = window.location.hostname;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return localSiteUrl;
  }

  if (hostname === "staging.molecularh2water.com") {
    return stagingSiteUrl;
  }

  if (
    hostname === "molecularh2water.com" ||
    hostname === "www.molecularh2water.com"
  ) {
    return productionSiteUrl;
  }

  return window.location.origin;
}

function resolveApiBaseUrl(): string {
  if (configuredApiBaseUrl) {
    return configuredApiBaseUrl.replace(/\/$/, "");
  }

  const hostname = window.location.hostname;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return localApiBaseUrl;
  }

  if (hostname === "staging.molecularh2water.com") {
    return stagingApiBaseUrl;
  }

  if (
    hostname === "molecularh2water.com" ||
    hostname === "www.molecularh2water.com"
  ) {
    return productionApiBaseUrl;
  }

  return "";
}

export function getApiUrl(endpoint: string) {
  const apiBaseUrl = resolveApiBaseUrl();

  if (apiBaseUrl) {
    return joinApiUrl(apiBaseUrl, endpoint);
  }

  return endpoint;
}

export function getPublicSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${resolveSiteBaseUrl()}${normalizedPath}`;
}

export function getSiteEnvironmentLabel(): string {
  if (configuredSiteUrl) {
    if (configuredSiteUrl.includes("localhost")) {
      return "Local";
    }

    if (configuredSiteUrl.includes("staging.")) {
      return "Staging";
    }

    return "Production";
  }

  const hostname = window.location.hostname;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "Local";
  }

  if (hostname === "staging.molecularh2water.com") {
    return "Staging";
  }

  if (
    hostname === "molecularh2water.com" ||
    hostname === "www.molecularh2water.com"
  ) {
    return "Production";
  }

  return "Custom";
}
