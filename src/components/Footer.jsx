import React from "react";
import { Box, Typography, Link, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.common.black,
  padding: theme.spacing(4, 10),
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 100%",
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  marginBottom: theme.spacing(1),
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(1),
  width: "50%",
  "&.MuiOutlinedInput-root.MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.common.black, // Set the outline color initially
  },
}));

const FooterButton = styled(Button)(({ theme }) => ({
  "&.MuiOutlinedInput-root.MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.common.black, // Set the outline color initially
  },
}));

function Footer() {
  return (
    <FooterContainer>
      {/* Furniro Section */}
      <Section>
        <FooterTitle>Furniro.</FooterTitle>
        <Typography variant="body2">
          400 University Drive Suite 200 Coral Gables,
          <br /> FL 33134 USA
        </Typography>
      </Section>

      {/* Links Section */}
      <Section>
        <FooterTitle>Links</FooterTitle>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Shop</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </Section>

      {/* Helps Section */}
      <Section>
        <FooterTitle>Helps</FooterTitle>
        <FooterLink href="#">FAQs</FooterLink>
        <FooterLink href="#">Shipping</FooterLink>
        <FooterLink href="#">Returns</FooterLink>
        <FooterLink href="#">Support</FooterLink>
      </Section>

      {/* Newsletter Section */}
      <Section>
        <FooterTitle>Newsletter</FooterTitle>
        <NewsletterInput
          variant="standard" // Correct way to set the TextField variant
          size="small"
          placeholder="Enter your email"
        />
      </Section>
      <Section>
        <FooterButton
          variant="standard"
          size="small"
          sx={{
            paddingTop: "3rem",
            paddingRight: "5rem",
          }}
        >
          Subscribe
        </FooterButton>
      </Section>
    </FooterContainer>
  );
}

export default Footer;
