@echo off
goto begin
 
:usage
echo Usage: %~n0
echo.
echo Starts ydkb.io
echo and waits for user to press a key to stop.
goto end
 
:begin
if not "%1"=="" goto usage
cd server
start "Apache server" /B mapache.exe
echo YDKB on a Stick started...
echo.
 
:runbrowser
echo Your web browser will now open http://localhost:8800
echo.
if exist ..\index.html (
	start http://localhost:8800/
) 
 
:wait
echo To stop YDKB on a Stick
pause
 
:stop
ApacheKill.exe
echo ... YDKB on a Stick stopped.
echo You can close this window now.
 
:end
