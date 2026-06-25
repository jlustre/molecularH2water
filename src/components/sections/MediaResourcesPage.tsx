import {
  AlertCircle,
  ArrowUpRight,
  Code2,
  Download,
  FileText,
  Image,
  Link2,
  Loader2,
  PlayCircle,
  RefreshCcw,
  Video,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PageLayout } from "../layout/PageLayout";

type ResourceCategory =
  | "documents"
  | "videos"
  | "links"
  | "images"
  | "downloads"
  | "embedded";

type MediaResource = {
  category: ResourceCategory | string;
  category_label: string;
  created_at: string;
  description: string | null;
  file_name: string | null;
  file_size: number | null;
  file_url: string | null;
  id: number;
  is_pdf: boolean;
  is_video: boolean;
  mime_type: string | null;
  resource_url: string | null;
  shareable_link: string | null;
  title: string;
  updated_at: string;
  url: string | null;
};

type ResourcesResponse = {
  category: ResourceCategory;
  category_label: string;
  count: number;
  data: MediaResource[];
};

type CategoryConfig = {
  description: string;
  endpoint: string;
  icon: LucideIcon;
  key: ResourceCategory;
  label: string;
};

const categoryConfigs: CategoryConfig[] = [
  {
    description: "PDFs, guides, handouts, and education files.",
    endpoint: "/api/resources/documents",
    icon: FileText,
    key: "documents",
    label: "Documents",
  },
  {
    description: "Watchable education videos and presentation clips.",
    endpoint: "/api/resources/videos",
    icon: Video,
    key: "videos",
    label: "Videos",
  },
  {
    description: "Curated web links for sharing and follow-up.",
    endpoint: "/api/resources/links",
    icon: Link2,
    key: "links",
    label: "Links",
  },
  {
    description: "Shareable visuals, graphics, and image references.",
    endpoint: "/api/resources/images",
    icon: Image,
    key: "images",
    label: "Images",
  },
  {
    description: "Downloadable files visitors can save for later.",
    endpoint: "/api/resources/downloads",
    icon: Download,
    key: "downloads",
    label: "Downloads",
  },
  {
    description: "Embedded resources and presentation-ready media.",
    endpoint: "/api/resources/embedded",
    icon: Code2,
    key: "embedded",
    label: "Embedded",
  },
];

const localApiBaseUrl = "http://localhost:8000";

function getApiUrl(endpoint: string) {
  if (window.location.hostname === "localhost") {
    return `${localApiBaseUrl}${endpoint}`;
  }

  return endpoint;
}

function getCategoryFromPath(): ResourceCategory {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const category = pathParts[pathParts.length - 1];
  const match = categoryConfigs.find((config) => config.key === category);
  return match?.key ?? "documents";
}

function formatFileSize(size: number | null) {
  if (!size) {
    return null;
  }

  if (size < 1024 * 1024) {
    return `${Math.round(size / 1024)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(dateValue: string) {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function getPrimaryUrl(resource: MediaResource) {
  return resource.resource_url ?? resource.file_url ?? resource.url ?? resource.shareable_link;
}

export function MediaResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>(() =>
    getCategoryFromPath(),
  );
  const [data, setData] = useState<ResourcesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const activeConfig = useMemo(
    () =>
      categoryConfigs.find((config) => config.key === activeCategory) ??
      categoryConfigs[0],
    [activeCategory],
  );

  useEffect(() => {
    const updateCategory = () => {
      setActiveCategory(getCategoryFromPath());
    };

    window.addEventListener("popstate", updateCategory);
    window.addEventListener("hashchange", updateCategory);

    return () => {
      window.removeEventListener("popstate", updateCategory);
      window.removeEventListener("hashchange", updateCategory);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadResources() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(getApiUrl(activeConfig.endpoint), {
          headers: {
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = (await response.json()) as ResourcesResponse;
        setData(payload);
      } catch (caughtError) {
        if (controller.signal.aborted) {
          return;
        }

        setData(null);
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : "Unable to load resources.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void loadResources();

    return () => controller.abort();
  }, [activeConfig, reloadKey]);

  const resources = data?.data ?? [];
  const count = data?.count ?? resources.length;
  const ActiveIcon = activeConfig.icon;

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(6,214,160,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.2),transparent_32%),linear-gradient(135deg,#020617_0%,#073B4C_50%,#071b26_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(125,211,252,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.11)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.28em] text-aqua backdrop-blur">
              Media Resources
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Published Resources For{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-aqua to-blue-300 bg-clip-text text-transparent">
                Sharing The H2 Story
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/82">
              Browse approved documents, videos, links, images, downloads, and
              embedded resources from the public media library.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categoryConfigs.map((config) => {
              const Icon = config.icon;
              const active = config.key === activeCategory;

              return (
                <a
                  className={`group rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${
                    active
                      ? "border-aqua bg-aqua text-marine shadow-[0_18px_48px_rgba(6,214,160,0.24)]"
                      : "border-cyan-300/18 bg-white/[0.08] text-white hover:border-cyan-300/45 hover:bg-white/[0.12]"
                  }`}
                  href={`/resources/media/${config.key}`}
                  key={config.key}
                  onClick={() => setActiveCategory(config.key)}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl transition group-hover:scale-105 ${
                      active
                        ? "bg-marine text-aqua"
                        : "border border-cyan-200/25 bg-white/10 text-aqua"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-3 block font-black">{config.label}</span>
                  <span
                    className={`mt-1 block text-xs leading-5 ${
                      active ? "text-marine/74" : "text-cyan-50/72"
                    }`}
                  >
                    {config.description}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#effcff_58%,#ffffff_100%)] py-18 text-slate-800 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex rounded-full border border-lagoon/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-lagoon shadow-sm">
                {count} Published {count === 1 ? "Item" : "Items"}
              </p>
              <h2 className="mt-4 flex items-center gap-3 text-4xl font-black tracking-tight text-marine sm:text-5xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-marine text-aqua shadow-clean">
                  <ActiveIcon className="h-6 w-6" />
                </span>
                {data?.category_label ?? activeConfig.label}
              </h2>
            </div>
            <button
              className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-cyan-200 bg-white px-5 py-3 text-sm font-black uppercase tracking-[.12em] text-marine shadow-sm transition hover:-translate-y-0.5 hover:bg-ice"
              onClick={() => {
                setReloadKey((current) => current + 1);
              }}
              type="button"
            >
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </button>
          </div>

          <div className="mt-10">
            {loading ? (
              <div className="grid min-h-72 place-items-center rounded-[2rem] border border-cyan-100 bg-white shadow-clean">
                <div className="text-center">
                  <Loader2 className="mx-auto h-10 w-10 animate-spin text-lagoon" />
                  <p className="mt-4 text-lg font-black text-marine">
                    Loading resources...
                  </p>
                </div>
              </div>
            ) : error ? (
              <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-7 text-marine shadow-clean">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200">
                    <AlertCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-black">
                      Resources could not be loaded
                    </h3>
                    <p className="mt-2 font-semibold leading-7 text-slate-700">
                      The media API did not respond successfully. Please make
                      sure the public endpoint is available at{" "}
                      <span className="font-black">{activeConfig.endpoint}</span>.
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            ) : resources.length === 0 ? (
              <div className="rounded-[2rem] border border-cyan-100 bg-white p-8 text-center shadow-clean">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
                  <ActiveIcon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-3xl font-black text-marine">
                  No published resources yet
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-slate-600">
                  Published items from this category will appear here
                  automatically once they are added in the media library.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {resources.map((resource) => (
                  <ResourceCard
                    category={activeConfig.key}
                    key={resource.id}
                    resource={resource}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ResourceCard({
  category,
  resource,
}: {
  category: ResourceCategory;
  resource: MediaResource;
}) {
  const fileSize = formatFileSize(resource.file_size);
  const createdAt = formatDate(resource.created_at);
  const primaryUrl = getPrimaryUrl(resource);
  const isImage = resource.mime_type?.startsWith("image/") || category === "images";
  const isPlayableVideo =
    resource.is_video || resource.mime_type?.startsWith("video/") || category === "videos";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-clean transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:shadow-lift">
      <div className="relative bg-slate-950">
        {isImage && primaryUrl ? (
          <img
            alt={resource.title}
            className="aspect-[16/10] w-full object-cover"
            src={primaryUrl}
          />
        ) : isPlayableVideo && primaryUrl ? (
          <video
            className="aspect-[16/10] w-full bg-black object-cover"
            controls
            preload="metadata"
            src={primaryUrl}
          />
        ) : (
          <div className="grid aspect-[16/10] place-items-center bg-[radial-gradient(circle_at_20%_20%,rgba(6,214,160,0.22),transparent_30%),linear-gradient(135deg,#031822_0%,#073B4C_100%)]">
            <div className="grid h-20 w-20 place-items-center rounded-[1.6rem] border border-cyan-200/25 bg-white/10 text-aqua shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
              {resource.is_pdf ? (
                <FileText className="h-10 w-10" />
              ) : isPlayableVideo ? (
                <PlayCircle className="h-10 w-10" />
              ) : category === "links" ? (
                <Link2 className="h-10 w-10" />
              ) : (
                <Download className="h-10 w-10" />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-[.14em] text-lagoon">
            {resource.category_label}
          </span>
          {fileSize ? (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-[.14em] text-amber-700">
              {fileSize}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-black leading-tight text-marine">
          {resource.title}
        </h3>
        {resource.description ? (
          <p className="mt-3 flex-1 text-base font-semibold leading-7 text-slate-600">
            {resource.description}
          </p>
        ) : (
          <p className="mt-3 flex-1 text-base font-semibold leading-7 text-slate-500">
            Resource details are available from the linked media item.
          </p>
        )}

        <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-500">
          {resource.file_name ? <p>{resource.file_name}</p> : null}
          {resource.mime_type ? <p>{resource.mime_type}</p> : null}
          {createdAt ? <p>Published {createdAt}</p> : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {primaryUrl ? (
            <a
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-lagoon bg-lagoon px-5 py-3 text-center text-sm font-black uppercase tracking-[.1em] text-white shadow-[0_16px_36px_rgba(17,138,178,0.2)] transition hover:-translate-y-0.5 hover:border-marine hover:bg-marine hover:text-white hover:shadow-[0_18px_42px_rgba(7,59,76,0.28)]"
              href={primaryUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open Resource
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {resource.shareable_link ? (
            <a
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-marine bg-white px-5 py-3 text-center text-sm font-black uppercase tracking-[.1em] text-marine transition hover:-translate-y-0.5 hover:bg-marine hover:text-white"
              href={resource.shareable_link}
              rel="noreferrer"
              target="_blank"
            >
              Share Link
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
