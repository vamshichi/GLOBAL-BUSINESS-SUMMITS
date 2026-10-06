export type NavItem={label:string;href:string;children?:{label:string;href:string}[]};
export const navigation:NavItem[]=[
{label:"Home",href:"/"},{label:"About Us",href:"/about"},
{label:"What We Do",href:"/conferences-summits",children:[{label:"Conferences & Summits",href:"/conferences-summits"},{label:"Trainings",href:"/trainings"},{label:"Managed Events",href:"/managed-events"}]},
{label:"Events",href:"/events",children:[{label:"Upcoming Events",href:"/events#upcoming"},{label:"Past Events / Highlights",href:"/events#past"}]},
// {label:"Media",href:"/media",children:[{label:"Press & News",href:"/media#press"},{label:"Photo Gallery",href:"/media#gallery"},{label:"Testimonials",href:"/media#testimonials"}]},
{label:"Careers",href:"/careers"},{label:"Contact",href:"/contact"}];
