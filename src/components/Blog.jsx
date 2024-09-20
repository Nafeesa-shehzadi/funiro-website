import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Grid2,
} from "@mui/material";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SellIcon from "@mui/icons-material/Sell";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Search from "@mui/icons-material/Search";

const theme = createTheme();

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: "url(bk.png)", // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center", // Make sure the image is centered
  height: "30vh", // Increase height to avoid content overflow
  display: "flex",
  flexDirection: "column", // Allow vertical positioning
  justifyContent: "flex-start", // Align items from the top
  alignItems: "center", // Center horizontally if needed
  paddingTop: theme.spacing(20), // Use smaller padding for spacing
  width: "100%", // Make sure the width is responsive
}));

const BlogComsec = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "auto",
  width: "100%",
}));
const BlogSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "auto",
  width: "60%",
  padding: theme.spacing(10),
}));
const BlogNextSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "auto",
  width: "40%",
  padding: theme.spacing(0, 2),
}));
const BlogSearch = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "Column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  width: "100%",
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginBottom: theme.spacing(2), // Space below the search bar
}));

const BlogImage = styled("img")(({ theme }) => ({
  width: "100%", // Corrected to use a single '%' sign
  height: "auto", // Allow height to adjust based on width
  borderRadius: "10px",
}));
const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(2), // Space above the icons
  marginLeft: theme.spacing(0),
  gap: theme.spacing(7), // Space between icons and text
}));

const IconWithText = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "start",
}));

const BlogTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginTop: theme.spacing(2), // Space above the title
  marginBottom: theme.spacing(2), // Space below the title
  width: "100%",
  variant: "h4",
  fontSize: 30,
}));

const BlogContent = styled(Typography)(({ theme }) => ({
  variant: "body1",
  width: "100%",
  marginBottom: theme.spacing(3),
}));

const BlogMore = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4), // Space below the content
  color: theme.palette.primary.main, // Use primary color for the button
  textDecoration: "underline",
  cursor: "pointer",
  variant: "body2",
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: theme.spacing(2), // Space above the buttons
  marginLeft: theme.spacing(70),
  width: "40%",
  maxWidth: "100%", // Ensure it doesn't exceed parent width
  gap: theme.spacing(2), // Space between buttons
}));

const NextButtons = styled(Button)(({ theme }) => ({
  fontSize: 20, // Increase font size for better visibility
  backgroundColor: "#e6d6bc", // Use primary color for the button
  color: theme.palette.common.white, // White text color for a better contrast
  borderRadius: "7px",
}));
const ServicesSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "auto",
  width: "100%",
  padding: theme.spacing(10),
  backgroundColor: "#e6d6bc",
}));
const SerIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(2), // Space above the icons
  marginLeft: theme.spacing(5),
}));

function Blog() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeroSection>
          <Box>
            <img src="mainlogo.png" alt="logo" />
            <Typography variant="h5">Blog</Typography>
            <Typography variant="h5">
              Home <NavigateNextOutlinedIcon /> Blog
            </Typography>
          </Box>
        </HeroSection>
        <BlogComsec>
          <BlogSection>
            <BlogImage src="Blog.png" alt="blog1" />
            <IconContainer>
              <IconWithText>
                <PersonOutlineOutlinedIcon />
                <Typography variant="subtitle 3">admin </Typography>
              </IconWithText>
              <IconWithText>
                <CalendarMonthRoundedIcon />
                <Typography variant="subtitle 3">3 Sep 2024</Typography>
              </IconWithText>
              <IconWithText>
                <SellIcon />
                <Typography variant="subtitle 3">wood</Typography>
              </IconWithText>
            </IconContainer>
            <BlogTitle>Going all-in with millennial design</BlogTitle>
            <BlogContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus arcu nec ipsum congue, vitae pharetra ipsum fermentum.
              Nulla facilisi. Nullam non purus vel ipsum tincidunt imperdiet vel
              vel ipsum. Duis vel arcu vel sapien consectetur consectetur. Sed
              non nisi non ipsum varius bibendum. Donec non est ac justo auctor
              sagittis. Donec pharetra, massa eu condimentum vestibulum, ipsum
              tellus semper velit, ac facilisis felis nunc a turpis. Integer
              lobortis, nunc vel consectetur faucibus, mauris velit consectetur
              velit, in consectetur ligula ligula ut odio.
            </BlogContent>
            <BlogMore>Read more</BlogMore>
            <BlogImage src="blog2.png" alt="blog1" />
            <IconContainer>
              <IconWithText>
                <PersonOutlineOutlinedIcon />
                <Typography variant="subtitle 3">admin </Typography>
              </IconWithText>
              <IconWithText>
                <CalendarMonthRoundedIcon />
                <Typography variant="subtitle 3">3 Sep 2024</Typography>
              </IconWithText>
              <IconWithText>
                <SellIcon />
                <Typography variant="subtitle 3">wood</Typography>
              </IconWithText>
            </IconContainer>
            <BlogTitle>Exploring new ways of decorating </BlogTitle>
            <BlogContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus arcu nec ipsum congue, vitae pharetra ipsum fermentum.
              Nulla facilisi. Nullam non purus vel ipsum tincidunt imperdiet vel
              vel ipsum.
            </BlogContent>

            <BlogMore>Read more</BlogMore>

            <BlogImage src="blog3.png" alt="blog3" />
            <IconContainer>
              <IconWithText>
                <PersonOutlineOutlinedIcon />
                <Typography variant="subtitle 3">admin </Typography>
              </IconWithText>
              <IconWithText>
                <CalendarMonthRoundedIcon />
                <Typography variant="subtitle 3">3 Sep 2024</Typography>
              </IconWithText>
              <IconWithText>
                <SellIcon />
                <Typography variant="subtitle 3">wood</Typography>
              </IconWithText>
            </IconContainer>
            <BlogTitle>Handmade pieces that took time to make</BlogTitle>
            <BlogContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus arcu nec ipsum congue, vitae pharetra ipsum fermentum.
              Nulla facilisi. Nullam non purus vel ipsum tincidunt imperdiet vel
              vel ipsum. Duis vel arcu vel sapien consectetur consectetur. Sed
              non nisi non ipsum varius bibendum. Donec non est ac justo auctor
              sagittis. Donec pharetra, massa eu condimentum vestibulum, ipsum
              tellus semper velit, ac facilisis felis nunc a turpis. Integer
              lobortis, nunc vel consectetur faucibus, mauris velit consectetur
              velit, in consectetur ligula ligula ut odio.
            </BlogContent>
            <BlogMore>Read more</BlogMore>
            <ButtonContainer>
              <NextButtons
                sx={{
                  backgroundColor: "#ad8544",
                }}
              >
                1
              </NextButtons>
              <NextButtons>2</NextButtons>
              <NextButtons>3</NextButtons>
              <NextButtons>Next</NextButtons>
            </ButtonContainer>
          </BlogSection>
          <BlogNextSection>
            <BlogSearch>
              <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant="h6">Categories</Typography>
              <Grid2 container spacing={1} sx={{ marginTop: 1 }}>
                {/* Category List */}
                <Grid2 item xs={6}>
                  <Typography>Crafts</Typography>
                </Grid2>
                <Grid2 item xs={6}>
                  <Typography>2</Typography>
                </Grid2>
                <Grid2 item xs={6}>
                  <Typography>Handmade</Typography>
                </Grid2>
                <Grid2 item xs={6}>
                  <Typography>8</Typography>
                </Grid2>
                <Grid2 item xs={6}>
                  <Typography>Interior</Typography>
                </Grid2>
                <Grid2 item xs={6}>
                  <Typography>5</Typography>
                </Grid2>
              </Grid2>
            </BlogSearch>
          </BlogNextSection>
        </BlogComsec>
        <ServicesSection>
          <SerIconContainer>
            <Grid2 container spacing={25}>
              <Grid2>
                <img src="quality.png" alt="quality" />
                <Typography variant="h6 ">
                  High Quality
                  <br />
                  crafted from top materials{" "}
                </Typography>
              </Grid2>
              <Grid2>
                <img src="wrnty.png" alt="quality" />
                <Typography variant="h6 ">
                  Warranty protection
                  <br />
                  crafted from top materials{" "}
                </Typography>
              </Grid2>
              <Grid2>
                <img src="shiping.png" alt="quality" />
                <Typography variant="h6 ">
                  Warranty
                  <br />
                  crafted from top materials{" "}
                </Typography>
              </Grid2>
              <Grid2>
                <img src="support.png" alt="quality" />
                <Typography variant="h6 ">
                  Warranty
                  <br />
                  crafted from top materials{" "}
                </Typography>
              </Grid2>
            </Grid2>
          </SerIconContainer>
        </ServicesSection>
      </ThemeProvider>
    </>
  );
}

export default Blog;
