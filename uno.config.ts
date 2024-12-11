import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      accent: '#A36A28',
      auxiliary400: '#F7F2EF',
      auxiliary500: '#F2ECE7',
      neutral100: '#FEFEFE',
      neutral400: '#EBEBEB',
      neutral700: '#666565',
      neutral800: '#3D3D3B',
      neutral900: '#242220',
    },
  },
  extendTheme: theme => ({
    ...theme,
    breakpoints: {
      ...theme.breakpoints,
      final: '1500px',
    },
  }),
  safelist: [
    // ...
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        playfair: [
          {
            provider: 'google',
            name: 'Playfair Display',
            weights: ['400', '500', '600', '700', '800', '900'],
            italic: true,
          },
          {
            provider: 'none',
            name: 'serif',
          },
        ],
        archivo: [
          {
            provider: 'google',
            name: 'Archivo',
            italic: true,
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
          },
          {
            provider: 'none',
            name: 'sans-serif',
          },
        ],
        serrat: [
          {
            provider: 'google',
            name: 'Montserrat',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            italic: true,
          },
          {
            provider: 'none',
            name: 'sans-serif',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
