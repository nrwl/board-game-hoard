import {
  readProjectConfiguration,
  Tree
} from '@nrwl/devkit';
import { tsquery } from '@phenomnomnominal/tsquery';

export default function(tree: Tree, schema: any) {
  const sourceRoot = readProjectConfiguration(tree, schema.name).sourceRoot;
  tree.children(sourceRoot).forEach((path) => {
    console.log(path);
    const fileEntry = tree.read(path);
    const contents = fileEntry.toString();
    // ArrayType > somechild
    // TypeReference > Identifier[name=Array] + somechild
    // Array<${somechild.getText()}}>
    const newContents = tsquery.replace(contents, 'ArrayType', (node) => {
      const firstChild = node.getChildAt(0);
      return `Array<${firstChild.getText()}>`;
    })
    tree.write(path, newContents);
  })
}
