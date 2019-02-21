// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/brute4s99/DEV/repos/blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-template-js": preferDefault(require("/home/brute4s99/DEV/repos/blog/src/templates/PostTemplate.js")),
  "component---src-templates-page-template-js": preferDefault(require("/home/brute4s99/DEV/repos/blog/src/templates/PageTemplate.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/brute4s99/DEV/repos/blog/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/brute4s99/DEV/repos/blog/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/home/brute4s99/DEV/repos/blog/src/pages/search.js"))
}

exports.json = {
  "layout-index.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/layout-index.json"),
  "my-testimony-about-blockchain-p-2.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/my-testimony-about-blockchain-p-2.json"),
  "my-testimony-about-blockchain-p-1.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/my-testimony-about-blockchain-p-1.json"),
  "a-real-life-hogwarts.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/a-real-life-hogwarts.json"),
  "its-a-blog.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/its-a-blog.json"),
  "blurred-lines.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/blurred-lines.json"),
  "arch-zero-to-one.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/arch-zero-to-one.json"),
  "a-better-blog.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/a-better-blog.json"),
  "recovering-your-arch-from-hell.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/recovering-your-arch-from-hell.json"),
  "arcanist.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/arcanist.json"),
  "abc-of-unix.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/abc-of-unix.json"),
  "breaking-free.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/breaking-free.json"),
  "pandas.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/pandas.json"),
  "arch.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/arch.json"),
  "about.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/about.json"),
  "success.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/success.json"),
  "links.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/links.json"),
  "contact.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/contact.json"),
  "index.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/index.json"),
  "search.json": require("/home/brute4s99/DEV/repos/blog/.cache/json/search.json")
}