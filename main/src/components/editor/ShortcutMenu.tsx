import React, { useState, useEffect } from "react";

export interface MenuItemType {
  label: string;
  description: string;
  action: () => void;
}

export const menuItems: MenuItemType[] = [
  {
    label: "Text",
    description: "Just start writing with plain text.",
    action: () => console.log("Text block selected"),
  },
  {
    label: "Page",
    description: "Embed a sub-page inside this page.",
    action: () => console.log("Page block selected"),
  },
  {
    label: "To-do list",
    description: "Track tasks with a to-do list.",
    action: () => console.log("To-do list block selected"),
  },
  {
    label: "Heading 1",
    description: "Big section heading.",
    action: () => console.log("Heading 1 block selected"),
  },
  {
    label: "Heading 2",
    description: "Smaller section heading.",
    action: () => console.log("Heading 2 block selected"),
  },
];



const ShortcutMenu: React.FC<{ filteredItems: MenuItemType[] }>= ({filteredItems}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const filteredItems = menuItems.filter((item) =>
  //   item.label.toLowerCase().includes(filter.toLowerCase())
  // );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        setIsVisible(true);
        setFilter("");
      } else if (event.key === "Escape") {
        setIsVisible(false);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredItems.length - 1)
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (event.key === "Enter" && isVisible) {
        event.preventDefault();
        filteredItems[selectedIndex]?.action();
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, filter, filteredItems, selectedIndex]);

  return (
    <>
      {isVisible && (
        <div className="absolute top-24 left-12 w-72 bg-gray-800 rounded-lg shadow-lg z-50">
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white border-b border-gray-600 rounded-t-lg focus:outline-none"
            placeholder="Filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <ul className="list-none m-0 p-0 max-h-52 overflow-y-auto">
            {filteredItems.map((item, index) => (
              <li
                key={item.label}
                className={`flex items-start p-3 cursor-pointer transition-all ${
                  index === selectedIndex
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => {
                  item.action();
                  setIsVisible(false);
                }}
              >
                <div className="flex-shrink-0 w-6 h-6 mr-3">
                  {/* Optional icon can be placed here */}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    {item.label}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {item.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ShortcutMenu;
