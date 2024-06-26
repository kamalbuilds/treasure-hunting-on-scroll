import { Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import { CHARACTER_EDITION_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function MintContainer() {
  return (
    <div className={styles.collectionContainer}>
      <h1>⚔️ Treasure Hunting on Scroll ⚔️</h1>

      <p>Claim your Character NFT to start hunting!</p>

      <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <Image src="/captaincool.gif" height={200} width={200} alt="captaincool" />
      </div>

      <div className={styles.smallMargin}>
        <Web3Button
          theme="dark"
          contractAddress={CHARACTER_EDITION_ADDRESS}
          action={(contract) => contract.erc1155.claim(0, 1)}
        >
          Claim
        </Web3Button>
      </div>
    </div>
  );
}
