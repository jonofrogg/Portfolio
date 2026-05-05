document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = link.getAttribute("href");

        // ignore downloads
        if (link.hasAttribute("download") || href.endsWith(".exe") || href.endsWith(".zip")) {
        return;
        }

            // only run for internal links
            if (this.hostname === window.location.hostname) {
                e.preventDefault();

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location = this.href;
                }, 400);
            }
        });
    });