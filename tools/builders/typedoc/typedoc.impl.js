const { createBuilder } = require('@angular-devkit/architect');
const { Observable } = require('rxjs');
const { readWorkspaceJson } = require('@nrwl/workspace');
const TypeDoc = require('typedoc');

function run(options, context) {
  return Observable.create(async observer => {
    try {
      const projectName = context.target.project;
      const projectSourceRoot = readWorkspaceJson().projects[projectName].sourceRoot;
      const projectRoot = readWorkspaceJson().projects[projectName].root;
      // run the builder
      const app = new TypeDoc.Application({
          exclude: ['**/*.spec.tsx', '**/*.spec.ts'],
          tsconfig: `${projectRoot}/tsconfig.json`
      });
      const project = app.convert(app.expandInputFiles([projectSourceRoot]));
      if (project) {
          app.generateDocs(project, options.outputDir);
      }

      observer.next({ success: true });
      observer.complete();
    } catch (e) {
      observer.error(
        `ERROR: Something went wrong in the typedoc builder - ${e.message}`
      );
    }
  });
}

module.exports = {
  default: createBuilder(run)
}