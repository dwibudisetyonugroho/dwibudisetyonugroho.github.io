@echo off
setlocal

:: Get current date and time
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set year=%datetime:~0,4%
set month=%datetime:~4,2%
set day=%datetime:~6,2%
set hour=%datetime:~8,2%
set minute=%datetime:~10,2%
set second=%datetime:~12,2%

:: Check for optional label argument
set "LABEL="
if not "%~1"=="" set "LABEL=_%~1"

set "BACKUP_DIR=backups\backup_%year%-%month%-%day%_%hour%-%minute%-%second%%LABEL%"

echo [System] Creating snapshot at: %BACKUP_DIR%...

:: Create backup directory
mkdir "%BACKUP_DIR%" >nul 2>&1

:: Copy critical files (Suppress output for cleaner logs)
xcopy "src" "%BACKUP_DIR%\src" /E /I /Y /Q >nul
copy "next.config.ts" "%BACKUP_DIR%\" /Y >nul
copy "tailwind.config.ts" "%BACKUP_DIR%\" /Y >nul
copy "tsconfig.json" "%BACKUP_DIR%\" /Y >nul
copy "package.json" "%BACKUP_DIR%\" /Y >nul
copy "DEPLOYMENT.md" "%BACKUP_DIR%\" /Y >nul

echo [Success] Snapshot saved. 
echo Location: %BACKUP_DIR%
