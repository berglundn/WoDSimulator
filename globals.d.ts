declare module "*.css" {
  // Since CSS imports are side-effect only (they don't export a value
  // you typically use), we can just declare an empty object or define the module.
  // The 'any' type is generally acceptable here, or you can leave it empty.
  // https://iifx.dev/en/articles/460244064/how-to-resolve-cannot-find-module-for-css-in-a-next-js-typescript-project
}
