import { List, ListItemButton, ListItemText, Paper } from "@mui/material";

const menuItems = [
  "General",
  "Security",
  "Notifications",
  "Billing Information",
];

export default function AccountSidebar({ selected, setSelected }) {
  return (
    <Paper elevation={3} sx={{ p: 1, minWidth: 220 }}>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item}
            selected={selected === item}
            onClick={() => setSelected(item)}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
