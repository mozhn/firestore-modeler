interface ComponentOptions {
  selected: boolean;
}

export interface FirestoreDocument {
  id: string;
  componentOptions?: ComponentOptions;
}
