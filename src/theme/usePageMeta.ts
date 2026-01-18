import { useEffect } from "react";

type MetaOptions = {
  title?: string;
  noindex?: boolean;
};

const baseTitle = "Sebastian Vo";

export const usePageMeta = ({ title, noindex }: MetaOptions) => {
  useEffect(() => {
    if (title && title !== "Home") {
      document.title = `${title} - ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }

    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute("content", noindex ? "noindex, nofollow" : "index, follow");
    }
  }, [title, noindex]);
};
