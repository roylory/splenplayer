const looksLikeSubtitle = (name: string) => {
  const lowerCasedName = name.toLowerCase()
  return lowerCasedName.endsWith(".smi")
}

export const getSubtitleFiles = (files: File[]) => {
  return files
    .filter((file) => looksLikeSubtitle(file.name))
    .sort((a, b) => a.name.localeCompare(b.name))
}
