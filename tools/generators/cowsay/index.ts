import { installPackagesTask, readJson, Tree } from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  const packageJson = readJson(tree, 'package.json');
  packageJson.devDependencies.cowsay = '*';
  packageJson.scripts.cowsay = 'cowsay';
  tree.write('package.json', JSON.stringify(packageJson, undefined, 2));

  return () => {
    installPackagesTask(tree);
  };
}
