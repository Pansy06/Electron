const { spawn } = require("child_process");
const path = require("path");

let viteProcess;
let electronProcess;

// Function to start Vite dev server
function startVite() {
  return new Promise((resolve, reject) => {
    console.log("Starting Vite dev server...");
    viteProcess = spawn("npm", ["run", "dev"], {
      cwd: __dirname,
      stdio: "pipe",
      shell: true,
    });

    viteProcess.stdout.on("data", (data) => {
      const output = data.toString();
      console.log("Vite:", output);

      // Check if dev server is ready
      if (output.includes("Local:") || output.includes("ready in")) {
        resolve();
      }
    });

    viteProcess.stderr.on("data", (data) => {
      console.error("Vite Error:", data.toString());
    });

    viteProcess.on("close", (code) => {
      console.log("Vite process exited with code", code);
    });

    // Wait a few seconds in case the ready message is missed
    setTimeout(resolve, 3000);
  });
}

// Function to start Electron
function startElectron() {
  console.log("Starting Electron...");
  electronProcess = spawn("npx", ["electron", "src/main.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
    env: { ...process.env, NODE_ENV: "development" },
  });

  electronProcess.on("close", (code) => {
    console.log("Electron process exited with code", code);
    // Kill Vite when Electron closes
    if (viteProcess) {
      viteProcess.kill();
    }
    process.exit(code);
  });
}

// Handle process termination
process.on("SIGINT", () => {
  console.log("Shutting down...");
  if (electronProcess) electronProcess.kill();
  if (viteProcess) viteProcess.kill();
  process.exit(0);
});

process.on("SIGTERM", () => {
  if (electronProcess) electronProcess.kill();
  if (viteProcess) viteProcess.kill();
  process.exit(0);
});

// Start the application
async function start() {
  try {
    await startVite();
    startElectron();
  } catch (error) {
    console.error("Failed to start application:", error);
    process.exit(1);
  }
}

start();
