@echo off
cd yokan-page/dist || (echo "Failed to change directory to dist." & exit /b)
chmod 755 -R * || (echo "Failed to change permissions." & exit /b)
scp -pr * amane:/home/student/e24/e245719/public_html
