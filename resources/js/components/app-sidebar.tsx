import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, FileText, FileWarning, Folder, Images, LayoutGrid, Newspaper, PackageCheck, UserCheck2, Users } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Kelola Struktur',
        href: dashboard(),
        icon: Users,
    },
    {
        title: 'List Pengaduan',
        href: dashboard(),
        icon: FileWarning,
    },
    {
        title: 'Kelola Data Penduduk',
        href: '/admin/kelola-penduduk',
        icon: UserCheck2,
    },
    {
        title: 'Kelola Berita',
        href: '/admin/kelola-berita',
        icon: Newspaper,
    },
    {
        title: 'Kelola Galeri',
        href: '/admin/kelola-galeri',
        icon: Images,
    },
];


export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
