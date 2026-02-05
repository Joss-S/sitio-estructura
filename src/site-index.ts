export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
    id: string;
    title: string;
    descripcion: string;
    path: string;
    type: SiteItemType;
    section: string;
    keywords: string[];
    otro?: string;
};

export const SITE_INDEX: SiteItem[] = [
   {
    id: 'inicio',
    title: 'Inicio',
    descripcion: 'Página principal del inicio del sitio de practica',
    path: '/',
    type: 'pagina',
    section: 'Estructura del sitio',
    keywords: ['inicio', 'home', 'principal', 'estructura', 'bienvenida'],
    otro: ""
   },
   {
    id: 'elementos',
    title: 'Elementos del sitio',
    descripcion: 'Identifica los elementos que componen un sitio web',
    path: '/elementos',
    type: 'pagina',
    section: 'Estructura del sitio',
    keywords: ['elementos', 'sitio', 'header', 'footer', 'main', 'layout', 'componentes'],
   },
   {
    id: 'menu',
    title: 'Sistema de Navegación',
    descripcion: 'Información sobre el menú y navegación del sitio web',
    path: '/menu',
    type: 'pagina',
    section: 'Navegacion',
    keywords: ['menu', 'navegacion', 'enlaces', 'links', 'rutas'],
   },
   {
    id: 'breadcrumbs',
    title: 'Breadcrumbs',
    descripcion: 'Describe el funcionamiento y utilidad de los breadcrumbs',
    path: '/breadcrumbs',
    type: 'pagina',
    section: 'Navegacion',
    keywords: ['breadcrumbs', 'migas', 'ruta', 'navegacion', 'ux', 'orientacion'],
   },
   {
    id: 'mapa',
    title: 'Mapa del sitio',
    descripcion: 'Diseño del mapa del sitio y relación con la navegación',
    path: '/mapa-sitio',
    type: 'pagina',
    section: 'Estructura del sitio',
    keywords: ['mapa', 'sitio', 'sitemap', 'estructura', 'rutas', 'indice'],
   },
   {
    id: 'busqueda',
    title: 'Búsqueda',
    descripcion: 'Sistema de búsqueda de contenido con filtros avanzados',
    path: '/busqueda',
    type: 'pagina',
    section: 'Herramientas',
    keywords: ['busqueda', 'search', 'buscar', 'encontrar', 'filtros'],
   },
   {
    id: 'error-404',
    title: 'Error 404',
    descripcion: 'Página para rutas no existentes (404).',
    path: '/no-existe',
    type: 'seccion',
    section: 'Errores',
    keywords: ['404', 'error', 'no encontrado', 'ruta'],
   }
]
