class WordMaster {
    constructor() {
        this.books = [];
        this.currentBookIndex = 0;
        this.currentWordIndex = 0;
        this.isFlipped = false;
        this.settings = {
            studyMode: 'flashcards',
            difficultyFilter: 'all',
            soundEnabled: true
        };
        this.init();
    }
    
    init() {
        this.loadBooks();
        this.loadSettings();
        this.bindEvents();
        this.renderBookList();
        this.renderWordList();
        this.updateFlashcard();
    }
    
    loadBooks() {
        const savedBooks = localStorage.getItem('wordMasterBooks');
        if (savedBooks) {
            this.books = JSON.parse(savedBooks);
        } else {
            // Add some default words for demonstration
            this.books = [
                {
                    id: 1,
                    name: 'Default Book',
                    words: [
                        { id: 1, word: 'apple', definition: 'a round fruit with red or green skin', translation: '苹果', difficulty: 'easy' },
                        { id: 2, word: 'banana', definition: 'a long curved fruit with yellow skin', translation: '香蕉', difficulty: 'easy' },
                        { id: 3, word: 'computer', definition: 'an electronic device for storing and processing data', translation: '电脑', difficulty: 'medium' },
                        { id: 4, word: 'programming', definition: 'the process of writing computer programs', translation: '编程', difficulty: 'hard' },
                        { id: 5, word: 'algorithm', definition: 'a set of rules to be followed in calculations', translation: '算法', difficulty: 'hard' }
                    ]
                }
            ];
            this.saveBooks();
        }
    }
    
    saveBooks() {
        localStorage.setItem('wordMasterBooks', JSON.stringify(this.books));
    }
    
    getCurrentBook() {
        return this.books[this.currentBookIndex] || { id: 0, name: 'No Book', words: [] };
    }
    
    getCurrentWords() {
        return this.getCurrentBook().words || [];
    }
    
    loadSettings() {
        const savedSettings = localStorage.getItem('wordMasterSettings');
        if (savedSettings) {
            this.settings = JSON.parse(savedSettings);
            this.updateSettingsUI();
        }
    }
    
    saveSettings() {
        localStorage.setItem('wordMasterSettings', JSON.stringify(this.settings));
    }
    
    updateSettingsUI() {
        document.getElementById('study-mode').value = this.settings.studyMode;
        document.getElementById('difficulty-filter').value = this.settings.difficultyFilter;
        document.getElementById('sound-enabled').checked = this.settings.soundEnabled;
    }
    
    bindEvents() {
        // Navigation events
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.showSection(targetId);
            });
        });
        
        // Flashcard events
        document.getElementById('flip-btn').addEventListener('click', () => {
            this.flipFlashcard();
        });
        
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.prevWord();
        });
        
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextWord();
        });
        
        // Difficulty buttons
        document.getElementById('easy-btn').addEventListener('click', () => {
            this.updateWordDifficulty('easy');
        });
        
        document.getElementById('medium-btn').addEventListener('click', () => {
            this.updateWordDifficulty('medium');
        });
        
        document.getElementById('hard-btn').addEventListener('click', () => {
            this.updateWordDifficulty('hard');
        });
        
        // Word list events
        document.getElementById('add-word-btn').addEventListener('click', () => {
            this.showAddWordModal();
        });
        
        document.getElementById('cancel-add-word').addEventListener('click', () => {
            this.hideAddWordModal();
        });
        
        document.getElementById('add-word-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addWord();
        });
        
        // Settings events
        document.getElementById('save-settings-btn').addEventListener('click', () => {
            this.saveUserSettings();
        });
        
        // Import words event
        document.getElementById('import-words-btn').addEventListener('click', () => {
            this.importWords();
        });
    }
    
    showSection(sectionId) {
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }
    
    flipFlashcard() {
        const flashcard = document.getElementById('flashcard');
        flashcard.classList.toggle('flipped');
        this.isFlipped = !this.isFlipped;
    }
    
    prevWord() {
        const words = this.getCurrentWords();
        if (words.length > 0) {
            this.currentWordIndex = (this.currentWordIndex - 1 + words.length) % words.length;
            this.updateFlashcard();
            this.isFlipped = false;
            document.getElementById('flashcard').classList.remove('flipped');
        }
    }
    
    nextWord() {
        const words = this.getCurrentWords();
        if (words.length > 0) {
            this.currentWordIndex = (this.currentWordIndex + 1) % words.length;
            this.updateFlashcard();
            this.isFlipped = false;
            document.getElementById('flashcard').classList.remove('flipped');
        }
    }
    
    updateFlashcard() {
        const words = this.getCurrentWords();
        if (words.length > 0) {
            const currentWord = words[this.currentWordIndex];
            document.getElementById('word').textContent = currentWord.word;
            document.getElementById('definition').textContent = currentWord.definition;
        } else {
            document.getElementById('word').textContent = 'No words added';
            document.getElementById('definition').textContent = 'Please add words to your list';
        }
    }
    
    updateWordDifficulty(difficulty) {
        const words = this.getCurrentWords();
        if (words.length > 0) {
            words[this.currentWordIndex].difficulty = difficulty;
            this.saveBooks();
            this.renderWordList();
        }
    }
    
    showAddWordModal() {
        document.getElementById('add-word-modal').classList.add('show');
    }
    
    hideAddWordModal() {
        document.getElementById('add-word-modal').classList.remove('show');
        document.getElementById('add-word-form').reset();
    }
    
    addWord() {
        const wordInput = document.getElementById('new-word');
        const definitionInput = document.getElementById('new-definition');
        const translationInput = document.getElementById('new-translation');
        const difficultyInput = document.getElementById('new-difficulty');
        
        const newWord = {
            id: Date.now(),
            word: wordInput.value.trim(),
            definition: definitionInput.value.trim(),
            translation: translationInput.value.trim(),
            difficulty: difficultyInput.value
        };
        
        const currentBook = this.getCurrentBook();
        currentBook.words.push(newWord);
        this.saveBooks();
        this.renderWordList();
        this.hideAddWordModal();
        this.updateFlashcard();
    }
    
    deleteWord(id) {
        const currentBook = this.getCurrentBook();
        currentBook.words = currentBook.words.filter(word => word.id !== id);
        this.saveBooks();
        this.renderWordList();
        this.updateFlashcard();
    }
    
    editWord(id) {
        const currentBook = this.getCurrentBook();
        const word = currentBook.words.find(word => word.id === id);
        if (word) {
            // For simplicity, we'll just prompt the user to enter new values
            const newWord = prompt('Enter new word:', word.word);
            const newDefinition = prompt('Enter new definition:', word.definition);
            const newTranslation = prompt('Enter new translation:', word.translation);
            const newDifficulty = prompt('Enter new difficulty (easy/medium/hard):', word.difficulty);
            
            if (newWord && newDefinition && newTranslation && newDifficulty) {
                word.word = newWord.trim();
                word.definition = newDefinition.trim();
                word.translation = newTranslation.trim();
                word.difficulty = newDifficulty.toLowerCase();
                this.saveBooks();
                this.renderWordList();
                this.updateFlashcard();
            }
        }
    }
    
    renderWordList() {
        const wordsContainer = document.getElementById('words-container');
        wordsContainer.innerHTML = '';
        
        const words = this.getCurrentWords();
        words.forEach(word => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="word-info">
                    <h3>${word.word}</h3>
                    <p>${word.definition}</p>
                    <p class="translation">Translation: ${word.translation}</p>
                    <p class="difficulty-tag">Difficulty: ${word.difficulty}</p>
                </div>
                <div class="word-actions">
                    <button class="edit-word-btn" data-id="${word.id}">Edit</button>
                    <button class="delete-word-btn" data-id="${word.id}">Delete</button>
                </div>
            `;
            wordsContainer.appendChild(li);
        });
        
        // Add event listeners to edit and delete buttons
        document.querySelectorAll('.edit-word-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                this.editWord(id);
            });
        });
        
        document.querySelectorAll('.delete-word-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                if (confirm('Are you sure you want to delete this word?')) {
                    this.deleteWord(id);
                }
            });
        });
    }
    
    renderBookList() {
        const bookSelector = document.getElementById('book-selector');
        if (bookSelector) {
            bookSelector.innerHTML = '';
            this.books.forEach((book, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = book.name;
                if (index === this.currentBookIndex) {
                    option.selected = true;
                }
                bookSelector.appendChild(option);
            });
        }
    }
    
    createBook(name) {
        const newBook = {
            id: Date.now(),
            name: name.trim(),
            words: []
        };
        this.books.push(newBook);
        this.currentBookIndex = this.books.length - 1;
        this.saveBooks();
        this.renderBookList();
        this.renderWordList();
        this.updateFlashcard();
    }
    
    selectBook(index) {
        this.currentBookIndex = parseInt(index);
        this.currentWordIndex = 0;
        this.renderWordList();
        this.updateFlashcard();
    }
    
    renameBook(index, newName) {
        if (this.books[index]) {
            this.books[index].name = newName.trim();
            this.saveBooks();
            this.renderBookList();
        }
    }
    
    deleteBook(index) {
        if (this.books.length > 1) {
            this.books.splice(index, 1);
            if (this.currentBookIndex >= this.books.length) {
                this.currentBookIndex = this.books.length - 1;
            }
            this.currentWordIndex = 0;
            this.saveBooks();
            this.renderBookList();
            this.renderWordList();
            this.updateFlashcard();
        } else {
            alert('You must have at least one word book.');
        }
    }
    
    saveUserSettings() {
        this.settings.studyMode = document.getElementById('study-mode').value;
        this.settings.difficultyFilter = document.getElementById('difficulty-filter').value;
        this.settings.soundEnabled = document.getElementById('sound-enabled').checked;
        this.saveSettings();
        alert('Settings saved successfully!');
    }
    
    importWords() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.txt';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const content = event.target.result;
                    const lines = content.split('\n');
                    let importedCount = 0;
                    const currentBook = this.getCurrentBook();
                    
                    lines.forEach(line => {
                        const parts = line.split('\t');
                        if (parts.length >= 3) {
                            const newWord = {
                                id: Date.now() + importedCount,
                                word: parts[0].trim(),
                                definition: parts[1].trim(),
                                translation: parts[2].trim(),
                                difficulty: parts.length > 3 ? parts[3].trim().toLowerCase() : 'medium'
                            };
                            currentBook.words.push(newWord);
                            importedCount++;
                        }
                    });
                    
                    if (importedCount > 0) {
                        this.saveBooks();
                        this.renderWordList();
                        this.updateFlashcard();
                        alert(`Successfully imported ${importedCount} words!`);
                    } else {
                        alert('No valid words found in the file. Please use tab-separated format: word\tdefinition\ttranslation\tdifficulty');
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }
    
    // Spaced repetition algorithm (simplified)
    getNextWord() {
        // For simplicity, we'll just return the next word in the list
        // A more sophisticated algorithm would consider difficulty and review history
        const words = this.getCurrentWords();
        return words[this.currentWordIndex];
    }
    
    // Sound functionality for word pronunciation
    playPronunciation(word) {
        if (this.settings.soundEnabled) {
            // Using the Web Speech API for text-to-speech
            const utterance = new SpeechSynthesisUtterance(word);
            speechSynthesis.speak(utterance);
        }
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WordMaster();
});