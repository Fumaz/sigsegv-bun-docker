import {Server} from "bun";

console.log("Hello via Bun!");

Bun.serve({
    port: 6969,
    fetch(request: Request, server: Server): Response | Promise<Response> {
        return new Response("Hello via Bun!");
    }
});
