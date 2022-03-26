import { styled } from "@mui/material/styles";
import { Container, alpha, Typography, Box } from "@mui/material";
import { shadowHeading } from "src/utils/shadowHeading";
import { collectionInfo } from "src/config/collectionInfo";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(14, 0)
}));

const Subtitle = styled((props) => <Typography variant="h2" {...props} />)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  filter: shadowHeading(theme.palette.secondary.main),

  marginBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    textAlign: "left"
  }
}));

const SummaryItems = styled(Box)(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.shape.borderRadiusMd,
  padding: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3)
  }
}));

export function LandingFAQs() {
  return (
    <RootStyle>
      <Container maxWidth="md">
        <Subtitle>Details</Subtitle>

        <SummaryItems maxWidth="md">
          <Typography variant="body2">
            <ul>
              <li>
                All income from primary sales and royalties will be donated to Ukraine through{" "}
                <a href="https://www.ukrainedao.love/" target="_blank" rel="noreferrer">
                  UkraineDao
                </a>
                .
              </li>
              <li>The minting price is {collectionInfo.price} ETH.</li>
              <li>Max. mint per transaction is {collectionInfo.maxTransactions}.</li>
              <li>Royalty fees will be put at 10%. All royalties will go to Ukraine.</li>
              <li>There are {collectionInfo.size} items in the collection: 90% KMBs, 10% Vladimirs.</li>
              <li>
                The artwork is{" "}
                <a target="_blank" href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noreferrer">
                  public domain
                </a>
                .
              </li>
              <li>The characters have been programmatically generated using over 100 traits. Some characters are rarer than others.</li>
              <li>The images are stored on IPFS.</li>
              <li>30 characters have been reserved for giveaways, people who helped us along the way, and the team.</li>
              <li>ERC-721 tokens are used on the Ethereum blockchain.</li>
              {/* <li>
        ERC721 contract is verified on Etherscan and can be found{" "}
        <a target="_blank" href={etherScanLink} rel="noreferrer">
          here
        </a>
      </li> */}
            </ul>
          </Typography>
        </SummaryItems>
      </Container>
    </RootStyle>
  );
}
