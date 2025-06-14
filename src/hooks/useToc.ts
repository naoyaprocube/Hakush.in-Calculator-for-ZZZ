'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export interface HeadingData {
  id: string;
  level: number;
  text: string;
  element: HTMLElement; // HTMLHeadingElementからHTMLElementに変更
}

export const useToc = (selectors = 'h2, h3, [data-toc-title]') => { // デフォルトセレクタにdata-toc-titleを追加
  const [headings, setHeadings] = useState<HeadingData[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(selectors)
    ) as HTMLElement[]; // HTMLHeadingElementからHTMLElementに変更

    const newHeadings = elements.map((element, index) => {
      const id = element.id || `toc-item-${index}`;
      if (!element.id) {
        element.id = id;
      }

      let text = element.dataset.tocTitle || element.innerText || element.textContent || '';
      let level = parseInt(element.dataset.tocLevel || '', 10);

      if (isNaN(level)) {
        if (element.tagName.startsWith('H') && element.tagName.length === 2) {
          level = parseInt(element.tagName.substring(1), 10);
        } else {
          level = 3; // デフォルトレベル (hタグ以外の場合)
        }
      }

      return {
        id,
        level,
        text,
        element: element,
      };
    });
    setHeadings(newHeadings);
  }, [pathname, selectors]);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    const currentObserver = observer.current;
    headings.forEach((heading) => {
      if (heading.element) {
        currentObserver?.observe(heading.element);
      }
    });

    return () => {
      currentObserver?.disconnect();
    };
  }, [headings]);

  return { headings, activeId, setActiveId };
};
