// Wait and test the deployment
const testAfterDeployment = async () => {
  console.log('🚀 Testing backend after deployment...');
  
  // Wait a bit for deployment to complete
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  try {
    // Test health first
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch('https://zero-waste-delhi-backend.onrender.com/api/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health:', healthData.message);
    
    // Test login
    console.log('\n2. Testing login...');
    const loginResponse = await fetch('https://zero-waste-delhi-backend.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'jaingarima360@gmail.com',
        password: 'Password123'
      })
    });
    
    console.log('Login status:', loginResponse.status);
    const loginData = await loginResponse.json();
    
    if (loginData.success) {
      console.log('🎉 LOGIN SUCCESSFUL!');
      console.log('User:', loginData.user.name);
      console.log('Token received:', loginData.token ? 'Yes' : 'No');
      console.log('\n✅ Your frontend and backend are now connected!');
      console.log('🌐 You can now login at your frontend URL');
    } else {
      console.log('❌ Login failed:', loginData.message);
      if (loginData.error) {
        console.log('Error details:', loginData.error);
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
};

testAfterDeployment();