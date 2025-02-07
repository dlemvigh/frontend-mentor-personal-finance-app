import { PotsList } from "@/components/pots/pots-list";
import { getPots } from "@/data/api";

export default async function PotsPage() {

    const data = await getPots();

    return (
      <>
        <h1>Pots</h1>
        <PotsList pots={data} />
      </>
    );
  }
  