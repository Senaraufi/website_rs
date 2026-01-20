# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to sena.devx@gmail.com. All security vulnerabilities will be promptly addressed.

Please include the following information in your report:

- Type of vulnerability
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the vulnerability, including how an attacker might exploit it

## Security Update Process

1. Security issues are given priority and will be addressed as quickly as possible
2. A fix will be developed and tested
3. A security advisory will be published
4. The fix will be released in a new version

## Security Best Practices

When contributing to this project:

- Never commit sensitive data (API keys, passwords, tokens)
- Use environment variables for configuration
- Keep dependencies up to date
- Follow Rust security best practices
- Run `cargo clippy` and `cargo audit` before submitting PRs

## Disclosure Policy

- Security issues are disclosed after a fix is available
- We follow responsible disclosure practices
- Credit will be given to security researchers who report vulnerabilities

Thank you for helping keep this project secure!
