# AI Huddle

**Better AI conversations, together.**

AI Huddle is a free, weekly Zoom conversation for people building, leading, researching, evaluating, and learning with AI. It begins with host-curated topics and is designed to become increasingly community-shaped through participant feedback, topic suggestions, and volunteer facilitators.

## What the site includes

- A clear launch message and interest call-to-action
- The weekly 60-minute session format
- Initial discussion themes
- Community principles and FAQ
- GitHub issue forms for joining and suggesting topics
- Responsive, accessible, dependency-light static HTML/CSS/JavaScript

## Run locally

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080>.

## Update launch details

Before announcing the first session, replace “Launching soon” and the schedule FAQ answer in `index.html` with the confirmed weekly day/time. The “Raise your hand” links currently open the repository’s join-interest issue form. Add a mailing-list or registration URL later by changing those links in `index.html`.

## Publish

The site is designed for GitHub Pages from the repository’s default branch root. It contains no build step, analytics, cookies, or third-party runtime assets.

## Community

- [Raise your hand](https://github.com/numerate64/aihuddle/issues/new?template=join-the-huddle.yml)
- [Suggest a topic](https://github.com/numerate64/aihuddle/issues/new?template=suggest-a-topic.yml)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing](CONTRIBUTING.md)

## License

Site code is available under the [MIT License](LICENSE). Community contributions are governed by the [Code of Conduct](CODE_OF_CONDUCT.md).
