import { FreestyleSandboxes } from "freestyle-sandboxes";
import { prepareDirForDeploymentSync } from "freestyle-sandboxes/utils";

// Create a sandboxes client
const sandboxes = new FreestyleSandboxes({
  apiKey: 'NbR72xETx7e4sZGs4Qgn8P-APy2UpwPYg4wKB1TaFqgziAtZT1PK9zgEg3YnYQ5NUWD',
});

async function deploy() {
  console.time("deploy");
  const result = await sandboxes.deployWeb(prepareDirForDeploymentSync("."), {
    domains: ["example3.style.dev"],
    build: true, // This automatically detects the framework and configures/builds for you
  });
  console.timeEnd("deploy");
  console.log("Deployment result:", result);
}

deploy();