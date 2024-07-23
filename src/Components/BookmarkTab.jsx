import React from "react";

const BookmarkTab = () => {
  return (
    <div>
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>

        <div className="space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Bookmark 1 </strong>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Bookmark 2 </strong>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option3"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Bookmark 3 </strong>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default BookmarkTab;
