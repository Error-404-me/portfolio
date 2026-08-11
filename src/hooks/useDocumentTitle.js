import { useEffect } from "react";

export function useDocumentTitle(title, description) {
  useEffect(() => {
    if (!title) return undefined;

    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = description
      ? document.querySelector('meta[name="description"]')
      : null;
    const previousDescription = descriptionTag?.getAttribute("content");

    if (descriptionTag && description) {
      descriptionTag.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription !== undefined) {
        descriptionTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
