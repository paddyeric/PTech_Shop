import { API } from "../api/apiConfig";

export const signIn = (user) => {
  return fetch(`${API}/users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const msg =
          data?.message || data?.error || `Login failed (${response.status}).`;
        return {
          error: msg,
          status: response.status,
        };
      }

      return data;
    })
    .catch((error) => {
      console.log(error);
      return {
        error: "Network error. Please try again.",
      };
    });
};

export const signUp = (user) => {
  return fetch(`${API}/users/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        return {
          error:
            data?.message ||
            data?.error ||
            `Signup failed (${response.status}).`,
          status: response.status,
        };
      }

      return data;
    })
    .catch(() => {
      return { error: "Network error. Please try again." };
    });
};

export const signOut = (cb) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    cb();
    return fetch(`${API}/users/logout`, {
      method: "POST",
    })
      .then((response) => {
        console.log("signout", response);
      })
      .catch((err) => console.log(err));
  }
};

export const jwtAuth = (data, cb) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    cb();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
