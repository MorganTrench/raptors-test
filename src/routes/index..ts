import type { RequestHandler, ResponseBody } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) =>  {
    const postImporters = Object.values(await import.meta.glob('./posts/**.md'))
    const posts = await Promise.all(postImporters.map(async importer => {
      const { metadata } = await importer();
      return metadata;
    }))
    return {
      body: {
        posts,
      }
    }
  }