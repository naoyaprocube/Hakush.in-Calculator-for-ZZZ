'use client';

import { useToc, HeadingData } from '../hooks/useToc';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

interface TableOfContentsProps {
  selectors?: string; // オプションでセレクタを指定できるようにする
}

const TableOfContents = ({ selectors = 'h2, h3' }: TableOfContentsProps) => {
  const { headings, activeId, setActiveId } = useToc(selectors);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setActiveId(id);
      // URLのハッシュを手動で更新 (オプション)
      // window.history.pushState(null, '', `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <Box
      component="nav"
      sx={{
        position: 'sticky',
        top: '4rem', // ヘッダーの高さに応じて調整
        maxHeight: 'calc(100vh - 4rem)',
        overflowY: 'auto',
        p: 2,
        borderLeft: 1,
        borderColor: 'divider',
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        On this page
      </Typography>
      <List dense>
        {headings.map((heading: HeadingData) => (
          <ListItemButton
            key={heading.id}
            selected={activeId === heading.id}
            onClick={() => handleClick(heading.id)}
            sx={{
              pl: heading.level === 3 ? 4 : 2, // h3の場合はインデントを深くする
              '&.Mui-selected': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selected',
                },
                '& .MuiListItemText-primary': {
                  fontWeight: 'bold',
                  color: 'primary.main',
                },
              },
            }}
          >
            <ListItemText primary={heading.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default TableOfContents;
