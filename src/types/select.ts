export interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}
