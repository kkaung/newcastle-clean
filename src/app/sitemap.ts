import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';
import { type MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/house-cleaning-pricing-newcastle',
        '/blog',
        '/frequently-asked-questions',
        '/house-cleaning-checklist',
        '/sitemap',

        '/bond-cleaning-newcastle',
        '/deep-cleaning-newcastle',
        '/regular-cleaning-newcastle',
        '/office-cleaning-newcastle',
        '/oven-cleaning-newcastle',
        '/carpet-cleaning-newcastle',
        '/window-cleaning-newcastle',
        '/after-builder-cleaning-newcastle',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes, ...authorsRoutes];
}
