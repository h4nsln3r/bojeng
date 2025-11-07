declare module '*.scss' {
  const content: Record<string, string> | string;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string> | string;
  export default content;
}
