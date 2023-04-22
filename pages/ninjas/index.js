import styles from '@/styles/Ninjas.module.css'
import Link from 'next/link';

export const getStaticProps = async() =>{

    const res = await fetch(process.env.USERS_URL);
    const data = await res.json();

    return {
        props: { ninjas: data}
    }
}


const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={"/ninjas/" + ninja.id} key={ ninja.id } className={ styles.single }>
                    <h3>{ ninja.name }</h3>
                </Link>
            ))}
        </div>
    );
}
 
export default Ninjas;