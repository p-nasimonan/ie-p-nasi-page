@echo off
REM Batch file to build Vite project and deploy to remote server

cd yokan-page || (echo "Failed to change directory to project." & exit /b)
npm run build || (echo "Build failed." & exit /b)
cd dist || (echo "Failed to change directory to dist." & exit /b)

REM Attempt to transfer files using scp
scp -r * amane:/home/student/e24/e245719/public_html
IF ERRORLEVEL 1 (
    echo "File transfer failed. Please check your connection and path."
    exit /b
)

echo "Deployment completed successfully."
pause