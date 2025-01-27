import secrets

# Generate a secure 32-byte token (this will give you a 43-character URL-safe base64-encoded string)
secure_key = secrets.token_urlsafe(32)

print(secure_key)