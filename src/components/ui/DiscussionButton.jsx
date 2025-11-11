import React, { useEffect } from "react";

const FloatingButton = ({
  href = "https://github.com/orgs/MooseNeuro/discussions",
  icon = "groups_2",
  label = "Ask queries, discuss ideas, and collaborate with others through GitHub Discussions.",
  openInNewTab = true,
}) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=groups_2";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleClick = () => {
    if (!href) return;

    if (openInNewTab) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-brand-tertiary hover:bg-blue-800 text-white font-medium rounded-full shadow-xl transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-blue-100 hover:cursor-pointer"
    >
      <span className="material-symbols-outlined text-xs">{icon}</span>
      <span className="text-xl">Discussion</span>
      <div className="absolute right-45 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {label}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  );
};

export default FloatingButton;
