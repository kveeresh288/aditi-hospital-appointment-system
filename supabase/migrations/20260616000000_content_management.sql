-- Content Management tables: doctors, services, facilities, testimonials,
-- faqs, hospital_settings. All publicly readable (anon + authenticated),
-- writable only by authenticated (reception staff).

-- ============ doctors ============
-- Unifies the old hospitalData.doctors (display info) and
-- bookingData.bookingDoctors (booking schedule) into one table, which is
-- also the source of truth for booking departments.
CREATE TABLE IF NOT EXISTS doctors (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  qualifications TEXT NOT NULL,
  experience TEXT NOT NULL,
  department TEXT NOT NULL,
  image TEXT NOT NULL,
  working_days INT[] NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  slot_minutes INT NOT NULL,
  consultation_fee INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ services ============
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  icon TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ facilities ============
CREATE TABLE IF NOT EXISTS facilities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ testimonials ============
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  rating INT NOT NULL,
  text TEXT NOT NULL,
  avatar TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ faqs ============
CREATE TABLE IF NOT EXISTS faqs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ hospital_settings (single row, id = 1) ============
CREATE TABLE IF NOT EXISTS hospital_settings (
  id INT PRIMARY KEY DEFAULT 1,
  name TEXT NOT NULL,
  local_name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  address_street TEXT NOT NULL,
  address_city TEXT NOT NULL,
  address_state TEXT NOT NULL,
  address_pincode TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  emergency_phone TEXT NOT NULL,
  working_hours TEXT NOT NULL,
  map_url TEXT NOT NULL,
  map_embed_url TEXT NOT NULL,
  hero_image TEXT NOT NULL,
  social_facebook TEXT NOT NULL,
  social_instagram TEXT NOT NULL,
  social_twitter TEXT NOT NULL,
  social_linkedin TEXT NOT NULL,
  CONSTRAINT hospital_settings_single_row CHECK (id = 1)
);

-- ============ RLS + grants ============
-- Public read, staff (authenticated) full write, for all 6 tables.
DO $$
DECLARE
  t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY['doctors', 'services', 'facilities', 'testimonials', 'faqs', 'hospital_settings']
  LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('GRANT USAGE ON SCHEMA public TO anon, authenticated');
    EXECUTE format('GRANT SELECT ON %I TO anon', t);
    EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON %I TO authenticated', t);

    EXECUTE format('DROP POLICY IF EXISTS "allow_public_read" ON %I', t);
    EXECUTE format('CREATE POLICY "allow_public_read" ON %I FOR SELECT TO anon, authenticated USING (true)', t);

    EXECUTE format('DROP POLICY IF EXISTS "allow_staff_write" ON %I', t);
    EXECUTE format('CREATE POLICY "allow_staff_write" ON %I FOR ALL TO authenticated USING (true) WITH CHECK (true)', t);
  END LOOP;
END $$;

-- ============ Seed data (matches current static content) ============

INSERT INTO doctors (id, name, specialty, qualifications, experience, department, image, working_days, start_time, end_time, slot_minutes, consultation_fee) VALUES
  ('dr-anjali-sharma', 'Dr. Anjali Sharma', 'Senior Consultant Gynecologist', 'MBBS, MD (OBG), DNB', '18+ Years Experience', 'Gynecology', 'https://images.pexels.com/photos/545229/pexels-photo-545229.jpeg?auto=compress&cs=tinysrgb&w=400', ARRAY[1,2,3,4,5,6], '10:00', '14:00', 20, 500),
  ('dr-rajesh-kulkarni', 'Dr. Rajesh Kulkarni', 'Consultant General Physician', 'MBBS, MD (General Medicine)', '15+ Years Experience', 'General Medicine', 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400', ARRAY[1,2,3,4,5,6], '18:00', '21:00', 15, 400),
  ('dr-sneha-patil', 'Dr. Sneha Patil', 'Pediatric Specialist', 'MBBS, MD (Pediatrics)', '12+ Years Experience', 'Pediatrics', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', ARRAY[1,2,3,4,5,6], '11:00', '13:00', 20, 450),
  ('dr-vikram-deshmukh', 'Dr. Vikram Deshmukh', 'Consultant Surgeon', 'MBBS, MS (General Surgery)', '20+ Years Experience', 'Surgery Consultation', 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400', ARRAY[1,2,3,4,5,6], '15:00', '18:00', 20, 600)
ON CONFLICT (id) DO NOTHING;

INSERT INTO services (icon, title, description) VALUES
  ('Heart', 'Maternity Care', 'Comprehensive prenatal, delivery, and postnatal care with experienced obstetricians and modern facilities.'),
  ('Heart', 'Women''s Health', 'Specialized healthcare services addressing the unique medical needs of women at every stage of life.'),
  ('Stethoscope', 'Gynecology', 'Expert gynecological care for reproductive health, menstrual disorders, and preventive screenings.'),
  ('Baby', 'Pediatrics', 'Dedicated child healthcare from newborns to adolescents, including vaccinations and growth monitoring.'),
  ('Activity', 'General Medicine', 'Comprehensive primary care for common illnesses, chronic disease management, and health screenings.'),
  ('ClipboardCheck', 'Preventive Health Checkups', 'Regular health screenings and wellness programs to detect and prevent health issues early.'),
  ('Microscope', 'Diagnostic Services', 'In-house laboratory and imaging services for accurate and timely diagnosis.'),
  ('Home', 'Family Healthcare', 'Complete healthcare solutions for the entire family under one roof, from children to elders.')
ON CONFLICT DO NOTHING;

INSERT INTO facilities (title, description, image) VALUES
  ('Modern Maternity Ward', 'Fully equipped delivery rooms with advanced monitoring systems.', 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Consultation Rooms', 'Private and comfortable consultation spaces for patient comfort.', 'https://images.pexels.com/photos/6758193/pexels-photo-6758193.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Diagnostic Laboratory', 'In-house lab with quick turnaround times for accurate results.', 'https://images.pexels.com/photos/4056863/pexels-photo-4056863.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Emergency Care Unit', '24/7 emergency services with trained medical staff.', 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Pharmacy', 'Well-stocked pharmacy with genuine medicines and healthcare products.', 'https://images.pexels.com/photos/3873149/pexels-photo-3873149.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Observation Beds', 'Clean observation facilities for post-procedure recovery.', 'https://images.pexels.com/photos/6567608/pexels-photo-6567608.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Vaccination Center', 'Safe vaccination services for children and adults.', 'https://images.pexels.com/photos/4173319/pexels-photo-4173319.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Waiting Lounge', 'Comfortable seating area with amenities for patients and families.', 'https://images.pexels.com/photos/263637/pexels-photo-263637.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Digital Appointment Assistance', 'Easy online and phone-based appointment scheduling.', 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Patient Counseling Area', 'Dedicated space for patient education and counseling.', 'https://images.pexels.com/photos/6627443/pexels-photo-6627443.jpeg?auto=compress&cs=tinysrgb&w=600')
ON CONFLICT DO NOTHING;

INSERT INTO testimonials (name, location, rating, text, avatar) VALUES
  ('Priya Hegde', 'Kalaburagi', 5, 'The doctors and staff were incredibly supportive throughout my pregnancy journey. Excellent care and guidance.', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'),
  ('Ramesh Patil', 'Kalaburagi', 5, 'Clean facilities, professional doctors, and smooth appointment management. Highly recommended.', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'),
  ('Sunita Kulkarni', 'Kalaburagi', 5, 'The team made us feel comfortable from the very first visit. Wonderful experience.', 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'),
  ('Mahesh Deshmukh', 'Kalaburagi', 5, 'Very attentive doctors and courteous staff. The consultation process was seamless.', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100')
ON CONFLICT DO NOTHING;

INSERT INTO faqs (question, answer) VALUES
  ('Do I need an appointment before visiting?', 'While walk-ins are welcome for general consultations, we recommend booking an appointment to minimize wait times and ensure doctor availability. You can book online or call us to schedule your visit.'),
  ('What services are available?', 'We offer comprehensive healthcare services including maternity care, gynecology, pediatrics, general medicine, preventive health checkups, diagnostic services, and family healthcare. Visit our Services section for detailed information.'),
  ('Are emergency services available?', 'Yes, Aditi Hospital provides 24/7 emergency care services. Our emergency unit is staffed with trained medical professionals and equipped to handle urgent medical situations.'),
  ('Can I request a callback?', 'Absolutely! You can request a callback through our website or by calling our reception. Our team will get in touch with you to discuss your healthcare needs and help schedule an appointment.'),
  ('Can appointments be rescheduled?', 'Yes, appointments can be rescheduled. Please inform us at least 4 hours in advance by calling our reception. We will help you find a more convenient time based on doctor availability.')
ON CONFLICT DO NOTHING;

INSERT INTO hospital_settings (
  id, name, local_name, tagline, description,
  address_street, address_city, address_state, address_pincode,
  phone, email, emergency_phone, working_hours,
  map_url, map_embed_url, hero_image,
  social_facebook, social_instagram, social_twitter, social_linkedin
) VALUES (
  1, 'Aditi Hospital', 'ಅದಿತಿ ಹಾಸ್ಪಿಟಲ್', 'Compassionate Healthcare for Women, Children, and Families.',
  'Serving the Kalaburagi community with trusted medical care, experienced specialists, and patient-focused healthcare services.',
  'Shanti Nagar', 'Kalaburagi', 'Karnataka', '585103',
  '+91 98861 56782', 'contact@aditihospital.in', '+91 98861 56782', 'Open 24 Hours',
  'https://www.google.com/maps/place/Aditi+Hospital/@17.3286609,76.8175479,17z/data=!4m14!1m7!3m6!1s0x3bc8b8ae25c37871:0x6b78646a4b17dc42!2sAditi+Hospital!8m2!3d17.3286609!4d76.8175479!16s%2Fg%2F11bw4sfw2d!3m5!1s0x3bc8b8ae25c37871:0x6b78646a4b17dc42!8m2!3d17.3286609!4d76.8175479!16s%2Fg%2F11bw4sfw2d!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.5936338521503!2d76.81535921486872!3d17.328660888114675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8b8ae25c37871%3A0x6b78646a4b17dc42!2sAditi%20Hospital!5e0!3m2!1sen!2sin!4v1718384400000!5m2!1sen!2sin',
  'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://facebook.com/aditihospital', 'https://instagram.com/aditihospital', 'https://twitter.com/aditihospital', 'https://linkedin.com/company/aditihospital'
)
ON CONFLICT (id) DO NOTHING;
