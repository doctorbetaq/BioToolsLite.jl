push!(LOAD_PATH,"../src/")
import Pkg
using Documenter
using SimpleBio

makedocs(
    sitename = "SimpleBio",
    format = Documenter.HTML(),
    modules = [SimpleBio],
    pages = [
        "Home" => "index.md",
        
    ]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/doctorbetaq/SimpleBio.jl",
    devbranch = "main",
    push_preview = true
)
