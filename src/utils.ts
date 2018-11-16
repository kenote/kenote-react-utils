export const assetUrl = (asset: string, context: string = ''): string => (/^(data\:)/.test(asset) ? `` : context).concat(asset)

export const isActiveLink = (linkname: string, pathname: string): boolean => {
  let pathMatch: RegExpMatchArray = pathname.match(/^(\/)([a-z\-]+)/)
  let linkMatch: RegExpMatchArray = linkname.match(/^(\/)([a-z\-]+)/)
  let pathKey: string = pathMatch && pathMatch[2] || ''
  let linkKey: string = linkMatch && linkMatch[2] || ''
  return pathKey.toLowerCase() === linkKey.toLowerCase()
}