import type { SourceOutputs, BuildOptionsBase } from 'peggy';

export type TsPegjsOptions = {
  /**
   * Items inserted at the top of generated grammar. This can be used for import statements, etc.
   */
  customHeader?: null | string;
  /**
   * The base name for the supplementary files generated by ts-pegjs.
   */
  baseName?: string;
  errorName?: string | 'PeggySyntaxError';
};

// Included as a workaround for https://github.com/peggyjs/peggy/issues/403
interface _ParserBuildOptions extends BuildOptionsBase {
  output?: SourceOutputs;
}

export type TsPegjsParserBuildOptions = _ParserBuildOptions & {
  tspegjs?: TsPegjsOptions;
};