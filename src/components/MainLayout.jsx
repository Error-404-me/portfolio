import SideBar from "./SideBar";

export default function MainLayout({
  isSidebarCollapsed,
  onToggleSidebar,
  children,
}) {
  return (
    <div className="flex">
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={onToggleSidebar}
      />
      <main className="flex-1 h-screen overflow-y-auto max-[767px]:pb-[calc(64px+env(safe-area-inset-bottom))] [background-image:linear-gradient(180deg,rgba(255,255,255,.035),transparent_360px),radial-gradient(var(--color-line)_1px,transparent_1px)] [background-repeat:no-repeat,repeat] [background-size:auto,22px_22px]">
        {children}
      </main>
    </div>
  );
}
