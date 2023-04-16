declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
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
"en/404.mdoc": {
  id: "en/404.mdoc",
  slug: "en/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"en/about-me.mdoc": {
  id: "en/about-me.mdoc",
  slug: "en/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"en/index.mdoc": {
  id: "en/index.mdoc",
  slug: "en",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"en/intro.mdoc": {
  id: "en/intro.mdoc",
  slug: "en/intro",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"es/404.mdoc": {
  id: "es/404.mdoc",
  slug: "es/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"es/about-me.mdoc": {
  id: "es/about-me.mdoc",
  slug: "es/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"es/index.mdoc": {
  id: "es/index.mdoc",
  slug: "es",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"es/intro.mdoc": {
  id: "es/intro.mdoc",
  slug: "es/intro",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"ja/404.mdoc": {
  id: "ja/404.mdoc",
  slug: "ja/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"ja/about-me.mdoc": {
  id: "ja/about-me.mdoc",
  slug: "ja/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"ja/index.mdoc": {
  id: "ja/index.mdoc",
  slug: "ja",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"ja/intro.mdoc": {
  id: "ja/intro.mdoc",
  slug: "ja/intro",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"pl/404.mdoc": {
  id: "pl/404.mdoc",
  slug: "pl/404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"pl/about-me.mdoc": {
  id: "pl/about-me.mdoc",
  slug: "pl/about-me",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"pl/index.mdoc": {
  id: "pl/index.mdoc",
  slug: "pl",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
"pl/intro.mdoc": {
  id: "pl/intro.mdoc",
  slug: "pl/intro",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdoc"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
