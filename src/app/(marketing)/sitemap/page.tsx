import {
    PageHeader,
    PageHeaderHeading,
    headingVariants,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import { allPages, allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Sitemap', href: '/sitemap' },
                ]}
                dottable={false}
            />
            <PageHeader>
                <PageHeaderHeading>Sitemap</PageHeaderHeading>
            </PageHeader>
            <section className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Pages
                    </h2>
                    <ul>
                        {allPages.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/${i.slugAsParams}`}
                                    className="hover:underline"
                                    title={`${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Services
                    </h2>
                    <ul>
                        {siteConfig.mainNav[0].items!.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`${i.href}`}
                                    className="hover:underline"
                                    title={`${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Posts
                    </h2>
                    <ul>
                        {allPosts.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/${i.slugAsParams}`}
                                    className="hover:underline"
                                    title={`${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </Shell>
    );
}
