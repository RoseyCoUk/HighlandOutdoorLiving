#!/usr/bin/env node

/**
 * Test script to verify analytics integration
 * This script tests the analytics setup and data flow
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

console.log('🔍 Testing Analytics Integration...\n');

// Test 1: Check environment variables
console.log('1. Checking environment variables...');
const envExamplePath = path.join(projectRoot, 'env.example');
const envPath = path.join(projectRoot, '.env');

if (fs.existsSync(envExamplePath)) {
  const envExample = fs.readFileSync(envExamplePath, 'utf8');
  const hasGTM = envExample.includes('VITE_GOOGLE_TAG_MANAGER_ID');
  const hasGA4 = envExample.includes('VITE_GOOGLE_ANALYTICS_ID');
  
  console.log(`   ✅ GTM ID configured: ${hasGTM}`);
  console.log(`   ✅ GA4 ID configured: ${hasGA4}`);
} else {
  console.log('   ❌ env.example not found');
}

// Test 2: Check GTM installation in index.html
console.log('\n2. Checking GTM installation...');
const indexPath = path.join(projectRoot, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  const hasGTMHead = indexContent.includes('googletagmanager.com/gtm.js');
  const hasGTMBody = indexContent.includes('googletagmanager.com/ns.html');
  const hasGTMId = indexContent.includes('GTM-PBDNWBWQ');
  
  console.log(`   ✅ GTM head script: ${hasGTMHead}`);
  console.log(`   ✅ GTM body script: ${hasGTMBody}`);
  console.log(`   ✅ Correct GTM ID: ${hasGTMId}`);
} else {
  console.log('   ❌ index.html not found');
}

// Test 3: Check analytics service files
console.log('\n3. Checking analytics service files...');
const analyticsFiles = [
  'src/lib/analytics-config.ts',
  'src/lib/analytics-service.ts',
  'src/lib/analytics.ts',
  'src/lib/ga4-api.ts',
  'src/hooks/useAnalytics.ts'
];

analyticsFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  const exists = fs.existsSync(filePath);
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
});

// Test 4: Check component integrations
console.log('\n4. Checking component integrations...');
const componentFiles = [
  'src/components/ContactSection.tsx',
  'src/components/EstimateCalculator.tsx',
  'src/components/admin/AnalyticsDashboard.tsx'
];

componentFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasAnalytics = content.includes('useAnalytics') || content.includes('analytics.');
    console.log(`   ${hasAnalytics ? '✅' : '❌'} ${file} - Analytics integrated`);
  } else {
    console.log(`   ❌ ${file} not found`);
  }
});

// Test 5: Check package.json for dependencies
console.log('\n5. Checking dependencies...');
const packagePath = path.join(projectRoot, 'package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const hasReactRouter = packageJson.dependencies?.['react-router-dom'];
  const hasLucide = packageJson.dependencies?.['lucide-react'];
  
  console.log(`   ✅ React Router: ${hasReactRouter ? 'installed' : 'missing'}`);
  console.log(`   ✅ Lucide Icons: ${hasLucide ? 'installed' : 'missing'}`);
}

console.log('\n🎯 Analytics Integration Test Complete!');
console.log('\n📋 Next Steps:');
console.log('   1. Visit your website and check the admin dashboard');
console.log('   2. Verify GTM is loading in browser dev tools');
console.log('   3. Check that events are being sent to dataLayer');
console.log('   4. Confirm GA4 is receiving data in Google Analytics');
console.log('\n💡 If you see "Live Data" in the dashboard, your analytics are working!');
