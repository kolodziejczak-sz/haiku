import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Markdoc from '@markdoc/markdoc';
import Link from '@/components/Link.astro';
import MdImage from '@/components/Image/MdImage.astro';
import MdocImage from '@/components/Image/MdocImage.astro'

const { Tag } = Markdoc;

export default defineMarkdocConfig({
  tags: {
    image: {
      render: MdocImage,
      attributes: {
        alt: { type: String, required: true },
        asset: { type: String, required: true },
        title: { type: String },
        direction: { type: String },
      }
    },
  },
  nodes: {
    document: {...Markdoc.nodes.document, render: null },
    image: {
      render: MdImage,
      attributes: {
        src: { type: String },
        alt: { type: String, required: true },
        title: { type: String },
      },
    },
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