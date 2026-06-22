export function getStoredAuth() {
  if (typeof window === "undefined") {
    return { token: null, user: null };
  }
  try {
    const token = localStorage.getItem("auth_token");
    const userRaw = localStorage.getItem("auth_user");
    if (token && userRaw) {
      return { token, user: JSON.parse(userRaw) };
    }
  } catch {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  }
  return { token: null, user: null };
}

export function persistAuth(token, user) {
  localStorage.setItem("auth_token", token);
  localStorage.setItem("auth_user", JSON.stringify(user));
}

export function clearStoredAuth() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("auth_user");
}

export function getStoredToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}
