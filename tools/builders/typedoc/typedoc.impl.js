const TypeDoc = require('typedoc');

async function run(options, context) {
  const projectName = context.projectName;
  const projectSourceRoot = context.workspace.projects[projectName].sourceRoot;
  const projectRoot = context.workspace.projects[projectName].root;

  // run the builder
  const app = new TypeDoc.Application({
    exclude: ['**/*.spec.tsx', '**/*.spec.ts'],
    tsconfig: `${projectRoot}/tsconfig.json`,
  });
  const project = app.convert(app.expandInputFiles([projectSourceRoot]));
  if (project) {
    app.generateDocs(project, options.outputDir);
  }

  return { success: true };
}

module.exports = {
  default: run,
};
