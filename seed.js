const bcrypt  = require('bcryptjs');
const db      = require('./db/connection');
require('dotenv').config();

async function seedAdmin() {
  try {
    console.log('🔍 Checking if admin exists...');

    const [rows] = await db.query(
      'SELECT id FROM users WHERE username = ?', ['admin']
    );

    if (rows.length > 0) {
      console.log('✅ Admin already exists. Nothing to do.');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    await db.query(
      `INSERT INTO users (full_name, mobile_number, username, password, role)
       VALUES (?, ?, ?, ?, ?)`,
      ['Administrator', '9999999999', 'admin', hashedPassword, 'admin']
    );

    console.log('✅ Admin created successfully!');
    console.log('   Username : admin');
    console.log('   Password : admin123');
    console.log('   ⚠️  Change this password after first login!');
    process.exit(0);

  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
}

seedAdmin();