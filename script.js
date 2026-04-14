// Book Database with 25+ genres and 4-5 books each
const booksDatabase = {
    "Fiction": [
        { title: "The Midnight Library", author: "Matt Haig", description: "A dazzling novel about all the choices that go into a life well lived.", price: 24.99, rating: 4.5 },
        { title: "The Silent Patient", author: "Alex Michaelides", description: "A shocking psychological thriller of a woman's act of violence against her husband.", price: 19.99, rating: 4.2 },
        { title: "Where the Crawdads Sing", author: "Delia Owens", description: "A coming-of-age murder mystery set in the marshes of North Carolina.", price: 22.99, rating: 4.7 },
        { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", description: "Hollywood icon Evelyn Hugo finally tells her story.", price: 21.99, rating: 4.8 },
        { title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", description: "A woman cursed to be forgotten by everyone she meets.", price: 23.99, rating: 4.3 }
    ],
    "Science Fiction": [
        { title: "Project Hail Mary", author: "Andy Weir", description: "A lone astronaut must save humanity from extinction.", price: 26.99, rating: 4.9 },
        { title: "Dune", author: "Frank Herbert", description: "A sweeping tale of politics, religion, and power on a desert planet.", price: 18.99, rating: 4.6 },
        { title: "The Martian", author: "Andy Weir", description: "An astronaut stranded on Mars must use his ingenuity to survive.", price: 17.99, rating: 4.7 },
        { title: "Neuromancer", author: "William Gibson", description: "The groundbreaking cyberpunk novel that defined the genre.", price: 20.99, rating: 4.4 },
        { title: "Foundation", author: "Isaac Asimov", description: "The epic saga of the fall and rise of galactic civilization.", price: 19.99, rating: 4.5 }
    ],
    "Fantasy": [
        { title: "The Name of the Wind", author: "Patrick Rothfuss", description: "The tale of a magically gifted young man who grows to be the most notorious wizard.", price: 25.99, rating: 4.8 },
        { title: "The Way of Kings", author: "Brandon Sanderson", description: "Epic fantasy set in a world of stone and storms.", price: 27.99, rating: 4.9 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", description: "Bilbo Baggins' unexpected journey with dwarves to reclaim their mountain home.", price: 16.99, rating: 4.7 },
        { title: "A Game of Thrones", author: "George R.R. Martin", description: "The beginning of the epic fantasy saga of power and betrayal.", price: 22.99, rating: 4.6 },
        { title: "The Priory of the Orange Tree", author: "Samantha Shannon", description: "A standalone epic fantasy with dragons and queens.", price: 24.99, rating: 4.4 }
    ],
    "Romance": [
        { title: "It Ends with Us", author: "Colleen Hoover", description: "A powerful story of love and difficult choices.", price: 19.99, rating: 4.3 },
        { title: "The Hating Game", author: "Sally Thorne", description: "Office rivals who can't stand each other but can't resist each other.", price: 18.99, rating: 4.1 },
        { title: "Beach Read", author: "Emily Henry", description: "Two writers challenge each other to write in their opposite genres.", price: 20.99, rating: 4.2 },
        { title: "Red, White & Royal Blue", author: "Casey McQuiston", description: "The First Son falls in love with a British prince.", price: 21.99, rating: 4.5 },
        { title: "The Duke and I", author: "Julia Quinn", description: "The first book in the Bridgerton series.", price: 17.99, rating: 4.0 }
    ],
    "Thriller": [
        { title: "The Girl on the Train", author: "Paula Hawkins", description: "A psychological thriller about a woman who sees something shocking.", price: 19.99, rating: 4.1 },
        { title: "Gone Girl", author: "Gillian Flynn", description: "A marriage gone terribly wrong in this psychological thriller.", price: 20.99, rating: 4.3 },
        { title: "The Da Vinci Code", author: "Dan Brown", description: "A thrilling mystery that spans centuries and continents.", price: 18.99, rating: 4.2 },
        { title: "The Reversal", author: "John Grisham", description: "A legal thriller about a prosecutor and defense attorney team.", price: 21.99, rating: 4.4 },
        { title: "The Silent Witness", author: "Richard North Patterson", description: "A courtroom drama with shocking twists.", price: 19.99, rating: 4.0 }
    ],
    "Mystery": [
        { title: "The Thursday Murder Club", author: "Richard Osman", description: "Four retirees solve cold cases in their retirement village.", price: 22.99, rating: 4.5 },
        { title: "The Lincoln Lawyer", author: "Michael Connelly", description: "A defense attorney operating from the back of his Lincoln sedan.", price: 19.99, rating: 4.3 },
        { title: "In the Woods", author: "Tana French", description: "A detective confronts the trauma of his childhood.", price: 20.99, rating: 4.4 },
        { title: "The Sweetness at the Bottom of the Pie", author: "Alan Bradley", description: "An eleven-year-old detective investigates a murder.", price: 18.99, rating: 4.2 },
        { title: "Murder on the Orient Express", author: "Agatha Christie", description: "Hercule Poirot investigates a murder on a snowbound train.", price: 17.99, rating: 4.6 }
    ],
    "Horror": [
        { title: "The Shining", author: "Stephen King", description: "A family's terrifying winter in an isolated hotel.", price: 19.99, rating: 4.5 },
        { title: "Dracula", author: "Bram Stoker", description: "The classic vampire tale that defined the genre.", price: 16.99, rating: 4.4 },
        { title: "Frankenstein", author: "Mary Shelley", description: "The story of a scientist and his monstrous creation.", price: 17.99, rating: 4.3 },
        { title: "The Haunting of Hill House", author: "Shirley Jackson", description: "Four people investigate a notoriously haunted house.", price: 18.99, rating: 4.2 },
        { title: "It", author: "Stephen King", description: "A shape-shifting entity terrorizes a small town.", price: 21.99, rating: 4.6 }
    ],
    "Self Help": [
        { title: "Atomic Habits", author: "James Clear", description: "Tiny changes, remarkable results - build good habits and break bad ones.", price: 23.99, rating: 4.7 },
        { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", description: "Powerful lessons in personal change.", price: 19.99, rating: 4.5 },
        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", description: "The Nobel Prize winner's guide to how we think.", price: 22.99, rating: 4.4 },
        { title: "The Power of Now", author: "Eckhart Tolle", description: "A guide to spiritual enlightenment and living in the present.", price: 20.99, rating: 4.3 },
        { title: "Daring Greatly", author: "Brené Brown", description: "How the courage to be vulnerable transforms the way we live.", price: 21.99, rating: 4.6 }
    ],
    "Business": [
        { title: "The Lean Startup", author: "Eric Ries", description: "How today's entrepreneurs use continuous innovation.", price: 24.99, rating: 4.3 },
        { title: "Good to Great", author: "Jim Collins", description: "Why some companies make the leap and others don't.", price: 22.99, rating: 4.5 },
        { title: "The 4-Hour Workweek", author: "Tim Ferriss", description: "Escape 9-5, live anywhere, and join the new rich.", price: 19.99, rating: 4.2 },
        { title: "Zero to One", author: "Peter Thiel", description: "Notes on startups, or how to build the future.", price: 21.99, rating: 4.4 },
        { title: "The Innovator's Dilemma", author: "Clayton Christensen", description: "Why established companies fail to stay on top.", price: 23.99, rating: 4.3 }
    ],
    "Finance": [
        { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", description: "What the rich teach their kids about money.", price: 18.99, rating: 4.1 },
        { title: "The Intelligent Investor", author: "Benjamin Graham", description: "The classic text on value investing.", price: 25.99, rating: 4.6 },
        { title: "Money: Master the Game", author: "Tony Robbins", description: "7 simple steps to financial freedom.", price: 22.99, rating: 4.3 },
        { title: "The Little Book of Common Sense Investing", author: "John Bogle", description: "The only way to guarantee your fair share of stock market returns.", price: 19.99, rating: 4.4 },
        { title: "I Will Teach You to Be Rich", author: "Ramit Sethi", description: "No guilt, no excuses, no BS.", price: 20.99, rating: 4.2 }
    ],
    "Psychology": [
        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", description: "The Nobel Prize winner's guide to how we think.", price: 22.99, rating: 4.4 },
        { title: "Man's Search for Meaning", author: "Viktor Frankl", description: "A Holocaust survivor's guide to finding meaning in life.", price: 18.99, rating: 4.7 },
        { title: "The Power of Habit", author: "Charles Duhigg", description: "Why we do what we do in life and business.", price: 20.99, rating: 4.3 },
        { title: "Emotional Intelligence", author: "Daniel Goleman", description: "Why it can matter more than IQ.", price: 21.99, rating: 4.2 },
        { title: "Flow", author: "Mihaly Csikszentmihalyi", description: "The psychology of optimal experience.", price: 19.99, rating: 4.5 }
    ],
    "History": [
        { title: "Sapiens", author: "Yuval Noah Harari", description: "A brief history of humankind.", price: 24.99, rating: 4.6 },
        { title: "Guns, Germs, and Steel", author: "Jared Diamond", description: "The fates of human societies.", price: 22.99, rating: 4.4 },
        { title: "The Rise and Fall of the Third Reich", author: "William Shirer", description: "A history of Nazi Germany.", price: 26.99, rating: 4.5 },
        { title: "A People's History of the United States", author: "Howard Zinn", description: "American history from the bottom up.", price: 21.99, rating: 4.3 },
        { title: "The Silk Roads", author: "Peter Frankopan", description: "A new history of the world.", price: 23.99, rating: 4.4 }
    ],
    "Biography": [
        { title: "Steve Jobs", author: "Walter Isaacson", description: "The exclusive biography of Steve Jobs.", price: 25.99, rating: 4.5 },
        { title: "Educated", author: "Tara Westover", description: "A memoir about the struggle for self-invention.", price: 20.99, rating: 4.7 },
        { title: "When Breath Becomes Air", author: "Paul Kalanithi", description: "A neurosurgeon's journey through life and death.", price: 19.99, rating: 4.8 },
        { title: "The Diary of a Young Girl", author: "Anne Frank", description: "The remarkable diary of a young Jewish girl.", price: 17.99, rating: 4.6 },
        { title: "Long Walk to Freedom", author: "Nelson Mandela", description: "The autobiography of Nelson Mandela.", price: 22.99, rating: 4.7 }
    ],
    "Technology": [
        { title: "The Innovators", author: "Walter Isaacson", description: "How a group of hackers, geniuses, and geeks created the digital revolution.", price: 24.99, rating: 4.4 },
        { title: "The Code Book", author: "Simon Singh", description: "The secret history of codes and code-breaking.", price: 20.99, rating: 4.3 },
        { title: "The Singularity Is Near", author: "Ray Kurzweil", description: "When humans transcend biology.", price: 22.99, rating: 4.2 },
        { title: "The Second Machine Age", author: "Erik Brynjolfsson", description: "Work, progress, and prosperity in a time of brilliant technologies.", price: 21.99, rating: 4.3 },
        { title: "What Technology Wants", author: "Kevin Kelly", description: "A new view of the technium we're creating.", price: 19.99, rating: 4.1 }
    ],
    "Programming": [
        { title: "Clean Code", author: "Robert C. Martin", description: "A handbook of agile software craftsmanship.", price: 34.99, rating: 4.6 },
        { title: "The Pragmatic Programmer", author: "David Thomas", description: "From journeyman to master.", price: 32.99, rating: 4.7 },
        { title: "Design Patterns", author: "Gang of Four", description: "Elements of reusable object-oriented software.", price: 38.99, rating: 4.5 },
        { title: "Code Complete", author: "Steve McConnell", description: "A practical handbook of software construction.", price: 36.99, rating: 4.4 },
        { title: "Refactoring", author: "Martin Fowler", description: "Improving the design of existing code.", price: 35.99, rating: 4.5 }
    ],
    "AI & Machine Learning": [
        { title: "Artificial Intelligence: A Guide for Thinking Humans", author: "Melanie Mitchell", description: "A clear overview of AI for general readers.", price: 28.99, rating: 4.3 },
        { title: "The Hundred-Page Machine Learning Book", author: "Andriy Burkov", description: "Practical machine learning for developers.", price: 26.99, rating: 4.5 },
        { title: "Deep Learning", author: "Ian Goodfellow", description: "The comprehensive textbook on deep learning.", price: 42.99, rating: 4.6 },
        { title: "Machine Learning Yearning", author: "Andrew Ng", description: "Strategically how to structure machine learning projects.", price: 24.99, rating: 4.4 },
        { title: "Life 3.0", author: "Max Tegmark", description: "Being human in the age of artificial intelligence.", price: 27.99, rating: 4.2 }
    ],
    "Health & Fitness": [
        { title: "Becoming a Supple Leopard", author: "Kelly Starrett", description: "The ultimate guide to resolving pain, preventing injury.", price: 29.99, rating: 4.4 },
        { title: "The 4-Hour Body", author: "Tim Ferriss", description: "An uncommon guide to rapid fat-loss, incredible sex.", price: 25.99, rating: 4.2 },
        { title: "Born to Run", author: "Christopher McDougall", description: "A hidden tribe, superathletes, and the greatest race.", price: 19.99, rating: 4.5 },
        { title: "The Blue Zones", author: "Dan Buettner", description: "Lessons for living longer from the people who've lived the longest.", price: 21.99, rating: 4.3 },
        { title: "Grain Brain", author: "David Perlmutter", description: "The surprising truth about wheat, carbs, and sugar.", price: 23.99, rating: 4.1 }
    ],
    "Philosophy": [
        { title: "Meditations", author: "Marcus Aurelius", description: "The personal writings of the Roman Emperor.", price: 16.99, rating: 4.6 },
        { title: "The Republic", author: "Plato", description: "The foundational text of Western political philosophy.", price: 18.99, rating: 4.5 },
        { title: "Beyond Good and Evil", author: "Friedrich Nietzsche", description: "Prelude to a philosophy of the future.", price: 17.99, rating: 4.3 },
        { title: "The Tao Te Ching", author: "Lao Tzu", description: "The fundamental text of Taoist philosophy.", price: 15.99, rating: 4.4 },
        { title: "The Consolations of Philosophy", author: "Alain de Botton", description: "Philosophy for everyday life.", price: 19.99, rating: 4.2 }
    ],
    "Religion": [
        { title: "The Bhagavad Gita", author: "Various", description: "Ancient Hindu scripture on duty and righteousness.", price: 14.99, rating: 4.5 },
        { title: "The Quran", author: "Various", description: "The holy book of Islam.", price: 16.99, rating: 4.6 },
        { title: "The Bible", author: "Various", description: "The sacred scriptures of Christianity.", price: 19.99, rating: 4.4 },
        { title: "The Tibetan Book of the Dead", author: "Various", description: "Ancient Tibetan Buddhist text on death and rebirth.", price: 17.99, rating: 4.3 },
        { title: "The Analects", author: "Confucius", description: "The collected sayings of Confucius.", price: 15.99, rating: 4.2 }
    ],
    "Travel": [
        { title: "Into the Wild", author: "Jon Krakauer", description: "The story of Christopher McCandless's journey into the Alaskan wilderness.", price: 18.99, rating: 4.4 },
        { title: "Eat, Pray, Love", author: "Elizabeth Gilbert", description: "One woman's search for everything across Italy, India, and Indonesia.", price: 20.99, rating: 4.1 },
        { title: "On the Road", author: "Jack Kerouac", description: "The defining work of the Beat Generation.", price: 17.99, rating: 4.3 },
        { title: "A Walk in the Woods", author: "Bill Bryson", description: "Rediscovering America on the Appalachian Trail.", price: 19.99, rating: 4.5 },
        { title: "In a Sunburned Country", author: "Bill Bryson", description: "Down under in Australia.", price: 21.99, rating: 4.2 }
    ],
    "Cooking": [
        { title: "The Joy of Cooking", author: "Irma S. Rombauer", description: "America's most beloved cookbook.", price: 24.99, rating: 4.6 },
        { title: "Mastering the Art of French Cooking", author: "Julia Child", description: "The classic cookbook that brought French cuisine to America.", price: 26.99, rating: 4.7 },
        { title: "Salt, Fat, Acid, Heat", author: "Samin Nosrat", description: "Master the elements of good cooking.", price: 22.99, rating: 4.5 },
        { title: "The Food Lab", author: "J. Kenji López-Alt", description: "Better home cooking through science.", price: 28.99, rating: 4.8 },
        { title: "How to Cook Everything", author: "Mark Bittman", description: "Simple recipes for great food.", price: 21.99, rating: 4.3 }
    ],
    "Art": [
        { title: "The Story of Art", author: "E.H. Gombrich", description: "The most famous and popular book on art ever written.", price: 29.99, rating: 4.7 },
        { title: "Ways of Seeing", author: "John Berger", description: "A different way of looking at art.", price: 19.99, rating: 4.4 },
        { title: "The Artists Way", author: "Julia Cameron", description: "A spiritual path to higher creativity.", price: 21.99, rating: 4.3 },
        { title: "Steal Like an Artist", author: "Austin Kleon", description: "10 things nobody told you about being creative.", price: 17.99, rating: 4.5 },
        { title: "The Art Book", author: "Phaidon Press", description: "An A-Z guide to 500 great painters and sculptors.", price: 23.99, rating: 4.6 }
    ],
    "Poetry": [
        { title: "Leaves of Grass", author: "Walt Whitman", description: "The iconic collection of American poetry.", price: 18.99, rating: 4.6 },
        { title: "The Collected Poems of Emily Dickinson", author: "Emily Dickinson", description: "The complete poems of the reclusive poet.", price: 20.99, rating: 4.7 },
        { title: "The Waste Land", author: "T.S. Eliot", description: "The defining poem of modernism.", price: 16.99, rating: 4.3 },
        { title: "Milk and Honey", author: "Rupi Kaur", description: "Modern poetry about love, loss, and healing.", price: 19.99, rating: 4.2 },
        { title: "The Sun and Her Flowers", author: "Rupi Kaur", description: "A journey of wilting, falling, rooting, rising, and blooming.", price: 21.99, rating: 4.1 }
    ],
    "Education": [
        { title: "Mindset", author: "Carol Dweck", description: "The new psychology of success.", price: 22.99, rating: 4.4 },
        { title: "Make It Stick", author: "Peter C. Brown", description: "The science of successful learning.", price: 20.99, rating: 4.5 },
        { title: "The Element", author: "Ken Robinson", description: "How finding your passion changes everything.", price: 19.99, rating: 4.3 },
        { title: "Deep Work", author: "Cal Newport", description: "Rules for focused success in a distracted world.", price: 21.99, rating: 4.6 },
        { title: "Ultralearning", author: "Scott Young", description: "Master hard skills, outsmart the competition, and accelerate your career.", price: 23.99, rating: 4.4 }
    ],
    "Comics": [
        { title: "Watchmen", author: "Alan Moore", description: "The graphic novel that changed comics forever.", price: 24.99, rating: 4.8 },
        { title: "Maus", author: "Art Spiegelman", description: "A survivor's tale of the Holocaust in graphic novel form.", price: 22.99, rating: 4.9 },
        { title: "The Sandman", author: "Neil Gaiman", description: "The epic comic series about dreams and stories.", price: 26.99, rating: 4.7 },
        { title: "Batman: The Dark Knight Returns", author: "Frank Miller", description: "The definitive Batman story.", price: 21.99, rating: 4.6 },
        { title: "Persepolis", author: "Marjane Satrapi", description: "A memoir of growing up during the Islamic Revolution.", price: 19.99, rating: 4.5 }
    ]
};

// Global variables
let cart = [];
let currentGenre = 'all';
let searchQuery = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderFeaturedBooks();
    renderGenres();
    renderTrendingBooks();
    setupEventListeners();
    updateCartUI();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Handle search functionality
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    filterAndRenderBooks();
}

// Filter and render books based on search and genre
function filterAndRenderBooks() {
    const featuredBooksContainer = document.getElementById('featuredBooks');
    if (!featuredBooksContainer) return;

    let allBooks = [];
    
    // Collect all books from all genres
    for (const genre in booksDatabase) {
        booksDatabase[genre].forEach(book => {
            allBooks.push({ ...book, genre });
        });
    }

    // Filter books
    let filteredBooks = allBooks.filter(book => {
        const matchesSearch = !searchQuery || 
            book.title.toLowerCase().includes(searchQuery) ||
            book.author.toLowerCase().includes(searchQuery) ||
            book.description.toLowerCase().includes(searchQuery);
        
        const matchesGenre = currentGenre === 'all' || book.genre === currentGenre;
        
        return matchesSearch && matchesGenre;
    });

    // Render filtered books
    renderBooks(filteredBooks, featuredBooksContainer);
}

// Render books in a container
function renderBooks(books, container) {
    if (!container) return;

    if (books.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No books found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    container.innerHTML = books.map(book => createBookCard(book)).join('');
}

// Create book card HTML
function createBookCard(book) {
    const stars = '&#9733;'.repeat(Math.floor(book.rating));
    const emptyStars = '&#9734;'.repeat(5 - Math.floor(book.rating));
    
    return `
        <div class="book-card" data-genre="${book.genre}">
            <div class="book-cover">Book</div>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-description">${book.description}</p>
            <div class="book-meta">
                <span class="book-price">$${book.price}</span>
                <div class="book-rating">
                    <span class="stars">${stars}${emptyStars}</span>
                    <span class="rating-value">${book.rating}</span>
                </div>
            </div>
            <button class="book-btn" onclick="addToCart('${book.title}', '${book.author}', ${book.price})">
                Add to Cart
            </button>
        </div>
    `;
}

// Render featured books
function renderFeaturedBooks() {
    const featuredBooksContainer = document.getElementById('featuredBooks');
    if (!featuredBooksContainer) return;

    // Get first 8 books from different genres for featured section
    let featuredBooks = [];
    let genreIndex = 0;
    const genres = Object.keys(booksDatabase);
    
    for (let i = 0; i < 8 && i < genres.length; i++) {
        const genre = genres[i];
        if (booksDatabase[genre].length > 0) {
            featuredBooks.push({ ...booksDatabase[genre][0], genre });
        }
    }

    renderBooks(featuredBooks, featuredBooksContainer);
}

// Render genres
function renderGenres() {
    const genresContainer = document.getElementById('genresGrid');
    if (!genresContainer) return;

    const genreIcons = {
        "Fiction": "book",
        "Science Fiction": "rocket",
        "Fantasy": "dragon",
        "Romance": "heart",
        "Thriller": "bolt",
        "Mystery": "search",
        "Horror": "ghost",
        "Self Help": "user",
        "Business": "briefcase",
        "Finance": "dollar",
        "Psychology": "brain",
        "History": "scroll",
        "Biography": "user-circle",
        "Technology": "laptop",
        "Programming": "code",
        "AI & Machine Learning": "robot",
        "Health & Fitness": "heart-pulse",
        "Philosophy": "lightbulb",
        "Religion": "church",
        "Travel": "plane",
        "Cooking": "chef-hat",
        "Art": "palette",
        "Poetry": "feather",
        "Education": "graduation-cap",
        "Comics": "mask"
    };

    const genresHTML = Object.keys(booksDatabase).map(genre => {
        const icon = genreIcons[genre] || "book";
        const count = booksDatabase[genre].length;
        
        return `
            <div class="genre-card" onclick="filterByGenre('${genre}')">
                <span class="genre-icon">${getIconEmoji(icon)}</span>
                <h4 class="genre-name">${genre}</h4>
                <p class="genre-count">${count} books</p>
            </div>
        `;
    }).join('');

    genresContainer.innerHTML = genresHTML;
}

// Get icon emoji (simplified version)
function getIconEmoji(iconName) {
    const iconMap = {
        "book": "book",
        "rocket": "rocket",
        "dragon": "dragon",
        "heart": "heart",
        "bolt": "bolt",
        "search": "search",
        "ghost": "ghost",
        "user": "user",
        "briefcase": "briefcase",
        "dollar": "dollar",
        "brain": "brain",
        "scroll": "scroll",
        "user-circle": "user-circle",
        "laptop": "laptop",
        "code": "code",
        "robot": "robot",
        "heart-pulse": "heart-pulse",
        "lightbulb": "lightbulb",
        "church": "church",
        "plane": "plane",
        "chef-hat": "chef-hat",
        "palette": "palette",
        "feather": "feather",
        "graduation-cap": "graduation-cap",
        "mask": "mask"
    };
    
    return iconMap[iconName] || "book";
}

// Filter by genre
function filterByGenre(genre) {
    currentGenre = genre;
    filterAndRenderBooks();
    
    // Scroll to featured section
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Render trending books
function renderTrendingBooks() {
    const trendingContainer = document.getElementById('trendingBooks');
    if (!trendingContainer) return;

    // Get highest rated books from different genres
    let trendingBooks = [];
    const genres = Object.keys(booksDatabase);
    
    genres.forEach(genre => {
        const books = booksDatabase[genre];
        const highestRated = books.reduce((prev, current) => 
            (prev.rating > current.rating) ? prev : current
        );
        trendingBooks.push({ ...highestRated, genre });
    });

    // Sort by rating and take top 5
    trendingBooks.sort((a, b) => b.rating - a.rating);
    trendingBooks = trendingBooks.slice(0, 5);

    // Create carousel HTML
    const carouselHTML = `
        <div class="trending-track">
            ${trendingBooks.map(book => `
                <div class="trending-book">
                    ${createBookCard(book)}
                </div>
            `).join('')}
        </div>
    `;

    trendingContainer.innerHTML = carouselHTML;
}

// Cart functionality
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar && cartOverlay) {
        const isOpen = cartSidebar.classList.contains('open');
        
        if (isOpen) {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('active');
        } else {
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('active');
        }
    }
}

function addToCart(title, author, price) {
    const existingItem = cart.find(item => 
        item.title === title && item.author === author
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title,
            author,
            price,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${title} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
                </div>
            `).join('');
        }
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        animation: slideInFromRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInFromLeft 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update active navigation link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}
