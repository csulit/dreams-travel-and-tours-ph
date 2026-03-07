import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const WIDTH = 1200
const HEIGHT = 630

// Brand colors (light mode palette from styles.css)
const BG = '#1a2332' // dt-navy approx
const PRIMARY = '#4a8db7' // dt-primary approx
const PRIMARY_LIGHT = '#6cb8d9' // dt-primary-light approx
const TEXT_PRIMARY = '#f5f5f4' // light heading on dark bg
const TEXT_SECONDARY = '#9ab5c8' // muted text
const SURFACE = '#243346' // slightly lighter navy

const FONTS_DIR = join(
  import.meta.dir,
  '..',
  'node_modules',
  '@fontsource',
  'manrope',
  'files',
)

function loadFont(weight: number): ArrayBuffer {
  const path = join(FONTS_DIR, `manrope-latin-${weight}-normal.woff`)
  const buffer = readFileSync(path)
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  )
}

async function main() {
  const medium = loadFont(500)
  const semibold = loadFont(600)
  const bold = loadFont(700)
  const extrabold = loadFont(800)

  const svg = await satori(
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background: `linear-gradient(135deg, ${BG} 0%, ${SURFACE} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 60,
        fontFamily: 'Manrope',
      }}
    >
      {/* Top: brand badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 4,
            height: 28,
            background: PRIMARY_LIGHT,
            borderRadius: 2,
          }}
        />
        <span style={{ fontSize: 20, fontWeight: 700, color: PRIMARY_LIGHT }}>
          Dreams Travel & Tours PH
        </span>
      </div>

      {/* Middle: main content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: TEXT_PRIMARY,
            lineHeight: 1.1,
          }}
        >
          Your Dream Adventure
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: PRIMARY_LIGHT,
            lineHeight: 1.1,
          }}
        >
          Starts Here
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: TEXT_SECONDARY,
            lineHeight: 1.5,
            maxWidth: 700,
            marginTop: 8,
          }}
        >
          Experience the beauty of the Philippines with expertly crafted travel
          packages. From pristine beaches to vibrant cities.
        </div>
      </div>

      {/* Bottom: trust badge */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: SURFACE,
            borderRadius: 999,
            padding: '8px 16px',
            border: `1px solid ${PRIMARY}33`,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: PRIMARY_LIGHT,
            }}
          />
          <span
            style={{ fontSize: 14, fontWeight: 600, color: TEXT_SECONDARY }}
          >
            Trusted by 10,000+ travelers
          </span>
        </div>
      </div>
    </div>,
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: 'Manrope',
          data: medium,
          weight: 500,
          style: 'normal' as const,
        },
        {
          name: 'Manrope',
          data: semibold,
          weight: 600,
          style: 'normal' as const,
        },
        {
          name: 'Manrope',
          data: bold,
          weight: 700,
          style: 'normal' as const,
        },
        {
          name: 'Manrope',
          data: extrabold,
          weight: 800,
          style: 'normal' as const,
        },
      ],
    },
  )

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
  })
  const png = resvg.render().asPng()

  const outPath = join(import.meta.dir, '..', 'public', 'og.png')
  writeFileSync(outPath, png)
  console.log(`Generated OG image: ${outPath} (${png.byteLength} bytes)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
