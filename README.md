# dotHome - hackable startpage.

> dotHome is a hackable startpage for your browser. 
> You can preview dotHome [here](https://roschreiber.github.io/dotHome/).

## 📜 INDEX

>- [🎉 FEATURES](#-features)
>- [✅ TODO](#-todo)
>- [❓ USAGE](#-usage)
>- [🎨 THEMES](#-themes)

## 🎉 FEATURES

dotHome currently includes the following features:

- **Easy configuration through a single file.**
- Customizable **Color Themes**
- **Clock** changeable between **12 / 24** hour formats
- **Greetings** are easily modifiable
- **Weather** for your location through [OpenWeatherMap](https://openweathermap.org/)
- **Icons** from [Lucide.dev](https://lucide.dev/)

## ✅ TODO
> [!NOTE]  
> Still a very rough todo list. Will be updated asap, once I get new Ideas!

- [ ] Website 
    - [x] Logo (text)
    - [x] Searchbar
    - [x] Greet User, different Greetings depending on current time
    - [ ] Change current default theme
    - [ ] "Bookmarks"
        - [ ] Dividable into lists and buttons 
        - [ ] Use either FontAwesome or Lucide.dev for icons
        - [ ] ALSO: allow custom, user-set icons

- [ ] User Customizability
    - [x] Search Engine Customization
    - [x] Colors customizable through Config.js, allowing for Themes
        - [ ] More Advanced Customization, allowing the user to change transparency of objects
    - [ ] Inject custom CSS -> tutorial?

- [ ] Other
    - [ ] Run through Docker?
 
## ❓ USAGE
dotHome can be used as:

- a startpage for your browser
    - By configuring it in you browser. See [Firefox](https://support.mozilla.org/en-US/kb/how-to-set-the-home-page) or [Chrome](https://support.google.com/chrome/answer/95314)
- a new tab page for your browser
    - Using either this [Firefox](https://addons.mozilla.org/de/firefox/addon/custom-new-tab-page/) or [Chromium](https://chromewebstore.google.com/detail/change-new-tab/mocklpfdimiadpbgamlgehpgpodggahe) Extension
- ~a kitchen utensil~
    - sadly not... yet. 

## 🎨 THEMES
dotHome has a small list of premade themes made by me.
Feel free to just plug them into your config.js, they (should) be actively maintained.

<details>

<summary>Catpuccin Mocha</summary>

![image](https://github.com/roschreiber/dotHome/assets/87716938/951c762b-62aa-4889-989f-7a8d5e7f88f6)

```
window.inputBorderColor = '#6e6c7e';
window.inputTextColor = '#b4befe';
window.inputBackgroundColor = '#1e1e2e';
window.inputShadowColor = '#00000026';
window.inputShadowInsetColor = '#313244';
window.inputTextShadowColor = '#ffffffa8';
window.inputFocusBorderColor = '#b4befe';
window.inputFocusShadowColor = '#ffffff26';
window.inputFocusShadowInsetColor = '#b4befe';
window.inputPlaceholderColor = '#b4befe';
window.logoGradientColor1 = '#1e1e2e';
window.logoGradientColor2 = '#1e1e2e';
window.logoTextShadowColor1 = '#00000026';
window.logoTextShadowColor2 = '#313244';
window.logoHoverGradientColor1 = '#302D41';
window.logoHoverGradientColor2 = '#45475A';
window.logoHoverTextShadowColor1 = '#b4befe25';
window.logoHoverTextShadowColor2 = '#302D41';
window.backgroundGradientColorBottom = '#1e1e2e';
window.backgroundGradientColorTop = '#1e1e2e';
window.greetingTextColor = '#b4befe60';
```

</details>
