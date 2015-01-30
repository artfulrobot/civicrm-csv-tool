# civicrm-csv-tool
Drupal module to interactively add CiviCRM Contact ID to CSV data to help with imports.

See [intro blog](http://artfulrobot.com/blog/tool-help-import-payments-and-memberships-without-emails-civicrm).

# Installation

Download to your Drupal modules directory, enable the module, visit `/civicrm/csvmatch`

# Usage

## Prepare and Upload a CSV file

This tool takes a .csv file and tries to clean names and find the right people (with your help), and then outputs a new version with details added, including a CiviCRM contact ID as the first column.

The first four column must be as follows

* Title
* First name
* Last name
* Email

It is fine (normal) for cells in the columns below one or more of these headers to be blank.

**If only the first name column is used**, this name is considered for unpacking into different columns, using the following patterns:

    Original            →  Processed
    First Name          →  Title | First Name | Last Name
    -----------------------------+------------+------------
    Mr. Fred Flintstone →  Mr.   | Fred       | Flintstone
    Fred Flintstone     →        | Fred       | Flintstone
    Flintstone, Fred    →        | Fred       | Flintstone

There is not restriction on further columns, and that data will not be altered. Once you have these first columns in place, upload the file.

## Process the file

The tool will attempt to find match(es) for each row, and suggest an action for each row.

Where a good, single match is found it will suggest to update this record.
Where no matches can be found it will suggest to create a contact. Otherwise it
will show multiple matches and you can pick the one to update (or to create a
new contact).

The data is held in the database, so you can take as long as you like over this,
although processing hundreds of records will only usually take 5 mins,
especially if the source data has multiple records per person (e.g. regular
payments) because it groups the queries by their name/email details and only
asks you to identify each person once.

## Download the new CSV file

After processing, download the CSV file, which will be the same as your original except
for an additional first column containing the CiviCRM ID found.

The resulting .csv file is then more useful as data for the other various import tools,
such as contributions, activities and contacts import.

# License, Copyright

* Copyright Rich Lott 2015
* Licenced: [GPL3+](http://www.gnu.org/licenses/)
