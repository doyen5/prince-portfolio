import { describe, expect, it } from 'vitest'
import { projects } from '../src/data/projects'

describe('portfolio content', () => {
  it('contains unique project slugs', () => {
    const slugs = projects.map(project => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('provides French and English titles for each project', () => {
    projects.forEach(project => {
      expect(project.title.fr).toBeTruthy()
      expect(project.title.en).toBeTruthy()
    })
  })
})
