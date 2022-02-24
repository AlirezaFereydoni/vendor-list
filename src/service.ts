import { CONFIG } from "./config";
import { Serialize } from "./utils";

// Type
import { ServicesType } from "./types/types";

const HEADER = { "Content-Type": "application/json;charset=utf-8" };

const Get: ServicesType = async (url, params) => {
  try {
    const request = await fetch(CONFIG.BASE_URL + url + (params ? "?" + Serialize(params) : ""), {
      method: "GET",
      headers: new Headers(HEADER),
    });
    const response = await request.json();
    return { res: response, status: request.status };
  } catch (err) {
    return err;
  }
};

const Post: ServicesType = async (url, params, method) => {
  try {
    const request = await fetch(CONFIG.BASE_URL + url, {
      method: method || "POST",
      headers: new Headers(HEADER),
      body: JSON.stringify(params),
    });
    const response = await request.json();
    return { res: response, status: request.status };
  } catch (err) {
    return err;
  }
};

export { Post, Get };
