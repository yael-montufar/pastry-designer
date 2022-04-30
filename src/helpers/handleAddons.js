const handleAddons = (setState, addon) => {
  setState(prev => {
    let state = [...prev]
    if (state.includes(addon)) {
      const index = state.indexOf(addon)
      state.splice(index, 1) //remove 1 item @ index
      return state
    } else {
      state.push(addon)
      return state
    }
  })
}

export default handleAddons