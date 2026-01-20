# Website_RS - Personal Portfolio Website

![Rust CI](https://github.com/Senaraufi/website_rs/workflows/Rust%20CI/badge.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/Senaraufi/website_rs)
![GitHub issues](https://img.shields.io/github/issues/Senaraufi/website_rs)
![GitHub stars](https://img.shields.io/github/stars/Senaraufi/website_rs?style=social)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Welcome to the repository for my personal portfolio website! This project showcases my skills, experiences, and projects through a website built using Rust and the Warp framework.

**[Live Demo](https://senaraufi.github.io/website_rs/)** | **[Contact](mailto:sena.devx@gmail.com)**

## Table of Contents 
- [About](#about)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [License](#license)

## About 
This website was created as a personal portfolio to display my work and accomplishments in the field of software development. Built with Rust and the Warp framework, it is designed for performance, scalability, and security.

## Technologies Used 

### Backend
- **Rust** - Systems programming language focused on safety and speed
- **Warp** - Fast and minimal web framework for Rust
- **Askama** - Type-safe templating engine
- **Tokio** - Asynchronous runtime for Rust

### Frontend
- **HTML5/CSS3** - Modern web standards
- **JavaScript** - Interactive functionality
- **WebAssembly** - Near-native performance in the browser

### DevOps
- **GitHub Actions** - CI/CD pipeline
- **Netlify** - Deployment platform

## Features 
- **Responsive Design** : Looks great on all devices, from desktops to smartphones.
- **Showcase of Projects** : Displays a gallery of my projects with descriptions.
- **Contact Form** : Allows visitors to get in touch with me directly via the website.
- **Fast and Secure** : Built with Rust for high performance and reliability.

## Getting Started 
Follow these steps to set up and run this project locally:

### Prerequisites 
Ensure you have the following installed on your machine:
- Rust (latest stable version) 
- Cargo (Rust's package manager) 

### Installation 
1. Clone the repository:
   ```bash
   git clone https://github.com/Senaraufi/website_rs.git
   cd website_rs
   ```

2. Build the project:
   ```bash
   cargo build --release
   ```

3. Run the development server:
   ```bash
   cargo run
   ```

4. Open your browser and navigate to:
   ```
   http://127.0.0.1:3033
   ```

### Running Tests
```bash
cargo test
```

### Code Quality Checks
```bash
# Format code
cargo fmt

# Run linter
cargo clippy

# Check all
cargo fmt -- --check && cargo clippy -- -D warnings && cargo test
```

## Deployment

### Deploy to Netlify (Recommended)
1. The `docs/` directory contains the static site
2. Push your changes to GitHub
3. Connect your repository to Netlify
4. Set build settings:
   - Build command: (leave empty, using pre-built static files)
   - Publish directory: `website_rs/docs`
5. Deploy!

### Deploy to GitHub Pages
1. Ensure `docs/` directory is up to date
2. Go to repository Settings → Pages
3. Set source to `main` branch, `/docs` folder
4. Save and wait for deployment
5. Access at: `https://[username].github.io/website_rs/`

### Manual Deployment
1. Build the project:
   ```bash
   cargo build --release
   ```

2. Run the server:
   ```bash
   ./target/release/website_rs
   ```

3. Configure reverse proxy (nginx/Apache) to point to `http://localhost:3033`

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Port Already in Use
If port 3033 is already in use, modify the port in `src/main.rs`:
```rust
warp::serve(routes)
    .run(([127, 0, 0, 1], 3033)) // Change 3033 to another port
    .await;
```

### Build Errors
- Ensure you have the latest stable Rust: `rustup update`
- Clear the build cache: `cargo clean && cargo build`

### WebAssembly Issues
If WASM features aren't working:
```bash
# Install wasm-pack
cargo install wasm-pack

# Build WASM module
cd wasm
wasm-pack build --target web
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Sena Raufi**
- GitHub: [@Senaraufi](https://github.com/Senaraufi)
- LinkedIn: [Sena Raufi](https://www.linkedin.com/in/sena-raufi-610187293/)
- Email: sena.devx@gmail.com
- Portfolio: [senaraufi.github.io/website_rs](https://senaraufi.github.io/website_rs/)

## Acknowledgments

- Built with [Rust](https://www.rust-lang.org/)
- Web framework: [Warp](https://github.com/seanmonstar/warp)
- Templating: [Askama](https://github.com/djc/askama)
- Deployed on [Netlify](https://www.netlify.com/)

---

Star this repository if you find it helpful!
