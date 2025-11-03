
<#
Usage:
  .\rename_files.ps1 -Path "C:\temp\files" -Prefix "INV" -Date yyyyMMdd

Example:
  .\rename_files.ps1 -Path . -Prefix "REPORT" -Date (Get-Date -Format yyyyMMdd)
#>

param(
  [Parameter(Mandatory=$true)][string]$Path,
  [Parameter(Mandatory=$true)][string]$Prefix,
  [string]$Date = (Get-Date -Format "yyyyMMdd")
)

if (!(Test-Path $Path)) { throw "Path not found: $Path" }

$i = 1
Get-ChildItem -Path $Path -File | ForEach-Object {
  $ext = $_.Extension
  $new = "{0}_{1}_{2:D3}{3}" -f $Prefix,$Date,$i,$ext
  Rename-Item -Path $_.FullName -NewName $new
  $i++
}
Write-Host "Renamed $($i-1) files."
