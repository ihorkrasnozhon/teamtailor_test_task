import type {Server} from "node:http";

export const gracefulShutdown = (signal: string, server: Server) => {
    console.log(`\n[${signal}] Received. Starting graceful shutdown...`);

    server.close(() => {
        console.log('Http server closed.');

        console.log('Process terminated safely.');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time');
        process.exit(1);
    }, 10000);
};
