Jekyll::Hooks.register :site, :post_write do |site|
  Jekyll.logger.info "Generating _sass/main.scss from tailwind.css"
  system("npx tailwindcss -i _sass/main.scss -o _site/assets/css/main.css --minify")
end