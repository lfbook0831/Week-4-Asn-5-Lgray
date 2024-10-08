import Head from 'next/head';
import path from 'path';
import fs from 'fs';

export default function Home({ people }) {
  return (
    <div className="container py-5" style={{ backgroundColor: '#ffe0e0' }}>
      <Head>
        <title>Libra SZN</title>
      </Head>

      <main>
        <h1 className="text-center" style={{ fontFamily: 'Pacifico, cursive', fontSize: '4rem', marginBottom: '2rem' }}>
          LIBRA SZN
        </h1>
        <ul className="list-group">
          {people && people.length > 0 ? (
            people.map((person, index) => (
              <li key={index} className="list-group-item">
                {person.name} - {person.date}
              </li>
            ))
          ) : (
            <li className="list-group-item">No data available</li>
          )}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data = fs.readFileSync(filePath, 'utf8');
  const people = JSON.parse(data);
  return {
    props: {
      people,
    },
  };
}
