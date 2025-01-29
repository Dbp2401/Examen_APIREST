import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const handler = (req: Request): Response => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return new Response("Hello, Deno Deploy! 🚀");
  }

  if (url.pathname === "/users") {
    return new Response(JSON.stringify([{ id: 1, name: "Dani" }]), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Not Found", { status: 404 });
};

console.log("Server running on Deno Deploy...");
serve(handler);
