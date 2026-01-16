use wasm_bindgen::prelude::*;

// Import the `window.alert` function from the Web
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// Export a function that will be called from JavaScript
#[wasm_bindgen]
pub fn greet() -> String {
    "Hello from Rust WebAssembly!".to_string()
}

// Calculate Fibonacci number (recursive implementation)
#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

// Simple text encryption (Caesar cipher)
#[wasm_bindgen]
pub fn encrypt_text(text: &str) -> String {
    let shift = 3; // Caesar cipher with shift of 3
    text.chars()
        .map(|c| {
            if c.is_ascii_alphabetic() {
                let base = if c.is_ascii_lowercase() { b'a' } else { b'A' };
                let shifted = (((c as u8 - base + shift) % 26) + base) as char;
                shifted
            } else {
                c
            }
        })
        .collect()
}

// Add a function to demonstrate Rust's performance with a more complex calculation
#[wasm_bindgen]
pub fn calculate_prime_factors(n: u32) -> String {
    let mut factors = Vec::new();
    let mut number = n;

    let mut divisor = 2;
    while number > 1 {
        while number % divisor == 0 {
            factors.push(divisor);
            number /= divisor;
        }
        divisor += 1;
    }

    if factors.is_empty() {
        format!("{} is prime", n)
    } else {
        format!("Prime factors of {}: {:?}", n, factors)
    }
}

// Function to demonstrate Rust's string processing capabilities
#[wasm_bindgen]
pub fn reverse_words(text: &str) -> String {
    text.split_whitespace()
        .map(|word| word.chars().rev().collect::<String>())
        .collect::<Vec<String>>()
        .join(" ")
}
