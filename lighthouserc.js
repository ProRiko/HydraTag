module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm dev",
      url: ["http://localhost:3000/", "http://localhost:3000/services"],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
        formFactor: "desktop"
      }
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }]
      }
    }
  }
};
