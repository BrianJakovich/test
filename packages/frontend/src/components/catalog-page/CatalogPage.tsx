import { AwsServices } from '../aws-services/AwsServices';

// ...

export function CatalogPage() {
  // ...

  function renderCatalogItem(
    { metadata }: Entity,
    options: CatalogFilter,
  ) {
    // ...

    if (metadata.kind === 'AWS::Services') {
      return <AwsServices entity={entity} />;
    }

    // ...
  }

  // ...
}
