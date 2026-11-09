# Profile repository setup

Repository: `lolbaiteed/lolbaiteed`

## 1. Create the repository

Create a **public** repository named exactly `lolbaiteed` under your GitHub account.
Upload the files from this package, preserving the `.github/workflows/` directory.

The repository's default branch should be `main`.

## 2. Add repository secrets

Open:
`https://github.com/lolbaiteed/lolbaiteed/settings/secrets/actions`

Add these Actions secrets:

### METRICS_TOKEN

Create a GitHub personal access token (classic) at:
`https://github.com/settings/tokens`

For the selected Metrics plugins, start with the `public_repo` scope if the account/repositories are public. Some private repository or additional data features may require broader permissions. Keep the token private and never put it in README or workflow source.

### WAKATIME_API_KEY

For WakaTime, use the **OAuth token** shown in your WakaTime account settings
(not the write-only API key):
`https://wakatime.com/settings/account`

Add it as an Actions secret named exactly `WAKATIME_API_KEY`.

## 3. Enable Actions write access

In repository Settings → Actions → General → Workflow permissions, allow
**Read and write permissions** if the WakaTime action needs to push README updates.
The Metrics workflow also declares `contents: write`.

If organization policy prevents write access, the workflows cannot commit generated files.

## 4. Run the workflows

Go to Actions:
- Run **GitHub Metrics** with `workflow_dispatch`.
- Run **WakaTime** with `workflow_dispatch`.

The Metrics workflow writes `assets/metrics.svg`.
The WakaTime workflow replaces the content between the waka markers in README.

## 5. Notes and troubleshooting

- GitHub Actions schedules use UTC. The Metrics job is scheduled for 05:15 Almaty time and WakaTime for 05:20 Almaty time (UTC+5).
- GitHub may delay scheduled workflows during periods of high load.
- `lowlighter/metrics@latest` and `athul/waka-readme@master` follow upstream moving refs. For a more reproducible setup, pin each action to a reviewed release tag or commit SHA after initial validation.
- The Gruvbox palette is used for the profile's visual direction. Metrics' action does not expose a universal `config_theme` input, so its generated SVG may need a separate custom template/CSS pass if you want every plugin panel to use exact Gruvbox colors.
- The isometric calendar and activity plugin can take a few minutes on the first run.
- If a workflow fails, open its run in Actions and inspect the first failing step. Common causes are missing/insufficient secrets, workflow write permissions, or a plugin setting unsupported by the current Metrics release.
- The selected Metrics configuration includes repositories, activity, languages, achievements, coding habits, and the isometric contribution calendar.
