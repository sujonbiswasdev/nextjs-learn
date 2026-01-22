'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'

const ContactPage = async() => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store", // always fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  console.log(res)
}

export default ContactPage
