// Test script to verify local storage functionality directly
console.log('Testing local storage directly...');

// Test 1: Set item
const testData = {
  books: [
    {
      id: 1,
      name: 'Test Book',
      words: [
        { id: 1, word: 'test', definition: 'a test word', translation: '测试', difficulty: 'easy' }
      ]
    }
  ]
};

console.log('Setting test data...');
try {
  localStorage.setItem('wordMasterBooks', JSON.stringify(testData.books));
  console.log('✓ Set item successfully');
} catch (error) {
  console.error('✗ Error setting item:', error);
}

// Test 2: Get item
console.log('Getting test data...');
try {
  const retrievedData = localStorage.getItem('wordMasterBooks');
  console.log('✓ Get item successfully');
  console.log('Retrieved data:', retrievedData);
} catch (error) {
  console.error('✗ Error getting item:', error);
}

// Test 3: Parse JSON
console.log('Parsing test data...');
try {
  const retrievedData = localStorage.getItem('wordMasterBooks');
  const parsedData = JSON.parse(retrievedData);
  console.log('✓ Parse JSON successfully');
  console.log('Parsed data:', parsedData);
} catch (error) {
  console.error('✗ Error parsing JSON:', error);
}

// Test 4: Clear test data
console.log('Clearing test data...');
try {
  localStorage.removeItem('wordMasterBooks');
  console.log('✓ Clear item successfully');
} catch (error) {
  console.error('✗ Error clearing item:', error);
}

console.log('Local storage test completed!');

// Test 5: Test with actual book creation scenario
console.log('Testing book creation scenario...');
try {
  // Simulate initial state
  const initialBooks = [
    {
      id: 1,
      name: 'Default Book',
      words: []
    }
  ];
  
  console.log('Saving initial books...');
  localStorage.setItem('wordMasterBooks', JSON.stringify(initialBooks));
  
  // Simulate creating a new book
  const newBook = {
    id: Date.now(),
    name: 'New Test Book',
    words: []
  };
  
  const updatedBooks = [...initialBooks, newBook];
  console.log('Saving updated books...');
  localStorage.setItem('wordMasterBooks', JSON.stringify(updatedBooks));
  
  // Simulate loading from storage
  const loadedBooks = JSON.parse(localStorage.getItem('wordMasterBooks'));
  console.log('✓ Book creation scenario test passed');
  console.log('Loaded books:', loadedBooks);
} catch (error) {
  console.error('✗ Error in book creation scenario:', error);
}

console.log('All tests completed!');
