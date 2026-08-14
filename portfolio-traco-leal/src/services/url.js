const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL;

export function getBackendUrl(path) {

    if (!path) {
        return "";
    }

    if (
        path.startsWith("http://") ||
        path.startsWith("https://")
    ) {
        return path;
    }

    return `${BACKEND_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export default getBackendUrl;