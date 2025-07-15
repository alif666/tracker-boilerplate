CREATE POLICY "Allow read to all"
ON devices
FOR SELECT
TO public
USING (true);