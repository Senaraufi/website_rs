# Development Guide

This guide provides information for developers who want to contribute to or modify the Website_RS project.

## Prerequisites

- Rust 1.70 or later
- Cargo (comes with Rust)
- Git
- A code editor (VS Code, IntelliJ IDEA, or similar)

## Development Setup

### 1. Clone and Install

```bash
git clone https://github.com/Senaraufi/website_rs.git
cd website_rs
./install.sh
```

### 2. Development Workflow

```bash
# Run in development mode with auto-reload
cargo watch -x run

# Or run normally
cargo run

# Run tests
cargo test

# Check code formatting
cargo fmt -- --check

# Run linter
cargo clippy -- -D warnings
```

## Project Structure

```
website_rs/
├── src/
│   └── main.rs           # Main application entry point
├── templates/            # Askama HTML templates
│   ├── index.html
│   └── wasm_demo.html
├── docs/                 # Static website files
│   ├── index.html
│   ├── static/
│   │   ├── style.css
│   │   └── images/
│   └── ...
├── wasm/                 # WebAssembly module
│   └── src/
│       └── lib.rs
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD pipelines
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── Cargo.toml            # Rust dependencies
└── README.md
```

## Key Technologies

### Backend
- **Warp**: Web framework for handling HTTP requests
- **Askama**: Type-safe templating engine
- **Tokio**: Async runtime

### Frontend
- **HTML5/CSS3**: Modern web standards
- **JavaScript**: Interactive functionality
- **WebAssembly**: High-performance client-side code

## Making Changes

### Adding New Routes

Edit `src/main.rs` and add a new route:

```rust
let new_route = warp::path("new-page").and_then(new_handler);
let routes = index.or(wasm_demo).or(new_route).or(static_files);
```

### Modifying Templates

Templates are located in `templates/` directory. They use Askama syntax:

```html
<h1>{{ title }}</h1>
{% for item in items %}
    <p>{{ item }}</p>
{% endfor %}
```

### Updating Static Content

Static files are in `docs/` directory:
- HTML: `docs/index.html`
- CSS: `docs/static/style.css`
- Images: `docs/static/images/`

## Testing

### Running Tests

```bash
# Run all tests
cargo test

# Run specific test
cargo test test_name

# Run with output
cargo test -- --nocapture
```

### Adding Tests

Add tests in `src/main.rs` or create a `tests/` directory:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example() {
        assert_eq!(2 + 2, 4);
    }
}
```

## Code Quality

### Before Committing

Always run these checks:

```bash
# Format code
cargo fmt

# Check for issues
cargo clippy

# Run tests
cargo test

# Or run all at once
cargo fmt && cargo clippy -- -D warnings && cargo test
```

### Commit Message Format

Follow conventional commits:

```
feat: add new feature
fix: resolve bug
docs: update documentation
refactor: improve code structure
test: add tests
chore: update dependencies
```

## Debugging

### Enable Debug Logging

```rust
eprintln!("Debug: {}", variable);
```

### Common Issues

**Port Already in Use**
```bash
# Find process using port 3033
lsof -i :3033

# Kill the process
kill -9 <PID>
```

**Build Errors**
```bash
# Clean and rebuild
cargo clean
cargo build
```

## WebAssembly Development

### Building WASM Module

```bash
cd wasm
wasm-pack build --target web
```

### Testing WASM

The WASM demo is available at `http://127.0.0.1:3033/wasm-demo`

## Deployment

### Local Deployment

```bash
cargo build --release
./target/release/website_rs
```

### Production Deployment

See README.md for deployment instructions to:
- Netlify
- GitHub Pages
- Custom server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and quality checks
5. Submit a pull request

See CONTRIBUTING.md for detailed guidelines.

## Getting Help

- Open an issue on GitHub
- Check existing issues and discussions
- Email: sena.devx@gmail.com

## Resources

- [Rust Book](https://doc.rust-lang.org/book/)
- [Warp Documentation](https://docs.rs/warp/)
- [Askama Documentation](https://docs.rs/askama/)
- [WebAssembly Guide](https://rustwasm.github.io/book/)
