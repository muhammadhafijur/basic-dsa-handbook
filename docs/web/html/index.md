# HTML

## HTML Link Best Practices

If you're aiming for production-quality HTML, links (`<a>`) should be accessible, semantic, secure, and SEO-friendly. Here are the best practices every frontend developer should follow.

---

### 1. Use Meaningful Link Text

✅ Good

```html
<a href="/pricing">View Pricing</a>
```

```html
<a href="/docs/html-links">HTML Link Documentation</a>
```

❌ Bad

```html
<a href="/pricing">Click here</a>
```

```html
<a href="/docs">Read more</a>
```

**Why?**

Users, screen readers, and search engines should understand the destination without surrounding context.

---

### 2. Use the Correct Element

Use `<a>` only for navigation.

```html
<a href="/about">About Us</a>
```

Use `<button>` for actions.

```html
<button type="button">
    Save
</button>
```

❌ Wrong

```html
<a href="#" onclick="saveData()">
    Save
</a>
```

---

### 3. Always Include a Valid `href`

✅ Good

```html
<a href="/contact">
    Contact
</a>
```

❌ Avoid

```html
<a href="#">
```

```html
<a href="javascript:void(0)">
```

These break accessibility, keyboard navigation, and browser behavior.

---

### 4. Open External Links Safely

```html
<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Visit Example
</a>
```

**Why?**

- `noopener` prevents the new page from accessing `window.opener`.
- `noreferrer` hides the referrer and also protects against opener attacks in older browsers.

---

### 5. Tell Users When a Link Opens a New Tab

```html
<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Example (opens in a new tab)"
>
    Visit Example
</a>
```

Or

```html
<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Visit Example
    <span aria-hidden="true">↗</span>
</a>
```

---

### 6. Use Relative URLs for Internal Navigation

Internal

```html
<a href="/blog">
    Blog
</a>
```

External

```html
<a href="https://github.com">
    GitHub
</a>
```

Avoid using absolute URLs for internal navigation unless necessary.

❌

```html
<a href="https://mysite.com/blog">
```

---

# 7. Use the `title` Attribute Sparingly

❌ Don't

```html
<a href="/pricing" title="Click here">
    Pricing
</a>
```

✅ Better

```html
<a
    href="/pricing"
    title="Compare all subscription plans"
>
    Pricing
</a>
```

> Never rely on `title` for important information.

---

# 8. Don't Nest Interactive Elements

❌ Wrong

```html
<a href="/product">
    <button>Buy</button>
</a>
```

✅ Correct

```html
<a href="/product" class="button">
    Buy
</a>
```

or

```html
<button>
    Buy
</button>
```

---

# 9. Make the Clickable Area Large

Instead of

```html
<div class="card">
    <h3>
        <a href="/article">
            Article
        </a>
    </h3>
</div>
```

Prefer

```html
<a class="card" href="/article">
    <h3>Article</h3>
    <p>Description...</p>
</a>
```

Large clickable areas improve usability, especially on mobile devices.

---

# 10. Use `aria-current` for Active Navigation

```html
<nav>
    <a href="/">Home</a>

    <a
        href="/blog"
        aria-current="page"
    >
        Blog
    </a>
</nav>
```

---

# 11. Never Remove Focus Styles

❌ Bad

```css
a {
    outline: none;
}
```

✅ Better

```css
a:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}
```

Keyboard users rely on visible focus indicators.

---

# 12. Ensure Sufficient Color Contrast

❌ Bad

```css
a {
    color: #9ca3af;
}
```

✅ Better

```css
a {
    color: #005fcc;
}
```

Also avoid relying on color alone. Underlines improve discoverability.

---

# 13. Style Visited Links

```css
a:visited {
    color: purple;
}
```

Visited links help users recognize pages they've already seen.

---

# 14. Don't Disable Links with CSS

Avoid

```css
pointer-events: none;
```

or

```html
<a href="/checkout" class="disabled">
```

Instead:

- Remove the link if it's unavailable.
- Explain why it's unavailable.
- Use a disabled button only for actions.

---

# 15. Use Download Links Correctly

```html
<a
    href="/files/report.pdf"
    download
>
    Download Report
</a>
```

---

# 16. Use Email Links

```html
<a href="mailto:hello@example.com">
    hello@example.com
</a>
```

---

# 17. Use Telephone Links

```html
<a href="tel:+15551234567">
    +1 (555) 123-4567
</a>
```

---

# 18. Use Anchor Links Properly

```html
<a href="#features">
    Features
</a>

<section id="features">
```

Always ensure the target `id` exists.

---

# 19. Use Semantic Navigation

```html
<nav aria-label="Main navigation">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/blog">Blog</a></li>
    </ul>
</nav>
```

---

# 20. Use Appropriate `rel` Values

```html
<a
    href="https://partner.com"
    rel="nofollow sponsored"
>
    Sponsored Link
</a>
```

Common values:

| Value | Purpose |
|--------|---------|
| `noopener` | Prevents `window.opener` access |
| `noreferrer` | Hides the referrer |
| `nofollow` | Suggests search engines not pass ranking signals |
| `ugc` | User-generated content |
| `sponsored` | Paid or sponsored links |

---

# 21. Don't Use Lazy Loading on Links

❌ Wrong

```html
<a loading="lazy">
```

`loading="lazy"` only works for images and iframes.

---

# 22. Avoid Empty Links

❌ Wrong

```html
<a href="/profile"></a>
```

✅ Correct

```html
<a href="/profile">
    View Profile
</a>
```

---

# 23. Use Semantic Breadcrumbs

```html
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li aria-current="page">
            HTML Best Practices
        </li>
    </ol>
</nav>
```

---

# 24. Style Links Consistently

```css
a {
    color: #005fcc;
    text-decoration: underline;
}

a:hover {
    text-decoration-thickness: 2px;
}

a:focus-visible {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
}
```

---

# 25. Production-Ready Example

```html
<nav aria-label="Main navigation">
    <ul>
        <li>
            <a href="/">Home</a>
        </li>

        <li>
            <a
                href="/blog"
                aria-current="page"
            >
                Blog
            </a>
        </li>

        <li>
            <a href="/pricing">
                Pricing
            </a>
        </li>

        <li>
            <a
                href="https://github.com/example/project"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the project on GitHub (opens in a new tab)"
            >
                GitHub
                <span aria-hidden="true">↗</span>
            </a>
        </li>
    </ul>
</nav>
```

---

# Quick Checklist

- ✅ Use descriptive link text.
- ✅ Use `<a>` only for navigation.
- ✅ Use `<button>` only for actions.
- ✅ Always include a valid `href`.
- ✅ Avoid `href="#"` and `javascript:void(0)`.
- ✅ Add `rel="noopener noreferrer"` when using `target="_blank"`.
- ✅ Inform users when a link opens in a new tab.
- ✅ Preserve visible keyboard focus styles.
- ✅ Ensure sufficient color contrast.
- ✅ Use `aria-current="page"` for active navigation.
- ✅ Don't nest buttons inside links.
- ✅ Make clickable areas large enough for touch devices.
- ✅ Use semantic navigation with `<nav>`.
- ✅ Use the correct `rel` attributes (`nofollow`, `ugc`, `sponsored`) when appropriate.
- ✅ Don't rely on the `title` attribute for accessibility.
- ✅ Avoid empty links.
- ✅ Use semantic breadcrumbs.
- ✅ Keep link styling consistent across the site.

---

# Summary

Following these practices will help you build links that are:

- **Accessible** for keyboard and screen reader users.
- **Secure** against common browser vulnerabilities.
- **Semantic** by using the correct HTML elements.
- **SEO-friendly** with meaningful anchor text and proper `rel` attributes.
- **User-friendly** through clear labels, visible focus states, and large click targets.
- **Maintainable** by following consistent HTML standards.