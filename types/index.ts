export interface Message {
  role: Role;
  content: string;
}

export interface User {
  email: string;
  city: string;
}

export type Role = "assistant" | "user";

