# SEO checklist: YNS Car Care

The website side is done: metadata, structured data, sitemap, favicon. Everything below happens **outside the code**, and it is what moves rankings most. For local businesses, the Google Business Profile and reviews together make up roughly half of local-pack ranking.

**Use the exact same NAP (name, address, phone) everywhere:**

```
YNS Car Care
Sint-Annaveld 15, 3150 Haacht
+32 470 40 45 97
info@ynscarcare.be
https://ynscarcare.be
```

## 1. Right after deploying
- [ ] **Google Search Console.** Add `ynscarcare.be` as a *Domain property* and verify it with a DNS TXT record.
  - Submit `https://ynscarcare.be/sitemap.xml`.
  - Use *URL inspection → Request indexing* for the home page and the 6 service pages.
- [ ] **Bing Webmaster Tools.** Import from Search Console, which takes one click. Bing data also feeds ChatGPT and Copilot search.
- [ ] Check that the old domain `ynscare.be`, if the client owns it, redirects with a **301** to `ynscarcare.be`.
- [ ] Test the structured data:
  - https://search.google.com/test/rich-results
  - https://validator.schema.org

  Paste in `https://ynscarcare.be` and a service page.

## 2. Google Business Profile (once it's created)
- [ ] **Primary category:** *Car detailing service*. **Secondary categories:** *Window tinting service*, *Vehicle wrapping service*, *Car accessories store* (only if relevant).
- [ ] Address plus **service area** (Haacht, Leuven, Mechelen, Boortmeerbeek, Keerbergen, Kampenhout, Rotselaar, Tremelo, Zemst, Herent, Kortenberg, Bonheiden).
- [ ] Opening hours, the website link `https://ynscarcare.be`, and the booking link `https://ynscarcare.be/booking`.
- [ ] Add all 6 services with a short description. Reuse the text from the website.
- [ ] Upload 20+ real photos: before/after shots, the workshop, the logo, and the cover photo.
- [ ] Post an update or a before/after photo once a week.
- [ ] **Send the GBP link to the developer.** It gets added to `sameAs` in `src/lib/site-config.ts`, along with the opening hours, so Google links the website and the profile.

## 3. Reviews (second biggest factor)
- [ ] After every job, send the customer the direct Google review link by WhatsApp or SMS.
- [ ] Aim for a steady stream, e.g. 2–4 per month, rather than 20 at once.
- [ ] Reply to **every** review within a few days, and mention the service, e.g. "Bedankt voor je vertrouwen in onze keramische coating!".
- [ ] Ask customers to mention what was done and where ("interieur detailing", "Leuven"). AI Overviews use the words in reviews.

## 4. Directory listings (same NAP everywhere)
- [ ] Apple Business Connect (Apple Maps)
- [ ] Bing Places
- [ ] Goudengids.be / Infobel
- [ ] Facebook business page
- [ ] Trustpilot company profile. Send its URL to the developer so it gets added to `sameAs`.
- [ ] Instagram bio: add the address/region and the website link.

## 5. Links from other websites
- [ ] The municipality of Haacht's business directory (*ondernemersgids*).
- [ ] Suppliers and product brands (coating/film brands often have an "installers" page).
- [ ] Local car clubs, dealers and garages you work with.

## 6. Later: visible content (strongest website lever, needs approval)
These would change the site's look or copy, so they weren't done yet:
- Headings that contain the service and the town, e.g. "Keramische coating in Haacht".
- An FAQ section on each service page ("Hoelang gaat een coating mee?", "Is ramen tinten legaal in België?").
- Price ranges ("vanaf €…"). AI Overviews often answer "what does X cost?" questions.
- A "Werkgebied" section, or 3–4 region pages with genuinely unique content (Leuven, Mechelen…).
- The address shown in the footer.
- A compressed version of `public/pictures/yns-detailing.mp4`. It is 16 MB and slows down the home page on mobile.
