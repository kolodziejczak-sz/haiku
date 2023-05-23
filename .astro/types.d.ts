declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"pages": {
"en/404.mdx": {
  id: "en/404.mdx",
  slug: "en/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"en/about-me.mdx": {
  id: "en/about-me.mdx",
  slug: "en/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"en/index.mdx": {
  id: "en/index.mdx",
  slug: "en",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"en/introduction.mdx": {
  id: "en/introduction.mdx",
  slug: "en/introduction",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"es/404.mdx": {
  id: "es/404.mdx",
  slug: "es/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"es/about-me.mdx": {
  id: "es/about-me.mdx",
  slug: "es/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"es/index.mdx": {
  id: "es/index.mdx",
  slug: "es",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"es/introduction.mdx": {
  id: "es/introduction.mdx",
  slug: "es/introduction",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"ja/404.mdx": {
  id: "ja/404.mdx",
  slug: "ja/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"ja/about-me.mdx": {
  id: "ja/about-me.mdx",
  slug: "ja/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"ja/index.mdx": {
  id: "ja/index.mdx",
  slug: "ja",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"ja/introduction.mdx": {
  id: "ja/introduction.mdx",
  slug: "ja/introduction",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"pl/404.mdx": {
  id: "pl/404.mdx",
  slug: "pl/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"pl/about-me.mdx": {
  id: "pl/about-me.mdx",
  slug: "pl/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"pl/index.mdx": {
  id: "pl/index.mdx",
  slug: "pl",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
"pl/introduction.mdx": {
  id: "pl/introduction.mdx",
  slug: "pl/introduction",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] },
},
"poems": {
"en/cup-of-tea.mdx": {
  id: "en/cup-of-tea.mdx",
  slug: "en/cup-of-tea",
  body: string,
  collection: "poems",
  data: InferEntrySchema<"poems">
} & { render(): Render[".mdx"] },
"ja/cup-of-tea.mdx": {
  id: "ja/cup-of-tea.mdx",
  slug: "ja/cup-of-tea",
  body: string,
  collection: "poems",
  data: InferEntrySchema<"poems">
} & { render(): Render[".mdx"] },
"pl/cup-of-tea.mdx": {
  id: "pl/cup-of-tea.mdx",
  slug: "pl/cup-of-tea",
  body: string,
  collection: "poems",
  data: InferEntrySchema<"poems">
} & { render(): Render[".mdx"] },
"pl/spring.mdx": {
  id: "pl/spring.mdx",
  slug: "pl/spring",
  body: string,
  collection: "poems",
  data: InferEntrySchema<"poems">
} & { render(): Render[".mdx"] },
"pl/sunset.mdx": {
  id: "pl/sunset.mdx",
  slug: "pl/sunset",
  body: string,
  collection: "poems",
  data: InferEntrySchema<"poems">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
