use warp::Filter;

#[tokio::main]
async fn main() {
    // Serve static files from the "./static" directory
    let static_files = warp::path("static")
        .and(warp::fs::dir("./static"));
        
    // Serve index.html for the root path
    let index = warp::path::end()
        .and(warp::fs::file("./templates/base.html"));
        
    // Combine routes
    let routes = index.or(static_files);
    
    warp::serve(routes)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
