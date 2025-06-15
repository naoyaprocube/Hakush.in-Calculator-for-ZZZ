"use client";

import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Box, Drawer, IconButton, Paper, Typography, useTheme, useMediaQuery } from '@mui/material';

interface CalculatorDrawerProps {
  drawerWidth: number;
  open: boolean;
  onClose: () => void;
}

export default function CalculatorDrawer({ drawerWidth, open, onClose }: CalculatorDrawerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      slotProps={{ 
        paper: { sx: { width: drawerWidth } } // ドロワーの幅を設定
      }}
      variant={isMobile ? 'temporary' : 'permanent'}
      anchor="right"
      open={isMobile ? open : true} // permanent の場合は常に true (表示)
      onClose={isMobile ? onClose : undefined} // permanent の場合は onClose 不要
      ModalProps={isMobile ? { keepMounted: true } : {}} // temporary の場合、パフォーマンス向上のため
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          p: 1,
        }}
      >
        {isMobile && ( // temporary の場合にのみ閉じるボタンを表示
          <IconButton onClick={onClose}>
            <ChevronRightIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          計算結果
        </Typography>
        <Typography paragraph>
          ここに計算結果が表示されます。
        </Typography>
        {/* Example content */}
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="subtitle1">合計:</Typography>
          <Typography variant="h4">1,234.56</Typography>
        </Paper>
      </Box>
    </Drawer>
  );
}
