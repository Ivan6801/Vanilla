import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    const view = `
    <div class="Characters">
     ${characters.results.map(people => `
     <article class="Character-item">
     <a href="#/${people.next}/">
        <img src="image" alt="${people.name}">
        <h2>${people.name}</h2>
     </a>
     </article>
     `).join('')}

    </div>
    `;
    return view;
};

export default Home;