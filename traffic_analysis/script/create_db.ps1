# Variables
$DB_NAME = "trafficdb"
$DB_USER = "postgres"
$DB_PASSWORD = "Shadowrecker@1"
$DB_HOST = "localhost"
$DB_PORT = "5432"

# Creating the database
Write-Host "Creating database '$DB_NAME' with user '$DB_USER'..."

# Connect to PostgreSQL and execute the SQL commands
psql -h $DB_HOST -U postgres -c "CREATE DATABASE $DB_NAME;"
psql -h $DB_HOST -U postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';"
psql -h $DB_HOST -U postgres -c "ALTER ROLE $DB_USER SET client_encoding TO 'utf8';"
psql -h $DB_HOST -U postgres -c "ALTER ROLE $DB_USER SET default_transaction_isolation TO 'read committed';"
psql -h $DB_HOST -U postgres -c "ALTER ROLE $DB_USER SET timezone TO 'UTC';"
psql -h $DB_HOST -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"

Write-Host "Database '$DB_NAME' and user '$DB_USER' created successfully."
