const svgSelector = (SVG, key) => (props) => {
  if (!SVG[key]) return

  const Selection = SVG[key]
  return <Selection {...props} />
}

export default svgSelector