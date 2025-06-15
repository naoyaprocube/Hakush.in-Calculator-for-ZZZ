'use client';

import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { HeadingData, useToc } from '../hooks/useToc';
interface TableOfContentsProps {
  selectors?: string; // オプションでセレクタを指定できるようにする
}

const TableOfContents = ({ selectors = 'h2, h3' }: TableOfContentsProps) => {
  const { headings, activeId, setActiveId } = useToc(selectors);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    <Box component="aside" sx={{ flex: 1, position: 'sticky' }}>
      <Stack
        component="nav"
        sx={{
          display: isMobile ? 'none' : 'block', // モバイルでは非表示
          maxHeight: '100vh',
          overflowY: 'auto',
          p: 2,
          borderRight: 1,
          borderColor: 'divider',
          position: 'sticky',
          width: 250,
          top: 30
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
      </Stack>
    </Box>
  );
};

export default TableOfContents;
