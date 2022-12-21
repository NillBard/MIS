import { Typography } from "@mui/material";

export default function TextItem({ label, content }) {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <Typography variant="h6">{content}</Typography>
    </>
  );
}
