# Highland Outdoor Living - Web Application

A modern web application for Highland Outdoor Living, featuring a beautiful frontend built with React/TypeScript and a robust backend powered by Supabase.

## Features

### Frontend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Pages**: Dedicated pages for Saunas, Hot Tubs, and Pools
- **Contact Forms**: Integrated forms that submit to Supabase database
- **Admin Dashboard**: Protected admin area for lead management
- **Modern UI**: Clean, professional design matching Highland's brand

### Backend (Supabase)
- **Lead Management**: Complete CRM for tracking customer inquiries
- **Authentication**: Secure admin login system
- **Database**: PostgreSQL with Row Level Security
- **Real-time Updates**: Live data synchronization

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/RoseyCoUk/HighlandOutdoorLiving.git
cd HighlandOutdoorLiving
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Run the database migration:
   ```bash
   # The migration is already included in supabase/migrations/
   # It creates the leads table with proper RLS policies
   ```

3. Get your Supabase credentials from the project dashboard

### 4. Environment Variables

Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Database Schema

### Leads Table
```sql
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  product text NOT NULL CHECK (product IN ('Sauna', 'Grill Pod', 'Shed', 'General')),
  message text NOT NULL,
  status text DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Quoted', 'Closed')),
  notes text,
  source text,
  created_at timestamptz DEFAULT now()
);
```

## Admin Dashboard

### Access
- URL: `/admin/login`
- Create an admin user in your Supabase dashboard under Authentication > Users

### Features
- **Dashboard**: Overview with lead statistics
- **Leads Management**: View, filter, and update lead status
- **Export**: Download leads as CSV
- **Search & Filter**: Find leads by name, email, product, or status

## Form Integration

All forms throughout the site are connected to the Supabase database:

- **Home Page Quote Form**: General inquiries
- **Product Pages**: Sauna, Grill Pod, and Shed specific forms
- **Contact Page**: General contact form
- **Contact Section**: Quick contact form

Forms automatically:
- Submit to the `leads` table
- Set the appropriate product type
- Track the source page
- Redirect to a thank you page

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your repository to Vercel or Netlify
2. Set environment variables in the deployment platform
3. Deploy automatically on push to main branch

## File Structure

```
src/
├── components/
│   ├── admin/          # Admin dashboard components
│   ├── Header.tsx      # Site header
│   ├── Footer.tsx      # Site footer
│   └── ...            # Other UI components
├── pages/
│   ├── SaunaPage.tsx   # Sauna product page
│   ├── GrillPodPage.tsx # Grill Pod product page
│   ├── ShedsPage.tsx   # Sheds product page
│   ├── ContactPage.tsx # Contact page
│   ├── ThankYouPage.tsx # Thank you page
│   └── ...            # Other pages
├── lib/
│   ├── supabase.ts    # Supabase client configuration
│   └── forms.ts       # Form submission utilities
└── App.tsx            # Main app with routing
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For technical support or questions about the application, please contact the development team.

---

Built with ❤️ for Highland Outdoor Living
