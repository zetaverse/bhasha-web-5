import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function useMDXComponents(components:any) {
    return {
      h1: ({ children }:any) => (
        <h1 className={`!text-start !mb-2 !py-0 !px-3 !mx-auto !font-medium !text-3xl/10 ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</h1>
      ),
      h2: ({ children }:any) => (
        <h2 className={`text-start !mb-2 !py-0 !px-3 !mx-auto !font-medium !text-4xl/10 ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</h2>
      ),
      h3: ({ children }:any) => (
        <h3 className={`!text-start !mb-2 !py-0 !px-3 !mx-auto !font-medium !text-[1.75rem] ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</h3>
      ),
      h4: ({ children }:any) => (
        <h4 className={`!text-start !mb-2 !py-0 !px-3 !mx-auto !font-medium !text-[1.5rem] ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</h4>
      ),
      h5: ({ children }:any) => (
        <h5 className={`!text-start !mb-2 !py-0 !px-3 !mx-auto !font-normal !text-[1.25rem] ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</h5>
      ),
      h6: ({ children }:any) => (
        <h6 className={`!text-start !mb-2 !py-0 !px-3 !mx-auto !font-normal !text-[1rem] ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</h6>
      ),
      ol: ({ children }:any) => <ol className={`!text-start !px-12 !mb-4 !mx-auto !text-lg !font-normal !leading-[1.6em] ${inter.className}`} style={{maxWidth: '910px',listStyleType: 'decimal'}}>{children}</ol>,
      ul: ({ children }:any) => <ul className={`!text-start !px-12 !mx-auto !text-lg !font-normal !leading-[1.6em] ${inter.className}`} style={{maxWidth: '910px',listStyleType: 'disc'}}>{children}</ul>,
      li: ({ children }:any) => <li className={` !text-start !py-1 !mx-auto ${inter.className}`} style={{maxWidth: '910px', fontWeight:"400", fontSize: 'clamp(16px, 3vw, 18px)'}}>{children}</li>,
      code: ({ children }:any) => <code className={`!bg-gray-100 !p-1 !rounded ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</code>,
      pre: ({ children }:any) => (
        <pre className={`!bg-gray-100 !p-3 !rounded !text-[0.9rem] !mx-auto !overflow-x-auto  ${inter.className}`} style={{ maxWidth: '920px' }}>
          {children}
        </pre>
      ),
      img: ({ src, alt, ...props }:any) => <Image src={src} alt={alt} layout="responsive" width={100} height={100} priority style={{ maxWidth: '100%' }} {...props} />,
      audio: ({ children, ...props }:any) => (
        <audio className="!w-full !mx-auto" controls {...props} style={{ maxWidth: '920px' }}>
          {children}
        </audio>
      ),
      video: ({ children, ...props }:any) => (
        <video className="!w-full !mx-auto" controls {...props} style={{ maxWidth: '920px' }}>
          {children}
        </video>
      ),
      p: ({ children }:any) => (
        <p className={`!text-start !mb-4 !px-4 !mx-auto !text-lg !font-normal !leading-[1.6em] ${inter.className}`} style={{ maxWidth: '920px' }}>
          {children}
        </p>
      ),
      blockquote: ({ children }:any) => (
        <blockquote className={`!relative !my-0 !pl-6 !mx-auto ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</blockquote>
      ),
      hr: () => (
        <div className="!mx-auto" style={{ maxWidth: '920px', margin: '1rem auto' }}>
            <hr className="!border-2 !border-[var(--border)]" />
        </div>
    ),
    
      a: ({ children, ...props }:any) => (
        <a 
          className={`!inline-block text-[#4B2AAD] ${inter.className} hover:!text-[var(--focus-highlight)] hover:!text-decoration-none focus:!text-decoration-none active:!text-decoration-none`}
          {...props} 
          style={{ maxWidth: '920px',
            textDecoration: 'underline',
           }}
        >
          {children}
        </a>
      ),
      sup: ({ children }:any) => <sup className="!text-sm" style={{ maxWidth: '920px' }}>{children}</sup>,
      sub: ({ children }:any) => <sub className="!text-sm" style={{ maxWidth: '920px' }}>{children}</sub>,
    };
  }

  /*
  gfm supported tags

        details: ({ children }) => (
        <details style={{ border: '1px solid #aaa', borderRadius: '7px', padding: '0.5em 0.5em 0', maxWidth: '920px' }}>
          {children}
        </details>
      ),
      summary: ({ children }) => (
        <summary style={{ fontWeight: 'bold', margin: '-0.5em -0.5em 0', padding: '0.5em', maxWidth: '920px' }}>
          {children}
        </summary>
      ),
      table: ({ children }) => (
        <table className="w-full border border-[var(--background-main)] bg-[var(--background-main)] rounded-[var(--border-radius)]" style={{ maxWidth: '920px' }}>
          {children}
        </table>
      ),
      th: ({ children }) => <th className="bg-[var(--background-main)] text-left p-2" style={{ maxWidth: '920px' }}>{children}</th>,
      td: ({ children }) => <td className="bg-[var(--background-body)] text-left p-2" style={{ maxWidth: '920px' }}>{children}</td>,
      
      'details[open]': ({ children }) => <details open className="p-4" style={{ maxWidth: '920px' }}>{children}</details>,
      'details[open] summary': ({ children }) => <summary className="font-bold" style={{ maxWidth: '920px' }}>{children}</summary>,


  not supported by gfm 

  
      meter: ({ children }) => (
        <meter style={{ height: '2.5rem', margin: '0.5rem 0', maxWidth: '920px' }}>
          {children}
        </meter>
      ),
      progress: ({ children }) => (
        <progress style={{ height: '1rem', margin: '0.75rem 0', maxWidth: '920px' }}>
          {children}
        </progress>
      ),
      fieldset: ({ children }) => (
        <fieldset style={{ border: '1px solid var(--border)', borderRadius: '6px', margin: '0', marginBottom: '6px', padding: '10px', maxWidth: '920px' }}>
          {children}
        </fieldset>
      )

      html: ({ children }) => <html>{children}</html>,
      body: ({ children }) => <body>{children}</body>,
      address: ({ children }) => <address>{children}</address>,
      aside: ({ children }) => <aside>{children}</aside>,
      footer: ({ children }) => <footer>{children}</footer>,
      header: ({ children }) => <header>{children}</header>,
      main: ({ children }) => <main>{children}</main>,
      nav: ({ children }) => <nav>{children}</nav>,
      section: ({ children }) => <section>{children}</section>,
      select: ({ children }) => (
        <select className={`bg-[var(--background-inputs)] border border-[var(--border)]   ${inter.className}`} style={{ maxWidth: '920px' }}>
          {children}
        </select>
      ),
      thead: ({ children }) => <thead className="border-collapse" style={{ maxWidth: '920px' }}>{children}</thead>,
      tfoot: ({ children }) => <tfoot className="border-t border-black" style={{ maxWidth: '920px' }}>{children}</tfoot>,
      'tr:hover td': ({ children }) => <td className="bg-[var(--table-highlight)]" style={{ maxWidth: '920px' }}>{children}</td>,
      'tbody tr:nth-child(even):hover td': ({ children }) => (
        <td className="bg-[var(--table-highlight)]" style={{ maxWidth: '920px' }}>{children}</td>
      ),
      'tr:last-child td:first-child': ({ children }) => <td className="rounded-bl-[8px]" style={{ maxWidth: '920px' }}>{children}</td>,
      'tr:last-child td:last-child': ({ children }) => <td className="rounded-br-[8px]" style={{ maxWidth: '920px' }}>{children}</td>,
      'tr:first-child th:first-child': ({ children }) => <th className="rounded-tl-[8px]" style={{ maxWidth: '920px' }}>{children}</th>,
      'tr:first-child th:last-child': ({ children }) => <th className="rounded-tr-[8px]" style={{ maxWidth: '920px' }}>{children}</th>,
            
      label: ({ children }) => <label className="block max-w-fit" style={{ maxWidth: '920px' }}>{children}</label>,
      dd: ({ children }) => <dd className={`ml-0 pb-3  ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</dd>,
      dl: ({ children }) => <dl className={`my-0  ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</dl>,
      dt: ({ children }) => <dt className={`font-bold  ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</dt>,
      figcaption: ({ children }) => <figcaption className={`pt-2 text-xs  ${inter.className}`} style={{ maxWidth: '920px' }}>{children}</figcaption>,
      figure: ({ children }) => <figure className="m-0" style={{ maxWidth: '920px' }}>{children}</figure>,
      mark: ({ children }) => <mark className="bg-yellow-200 text-black" style={{ maxWidth: '920px' }}>{children}</mark>,
      samp: ({ children }) => <samp className="font-mono bg-gray-100 p-2 rounded" style={{ maxWidth: '920px' }}>{children}</samp>,
      kbd: ({ children }) => <kbd className="bg-gray-200 p-2 rounded text-[1rem]" style={{ maxWidth: '920px' }}>{children}</kbd>,
      time: ({ children, ...props }) => <time className="font-normal text-[1rem]" {...props} style={{ maxWidth: '920px' }}>{children}</time>,
      input: (props) => (
        <input
          className="text-[1em] bg-[var(--background-inputs)] border border-[var(--border)] text-[var(--text)] my-1.5 py-3 px-3 rounded-[var(--border-radius)] max-w-fit outline-none appearance-none"
          {...props}
          style={{ maxWidth: '920px' }}
        />
      ),
      // 'input[type="checkbox"]': (props) => (
      //   <input className="rounded-[7px] relative mr-1 align-middle" type="checkbox" {...props} style={{ maxWidth: '920px' }} />
      // ),
      // 'input[type="radio"]': (props) => (
      //   <input className="rounded-full relative mr-1 align-middle" type="radio" {...props} style={{ maxWidth: '920px' }} />
      // ),
      // 'input[type="range"]': (props) => (
      //   <input className="vertical-align-middle p-0" type="range" {...props} style={{ maxWidth: '920px' }} />
      // ),
      // 'input[type="color"]': (props) => <input className="p-2" type="color" {...props} style={{ maxWidth: '920px' }} />,
      textarea: (props) => (
        <textarea
          className="bg-[var(--background-inputs)] border border-[var(--border)] p-2 rounded-[var(--border-radius)] max-w-full"
          {...props}
          style={{ maxWidth: '920px' }}
        />
      ),
      select: (props) => <select className="bg-[var(--background-inputs)] border border-[var(--border)] p-2" {...props} style={{ maxWidth: '920px' }} />,
      optgroup: ({ children }) => <optgroup className="p-2" style={{ maxWidth: '920px' }}>{children}</optgroup>,
            '*': ({ children }) => <div style={{ maxWidth: '920px' }}>{children}</div>,
      '::after': () => null,
      '::before': () => null,
      'select:is([multiple])': ({ children }) => (
        <select className="bg-[var(--background-inputs)] border border-[var(--border)] p-2 multiple" style={{ maxWidth: '920px' }}>
          {children}
        </select>
      ),
      'fieldset:focus-within': ({ children }) => <fieldset className="focus-within" style={{ maxWidth: '920px' }}>{children}</fieldset>,
      'input:focus-within': ({ children }) => <input className="focus-within" style={{ maxWidth: '920px' }}>{children}</input>,
      'textarea:focus-within': ({ children }) => <textarea className="focus-within" style={{ maxWidth: '920px' }}>{children}</textarea>,
      'select:focus-within': ({ children }) => <select className="focus-within" style={{ maxWidth: '920px' }}>{children}</select>,
  
      'fieldset:hover': ({ children }) => <fieldset className="hover" style={{ maxWidth: '920px' }}>{children}</fieldset>,
      'input:hover': ({ children }) => <input className="hover" style={{ maxWidth: '920px' }}>{children}</input>,
      'textarea:hover': ({ children }) => <textarea className="hover" style={{ maxWidth: '920px' }}>{children}</textarea>,
      'select:hover': ({ children }) => <select className="hover" style={{ maxWidth: '920px' }}>{children}</select>,

  
  */