import { PotsList } from "@/components/pots/pots-list";
import { Button } from "@/components/ui/button/button";
import { getPots } from "@/data/api";
import styles from "./page.module.css";

export default async function PotsPage() {
  const data = await getPots();

  return (
    <>
      <div className={styles["header-row"]}>
        <h1>Pots</h1>
        <Button type="button" variant="primary">
          + Add New Pot
        </Button>
      </div>
      <PotsList pots={data} />
    </>
  );
}
