#!/bin/bash

# Build script for compiling Rust to WebAssembly

# Check if wasm-pack is installed
if ! command -v wasm-pack &> /dev/null; then
    echo "wasm-pack is not installed. Installing..."
    cargo install wasm-pack
fi

# Navigate to the wasm directory
cd "$(dirname "$0")/wasm"

# Build the WebAssembly package
echo "Building WebAssembly module..."
wasm-pack build --target web --out-dir ../static/wasm

echo "WebAssembly build complete!"
echo "The compiled WebAssembly files are now in the static/wasm directory."
