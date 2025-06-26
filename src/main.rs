use warp::{Filter, Rejection, Reply};
use askama::Template;
use serde::{Deserialize, Serialize};
use std::convert::Infallible;

// Define our templates
#[derive(Template)]
#[template(path = "index.html")]
struct IndexTemplate {
    title: String,
    description: String,
    name: String,
    title_position: String,
    year_range: String,
    features: Vec<Feature>,
}

#[derive(Template)]
#[template(path = "wasm_demo.html")]
struct WasmDemoTemplate {
    title: String,
    name: String,
    title_position: String,
    year_range: String,
}

#[derive(Serialize, Deserialize, Clone)]
struct Feature {
    title: String,
    description: String,
}

// Handler functions
async fn index_handler() -> Result<impl Reply, Rejection> {
    let features = vec![
        Feature {
            title: "Rust Backend".to_string(),
            description: "High-performance web server built with Rust and Warp".to_string(),
        },
        Feature {
            title: "WebAssembly".to_string(),
            description: "Client-side Rust code compiled to WebAssembly for near-native performance".to_string(),
        },
        Feature {
            title: "Askama Templates".to_string(),
            description: "Type-safe templating with Rust's compile-time checking".to_string(),
        },
    ];

    let template = IndexTemplate {
        title: "Cybersecurity Student & Developer".to_string(),
        description: "A modern portfolio website built with Rust".to_string(),
        name: "Sena Raufi".to_string(),
        title_position: "Digital Forensics and Cybersecurity Student at Technological University Dublin, TU863/Y3".to_string(),
        year_range: "2023-2027".to_string(),
        features,
    };

    match template.render() {
        Ok(html) => Ok(warp::reply::html(html)),
        Err(err) => {
            eprintln!("Template error: {}", err);
            Ok(warp::reply::html("<h1>Template Error</h1>".to_string()))
        }
    }
}

async fn wasm_demo_handler() -> Result<impl Reply, Rejection> {
    let template = WasmDemoTemplate {
        title: "WebAssembly Demo".to_string(),
        name: "Sena Raufi".to_string(),
        title_position: "Digital Forensics and Cybersecurity Student at Technological University Dublin, TU863/Y3".to_string(),
        year_range: "2023-2027".to_string(),
    };

    match template.render() {
        Ok(html) => Ok(warp::reply::html(html)),
        Err(err) => {
            eprintln!("Template error: {}", err);
            Ok(warp::reply::html("<h1>Template Error</h1>".to_string()))
        }
    }
}

#[tokio::main]
async fn main() {
    // Create directory for WebAssembly files if it doesn't exist
    std::fs::create_dir_all("./static/wasm").unwrap_or_else(|_| {
        println!("WebAssembly directory already exists or couldn't be created");
    });

    // Serve static files from the "./static" directory
    let static_files = warp::path("static")
        .and(warp::fs::dir("./static"));
    
    // Serve WebAssembly files from the "./wasm/pkg" directory
    let wasm_files = warp::path("static")
        .and(warp::path("wasm"))
        .and(warp::fs::dir("./wasm/pkg"));
    
    // Route for the index page using Askama template
    let index = warp::path::end()
        .and_then(index_handler);
    
    // Route for the WebAssembly demo page
    let wasm_demo = warp::path("wasm-demo")
        .and_then(wasm_demo_handler);
    
    // Serve docs directory
    let docs = warp::path("docs")
        .and(warp::fs::dir("./docs"));
    
    // Combine all routes
    let routes = index
        .or(wasm_demo)
        .or(static_files)
        .or(wasm_files)
        .or(docs);
    
    println!("Starting server at http://127.0.0.1:3033");
    println!("WebAssembly demo available at http://127.0.0.1:3033/wasm-demo");
    
    warp::serve(routes)
        .run(([127, 0, 0, 1], 3033))
        .await;
}
