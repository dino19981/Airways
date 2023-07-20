import { ListItem, ListItemButton, ListItemText } from "@mui/material";

type Props = {
  links: string[];
};

export function BurgerMenuLinks({ links }: Props) {
  return (
    <>
      {links.map((link) => (
        <ListItem key={link} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={link} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}
