import Image from "next/image";
import styles from "./page.module.css";
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res: any) => res.data)


export default function Home() {
  const { data: cities, error } = useSWR('/api/dxb/itinerary', fetcher)

  return (
    <main className={styles.main}>
      <ul>
        {(cities || []).map(({ city, description }) => (<li>{city}</li>))}
      </ul>
    </main>
  );
}
