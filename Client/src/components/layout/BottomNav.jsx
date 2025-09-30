import { NavLink } from 'react-router-dom';

const navs = [
  {
    to: '/',
    label: 'Home',
    icon: (active) => (
      <svg width="24" height="24" fill="none" stroke={active ? "#B82020" : "#888"} strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 12L12 5l8 7" />
        <rect x="6" y="12" width="12" height="7" rx="2" />
      </svg>
    ),
  },
  {
    to: '/category',
    label: 'Category',
    icon: (active) => (
      <svg width="24" height="24" fill="none" stroke={active ? "#B82020" : "#888"} strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="3" rx="1.5" />
      </svg>
    ),
  },
  {
    to: '/new-drops',
    label: 'New Drops',
    icon: (active) => (
      <svg width="24" height="24" fill="none" stroke={active ? "#B82020" : "#888"} strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    to: '/account',
    label: 'Account',
    icon: (active) => (
      <svg width="24" height="24" fill="none" stroke={active ? "#B82020" : "#888"} strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <rect x="6" y="16" width="12" height="5" rx="2.5" />
      </svg>
    ),
  },
];

const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 shadow z-50 flex justify-between px-2 py-1 md:hidden">
    {navs.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          "flex flex-col items-center flex-1 py-1 font-sans " +
          (isActive ? "text-primary-700" : "text-neutral-500")
        }
        end={item.to === "/"}
      >
        {({ isActive }) => (
          <>
            {item.icon(isActive)}
            <span
              className={
                "text-[13px] mt-0.5 font-normal tracking-normal font-sans " +
                (isActive ? "text-primary-700" : "text-neutral-500")
              }
            >
              {item.label}
            </span>
          </>
        )}
      </NavLink>
    ))}
  </nav>
);

export default BottomNav; 