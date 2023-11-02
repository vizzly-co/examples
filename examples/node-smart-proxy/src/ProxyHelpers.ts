import { Request } from "express";

export const requestHeadersToMap = (
  req: Request,
): { [key: string]: string } => {
  let proxiedHeaders: { [key: string]: string } = {};
  // Add all the headers from the request
  Object.entries(req.headers).forEach(([key, value]) => {
    if (key && value && typeof value == "string") {
      proxiedHeaders[key] = value;
    }
  });

  return proxiedHeaders;
};
