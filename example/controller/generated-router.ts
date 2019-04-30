import queryString from "query-string";

type Id = string;

function switchPath(x: string) {
  location.hash = `#${x}`;
}

function qsStringify(queries: { [k: string]: string }) {
  return queryString.stringify(queries);
}

// generated

export let genRouter = {
  home: {
    name: "home",
    raw: "home",
    path: () => `/home`,
    go: () => switchPath(`/home`),
  },
  content: {
    name: "content",
    raw: "content",
    path: () => `/content`,
    go: () => switchPath(`/content`),
  },
  else: {
    name: "else",
    raw: "else",
    path: () => `/else`,
    go: () => switchPath(`/else`),
  },
  _: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};
