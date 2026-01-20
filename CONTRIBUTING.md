# Contributing to WebsiteWithRs

First off, thank you for considering contributing to this project! 🎉

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When reporting bugs, include:**
- Clear, descriptive title
- Detailed steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Rust version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:
- Clear description of the feature
- Why it would be useful
- Possible implementation approach
- Examples from other projects (if applicable)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clear, concise commit messages
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation as needed

3. **Test your changes**
   - Ensure all tests pass: `cargo test`
   - Check formatting: `cargo fmt -- --check`
   - Run clippy: `cargo clippy`
   - Test the application locally

4. **Submit a pull request**
   - Fill out the PR template completely
   - Link related issues
   - Request review from maintainers

## Development Setup

### Prerequisites
- Rust (latest stable version)
- Cargo (comes with Rust)
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/Senaraufi/WebsiteWithRs.git

# Navigate to project directory
cd WebsiteWithRs/website_rs

# Build the project
cargo build

# Run the project
cargo run
```

### Running Tests
```bash
cargo test
```

### Code Formatting
```bash
cargo fmt
```

### Linting
```bash
cargo clippy
```

## Style Guidelines

### Git Commit Messages
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests after the first line

**Examples:**
```
feat: Add user authentication system

Implements JWT-based authentication with refresh tokens.
Closes #123
```

```
fix: Resolve mobile responsive layout issue

Updates CSS grid to properly handle small screens.
Fixes #456
```

**Commit types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Rust Code Style
- Follow Rust standard style guidelines
- Use `cargo fmt` before committing
- Address all `cargo clippy` warnings
- Use meaningful variable/function names
- Keep functions small and focused
- Comment complex logic
- Follow DRY (Don't Repeat Yourself) principle

### Documentation
- Update README.md for significant changes
- Add inline comments for complex code
- Document public APIs
- Include examples for new features

## Code Review Process

1. Maintainers will review your PR within 3-5 days
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be acknowledged in release notes

## Recognition

Contributors will be:
- Listed in the project's README
- Mentioned in release notes
- Given credit in commit history

## Getting Help

- Open an issue with the `question` label
- Email: sena.devx@gmail.com

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing!
