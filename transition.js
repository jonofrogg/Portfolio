document.querySelectorAll("a").forEach(link => {
        if(link.dataset.fadeBound) return;

        link.dataset.fadeBound = "true";

        link.addEventListener("click", function (e) {
            const href = link.getAttribute("href");

        // ignore downloads
        if (link.hasAttribute("download") || href.endsWith(".exe") || href.endsWith(".zip")) {
        return;
        }

            // only fade for internal links
            if (this.hostname === window.location.hostname) {
                e.preventDefault();

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location = this.href;
                }, 400);
            }
        });
    });

    window.addEventListener("load", init);
    window.addEventListener("pageshow", init);