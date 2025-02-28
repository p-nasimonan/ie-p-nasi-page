@echo off
REM Batch file to build Vite project and deploy to remote server

cd yokan-page || (echo "Failed to change directory to project." )
npm run build || (echo "Build failed." & exit /b)
