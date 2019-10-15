import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';
import { tsquery } from '@phenomnomnominal/tsquery';

export default function(schema: any): Rule {
  return chain([
    (tree, context) => {
      const sourceRoot = getProjectConfig(tree, schema.name).sourceRoot;
      tree.getDir(sourceRoot).visit((path, fileEntry) => {
        console.log(path);
        const contents = fileEntry.content.toString();
        // ArrayType > somechild
        // TypeReference > Identifier[name=Array] + somechild
        // Array<${somechild.getText()}}>
        const newContents = tsquery.replace(contents, 'ArrayType', (node) => {
          const firstChild = node.getChildAt(0);
          return `Array<${firstChild.getText()}>`;
        })
        tree.overwrite(path, newContents);
      })
    }
  ]);
}
