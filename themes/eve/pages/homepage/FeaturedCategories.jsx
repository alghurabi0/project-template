import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
        <div className="relative col-span-1 row-span-1 men-cat text-center">
          <a
            className="absolute underline top-[20px] bg-white px-2"
            href="/all/fruits">
            <h2 className="text-center">فواكه</h2>
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat text-center">
          <a
            className="absolute underline top-[20px] bg-white px-2"
            href="/all/baked">
            <h2 className="text-center">مخبوزات</h2>
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat text-center">
          <a
            className="absolute underline top-[20px] bg-white px-2"
            href="/all">
            <h2 className="text-center">الكل</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
