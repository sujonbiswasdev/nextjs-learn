"use client"
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    BACKEND_URL: z.url(),
    FRONTEND_URL:z.url(),
    API_URL:z.url(),
    AUTH_URL:z.url()
  },
client:{
  NEXT_PUBLIC_TEST: z.string(),
},

   runtimeEnv: {
    BACKEND_URL: process.env.API_URL,
    FRONTEND_URL:process.env.FRONTEND_URL,
    API_URL:process.env.API_URL,
    AUTH_URL:process.env.AUTH_URL,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },


})