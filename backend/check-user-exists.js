import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

// Load environment variables
dotenv.config();

async function checkUserExists() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🔍 Checking for user: jaingarim@gmail.com');
    console.log('=====================================');
    
    // Check if user exists
    const user = await User.findOne({ email: 'jaingarim@gmail.com' });
    
    if (user) {
      console.log('❌ User EXISTS in database:');
      console.log(`   - Name: ${user.name}`);
      console.log(`   - Email: ${user.email}`);
      console.log(`   - Phone: ${user.phone}`);
      console.log(`   - Created: ${user.createdAt}`);
      console.log(`   - ID: ${user._id}`);
      console.log('');
      console.log('🔧 To fix this issue, you can:');
      console.log('1. Try logging in with this email instead of registering');
      console.log('2. Or delete this user to allow new registration');
      console.log('');
      console.log('💡 To delete this user, run:');
      console.log('   node backend/delete-test-user.js');
    } else {
      console.log('✅ User does NOT exist in database');
      console.log('   - Registration should work normally');
      console.log('   - There might be a different issue');
    }
    
    // Also check for similar emails
    console.log('');
    console.log('🔍 Checking for similar emails...');
    const similarUsers = await User.find({ 
      email: { $regex: 'jaingarim', $options: 'i' } 
    });
    
    if (similarUsers.length > 0) {
      console.log(`Found ${similarUsers.length} similar email(s):`);
      similarUsers.forEach(u => {
        console.log(`   - ${u.email} (${u.name})`);
      });
    } else {
      console.log('No similar emails found');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('📤 Disconnected from database');
  }
}

checkUserExists();