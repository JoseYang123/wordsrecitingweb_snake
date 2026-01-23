// Test script to verify local storage functionality
const { getJsonItem, setJsonItem } = require('./src/services/storageService');

async function testStorage() {
  console.log('Testing local storage functionality...');
  
  // Test 1: Save test data
  const testBooks = [
    {
      id: 1,
      name: 'Test Book',
      words: [
        { id: 1, word: 'test', definition: 'a procedure intended to establish the quality, performance, or reliability of something', translation: '测试', difficulty: 'easy' }
      ]
    }
  ];
  
  console.log('Saving test books...');
  await setJsonItem('wordMasterBooks', testBooks);
  console.log('Test books saved successfully');
  
  // Test 2: Retrieve test data
  console.log('Retrieving test books...');
  const retrievedBooks = await getJsonItem('wordMasterBooks');
  console.log('Retrieved books:', JSON.stringify(retrievedBooks, null, 2));
  
  // Test 3: Clear test data
  console.log('Clearing test data...');
  localStorage.removeItem('wordMasterBooks');
  console.log('Test data cleared');
  
  console.log('Storage test completed successfully!');
}

testStorage().catch(console.error);