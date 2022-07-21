
// Start a fast HTTP server from the main file's export
export default {
fetch(req) {
    return new Response(
        `This is another way to start a server!
if the main file export default's an object
with 'fetch'. Bun automatically calls Bun.serve`
        );
    },
// so autocomplete & type checking works
} as Bun.Serve;
