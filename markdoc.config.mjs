import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Markdoc from '@markdoc/markdoc';
import Link from '@/components/Link.astro'

const { Tag } = Markdoc;

export default defineMarkdocConfig({
  nodes: {
    document: {...Markdoc.nodes.document, render: null },
    link: {
      attributes: {
        href: { type: String, required: true },
        title: { type: String },
      },
      transform(node, config) {
        const { href } = node.transformAttributes(config);
        const [title] = node.transformChildren(config);

        return new Tag(
          Link, { to: href }, [title]
        );
      }
    }
  }
})