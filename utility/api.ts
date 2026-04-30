const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3001";

export const api = {
  inquiry: {
    create: async (data: any) => {
      const isFormData = data instanceof FormData;
      const res = await fetch(`${BASE_URL}/inquiry`, {
        method: "POST",
        ...(isFormData ? {} : { headers: { "Content-Type": "application/json" } }),
        body: isFormData ? data : JSON.stringify(data),
      });
      return res.json();
    },
    getAll: async () => {
      const res = await fetch(`${BASE_URL}/inquiry`);
      return res.json();
    },
  },
  membership: {
    getAll: async () => {
      try {
        const res = await fetch(`${BASE_URL}/membership`);
        if (!res.ok) throw new Error("Network response was not ok");
        return await res.json();
      } catch (error) {
        console.warn("Failed to fetch memberships API:", error);
        return [];
      }
    },
  },
  member: {
    apply: async (data: any) => {
      const res = await fetch(`${BASE_URL}/member/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  },
  contact: {
    create: async (data: any) => {
      const res = await fetch(`${BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    getAll: async () => {
      const res = await fetch(`${BASE_URL}/contact`);
      return res.json();
    },
  },
  auth: {
    register: async (data: any) => {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    login: async (data: any) => {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    googleLogin: async (data: any) => {
      const res = await fetch(`${BASE_URL}/auth/google-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  },
  user: {
    getWalletBalance: async (userId: string) => {
      const res = await fetch(`${BASE_URL}/user/${userId}/wallet`);
      return res.json();
    },
    payWithWallet: async (userId: string, amount: number) => {
      const res = await fetch(`${BASE_URL}/user/${userId}/pay-with-wallet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      return res.json();
    },
    purchaseMembership: async (userId: string, tier: string) => {
      const res = await fetch(`${BASE_URL}/user/${userId}/purchase-membership/${tier}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      return res.json();
    },
  },
};
