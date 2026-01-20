#!/bin/bash

# Installation script for Website_RS
# This script automates the setup process

set -e

echo "==================================="
echo "Website_RS Installation Script"
echo "==================================="
echo ""

# Check if Rust is installed
if ! command -v rustc &> /dev/null; then
    echo "Error: Rust is not installed."
    echo "Please install Rust from https://rustup.rs/"
    exit 1
fi

echo "Rust version: $(rustc --version)"
echo "Cargo version: $(cargo --version)"
echo ""

# Check if we're in the correct directory
if [ ! -f "Cargo.toml" ]; then
    echo "Error: Cargo.toml not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies and build
echo "Installing dependencies..."
cargo build --release

if [ $? -eq 0 ]; then
    echo ""
    echo "==================================="
    echo "Installation completed successfully!"
    echo "==================================="
    echo ""
    echo "To run the server:"
    echo "  cargo run"
    echo ""
    echo "Or run the compiled binary:"
    echo "  ./target/release/website_rs"
    echo ""
    echo "The server will be available at:"
    echo "  http://127.0.0.1:3033"
    echo ""
else
    echo ""
    echo "Error: Build failed. Please check the error messages above."
    exit 1
fi
