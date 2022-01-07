import { CollectionConfig } from 'payload/types';
import { MarkdownField } from '../custom-components/Markdown';

const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
		{
			name: 'markdown',
			type: 'text',
			admin: { components: { Field: MarkdownField } },
		}
  ],
}

export default Examples;
