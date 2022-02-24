export type ServicesType = (
  url: string,
  params?: { [key: string]: string },
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
) => void;
