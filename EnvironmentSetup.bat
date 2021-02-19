@echo off
title Test environment setup!
:Ask1
set /P INPUT=Would you like to install Chocolatey and NodeJS? (Y/N): %=%

If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto Ask2

echo Incorrect input. Please type Y or N.
goto Ask1


:yes

cmd/c @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco install nodejs

:Ask2
set /P INPUT=Would you like to install CodeceptJS, Webdriverio and Selenium-standalone ? (Y/N): %=%


If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto Ask3

echo Incorrect input. Please type Y or N.
goto Ask2

:yes
call npm install -g codeceptjs
call npm install -g webdriverio 
call npm install -g selenium-standalone 
call selenium-standalone install

:Ask3
set /P INPUT=Would you like to install and upgrade browsers Chrome, Opera, Internet Explorer, Mozilla Firefox ? (Y/N): %=%


If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto Ask4

echo Incorrect input. Please type Y or N.
goto Ask3

:yes

choco upgrade googlechrome
choco upgrade opera
choco upgrade ie11
choco upgrade firefox
choco list --localonly

:Ask4
set /P INPUT=Would you like to install Frisby.js? (Y/N): %=%

If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto Ask5

echo Incorrect input. Please type Y or N.
goto Ask4

:yes
call npm install --save frisby@2.0.5

:Ask5
set /P INPUT=Would you like to install JEST? (Y/N): %=%

If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto no

echo Incorrect input. Please type Y or N.
goto Ask5

:yes
call npm install --save-dev jest

goto cont
:no
echo If you want to upgrade environment please enter y/Y thank you :)
:cont

pause