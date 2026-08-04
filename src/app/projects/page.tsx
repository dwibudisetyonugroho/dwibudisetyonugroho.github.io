'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database } from 'lucide-react'

import { ParallaxBackground } from '@/components/portfolio/ParallaxBackground'
import { TicketCardEducation } from '@/components/portfolio/TicketCardEducation'
import { getProjectProps } from '@/components/portfolio/ProjectsSection'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/data'
import { Navigation } from '@/components/portfolio/Navigation'

const ProjectCard = ({ project }: { project: any }) => {
  const extraProps = getProjectProps(project)
  const tags = project.technologies || (project.technologyCategories ? Object.values(project.technologyCategories).flat() : [])

  return (
    <div key={project.id} id={project.id} className="scroll-mt-24 w-full">
      <TicketCardEducation
        title={project.title}
        description={project.description}
        tags={tags}
        riseOnHover={true}
        maxTilt={3}
        hoverSpringConfig={{ stiffness: 120, damping: 20 }}
        {...extraProps}
      />
    </div>
  )
}

const ProjectSectionHeader = ({ title }: { title: string; count?: number }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-foreground mt-16 first:mt-0">
    {title}
  </h2>
)

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter projects based on search query and category pill
  const filteredProjects = PROJECTS.filter((project) => {
    // 1. Filter by category
    let matchesCategory = true
    if (selectedCategory !== 'All') {
      const catLower = selectedCategory.toLowerCase()
      const techLower = project.technologies.map(t => t.toLowerCase())
      
      if (catLower === 'machine learning') {
        const matchesML = 
          techLower.some(t => t.includes('learning') || t.includes('regression') || t.includes('model') || t.includes('pyodbc')) ||
          (project as any).methodologies?.some((m: string) => m.toLowerCase().includes('machine') || m.toLowerCase().includes('model'))
        matchesCategory = !!matchesML
      } else {
        matchesCategory = techLower.some(t => t.includes(catLower))
      }
    }

    // 2. Filter by search query
    let matchesSearch = true
    if (searchQuery.trim() !== '') {
      const queryLower = searchQuery.toLowerCase().trim()
      const titleMatches = project.title.toLowerCase().includes(queryLower)
      const descMatches = project.description.toLowerCase().includes(queryLower)
      const techMatches = project.technologies.some(t => t.toLowerCase().includes(queryLower))
      const roleMatches = (project as any).role?.toLowerCase().includes(queryLower) || false
      
      matchesSearch = titleMatches || descMatches || techMatches || roleMatches
    }

    return matchesCategory && matchesSearch
  })

  const personalProjects = filteredProjects.filter(p => 
    p.type?.toLowerCase().includes('personal')
  )
  const capstoneProjects = filteredProjects.filter(p => 
    p.type?.toLowerCase().includes('capstone') || p.type?.toLowerCase().includes('certificate')
  )
  const internshipProjects = filteredProjects.filter(p => 
    p.type?.toLowerCase().includes('internship')
  )

  const navSections = useMemo(() => {
    const sections: { name: string; href: string; items: { id: string }[] }[] = []
    if (personalProjects.length > 0) {
      sections.push({ 
        name: 'Personal Projects', 
        href: '#personal-projects',
        items: personalProjects.map(p => ({ id: p.id }))
      })
    }
    if (capstoneProjects.length > 0) {
      sections.push({ 
        name: 'Capstone Projects', 
        href: '#capstone-projects',
        items: capstoneProjects.map(p => ({ id: p.id }))
      })
    }
    if (internshipProjects.length > 0) {
      sections.push({ 
        name: 'Virtual Internship', 
        href: '#internship-projects',
        items: internshipProjects.map(p => ({ id: p.id }))
      })
    }
    return sections
  }, [personalProjects, capstoneProjects, internshipProjects])

  return (
    <div className="relative min-h-screen text-black flex flex-col justify-between pt-10 overflow-x-hidden">
      <ParallaxBackground imageSrc="/images/pine_forest.webp" />
      <Navigation />

      <main className="flex-1 pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center py-20 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-3xl"
              >
                <Database className="h-12 w-12 text-[#219ebc]/40 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#023047]">No projects found</h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto mt-1 font-medium">
                  We couldn't find any projects matching your search criteria. Try using different keywords.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
                  className="mt-5 border-[#8ecae6] hover:bg-[#8ecae6]/10 text-xs font-bold text-[#023047] h-9 rounded-lg"
                >
                  Reset Search & Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                key="projects-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                {/* Personal Projects Section */}
                {personalProjects.length > 0 && (
                  <div id="personal-projects" className="scroll-mt-24">
                    <ProjectSectionHeader title="Personal Project" count={personalProjects.length} />
                    <div className="space-y-8">
                      {personalProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Capstone Projects Section */}
                {capstoneProjects.length > 0 && (
                  <div id="capstone-projects" className="scroll-mt-24">
                    <ProjectSectionHeader title="Capstone Project" count={capstoneProjects.length} />
                    <div className="space-y-8">
                      {capstoneProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Virtual Internship Projects Section */}
                {internshipProjects.length > 0 && (
                  <div id="internship-projects" className="scroll-mt-24">
                    <ProjectSectionHeader title="Virtual Internship Project" count={internshipProjects.length} />
                    <div className="space-y-8">
                      {internshipProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}


