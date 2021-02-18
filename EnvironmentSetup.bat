@echo off
title Test environment setup!
:Ask
set /P INPUT=Would you like to install Chocolatey and NodeJS? (Y/N): %=%

If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto no

echo Incorrect input. Please type Y or N.
goto Ask


:yes

cmd/c @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco install nodejs


set /P INPUT=Would you like to install CodeceptJS, Webdriverio and Selenium-standalone ? (Y/N): %=%


If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto no

echo Incorrect input. Please type Y or N.
goto Ask

:yes
call npm install -g codeceptjs
call npm install -g webdriverio 
call npm install -g selenium-standalone 
call selenium-standalone install

set /P INPUT=Would you like to install jdk8 ? (Y/N): %=%


If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto no

echo Incorrect input. Please type Y or N.
goto Ask

:yes
choco install jdk8

set /P INPUT=Would you like to install and upgrade browsers Chrome, Opera, Internet Explorer, Mozilla Firefox ? (Y/N): %=%


If /I "%INPUT%"=="Y" goto yes 
If /I "%INPUT%"=="N" goto no

echo Incorrect input. Please type Y or N.
goto Ask

:yes

choco upgrade googlechrome
choco upgrade opera
choco upgrade ie11
choco upgrade firefox
choco list --localonly

goto cont
:no
echo If you want to upgrade environment please enter y/Y thank you :)
:cont

pause
