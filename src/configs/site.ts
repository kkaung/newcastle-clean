import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/people/Coast-Maid/61556988147072/',
    instagram: 'https://instagram.com/coastmaid',
    twitter: 'https://twitter.com/coastmaid',
    pinterest: 'https://www.pinterest.com.au/coastmaid',
    linkin: 'https://www.linkedin.com/company/coast-maid',
    youtube: 'https://www.youtube.com/@CoastMaid',
    googlemap: '',

    yelp: 'https://www.yelp.com/biz/',
    westmaid: 'https://westmaid.com.au/',
};

export const siteConfig = {
    logo: 'MaidNewie',
    name: 'Maid Newie',
    title: `newcastle's Premium House Cleaning Serivce | Coast Maid`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our professional cleaners. Book online in 60 seconds!`,
    url: 'https://maidnewie.com.au',
    ogImage: 'https://maidnewie.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-newcastle',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-newcastle',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-newcastle',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-newcastle',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-newcastle',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-newcastle',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-newcastle',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-newcastle',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/house-cleaning-pricing-newcastle',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-newcastle',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-newcastle',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-newcastle',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-newcastle',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-newcastle',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-newcastle',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-newcastle',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-newcastle',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                {
                    title: 'Pricing',
                    href: '/house-cleaning-pricing-newcastle',
                },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about' },
                { title: 'Careers', href: '/careers' },
                { title: 'Sitemap', href: '/sitemap' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@coastmaid.com.au',
        phone: '1302 245 417',
        address: '10 Rowes St, 4217 Queensland',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: '727',
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
