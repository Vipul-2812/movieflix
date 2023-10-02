

import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from "@/app/styles/common.module.css"
import MovieCard from "@/app/component/MovieCard";




const Movies = async () => {

    // await new Promise(resolve => setTimeout(resolve, 2000));


    // const url = process.env.RAPID_KEY;
    const url = process.env.NEXT_APP_RAPIDURL;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1f8181b786msh0d26ce552917bfep1f1ce4jsn8a78b70a8407',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };


        const response = await fetch(url, options);
        const result = await response.json();
        const main_data=result.titles;



    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movies;