import type { RequestHandler } from '@sveltejs/kit';
import type { RawPostMetadata } from './posts/post';

export const get: RequestHandler = async ({ params }) =>  {
    const postImporters = Object.values(await import.meta.glob('./posts/**.md'))
    const posts = await Promise.all(postImporters.map(async importer => {
      const { metadata } = await importer();
      return (metadata as RawPostMetadata);
    }))
    return {
      body: {
        posts: posts,
      }
    }
  }