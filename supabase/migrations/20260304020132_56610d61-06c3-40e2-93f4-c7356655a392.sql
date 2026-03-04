
-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- No public read access (admin only later)
CREATE POLICY "No public read"
  ON public.contact_submissions FOR SELECT
  USING (false);

-- Enrollment form submissions
CREATE TABLE public.enrollment_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  age TEXT NOT NULL,
  school_name TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  centre TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.enrollment_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit enrollment form"
  ON public.enrollment_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "No public read"
  ON public.enrollment_submissions FOR SELECT
  USING (false);
