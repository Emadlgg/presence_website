const { Client } = require('@notionhq/client')

// Crear cliente
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// Verificar que el cliente se creó correctamente
console.log('Cliente Notion creado:', typeof notion)
console.log('Método databases.query existe:', typeof notion.databases?.query)

async function getPosts() {
  try {
    console.log('=== Intentando obtener posts ===')
    console.log('Token existe:', !!process.env.NOTION_TOKEN)
    console.log('Database ID:', process.env.NOTION_DATABASE_ID)
    
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Publicado',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Fecha',
          direction: 'descending',
        },
      ],
    })
    
    console.log('✅ Posts encontrados:', response.results.length)
    
    return response.results.map((post) => ({
      id: post.id,
      title: post.properties.Name?.title?.[0]?.plain_text || 'Sin título',
      slug: post.properties.Slug?.rich_text?.[0]?.plain_text || '',
      date: post.properties.Fecha?.date?.start || new Date().toISOString().split('T')[0],
      category: post.properties.Categoría?.select?.name || 'General',
      excerpt: post.properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      image: post.properties.Imagen?.files?.[0]?.file?.url || 
             post.properties.Imagen?.files?.[0]?.external?.url || null,
    }))
  } catch (error) {
    console.error('❌ Error:', error.message)
    console.error('Stack:', error.stack)
    return []
  }
}

async function getPostBySlug(slug) {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'Publicado',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    })

    if (!response.results.length) return null

    const post = response.results[0]
    const blocks = await notion.blocks.children.list({
      block_id: post.id,
      page_size: 100,
    })

    let content = blocks.results.map(block => {
      if (block.type === 'paragraph' && block.paragraph.rich_text.length) {
        return `<p>${block.paragraph.rich_text.map(t => t.plain_text).join('')}</p>`
      }
      if (block.type === 'heading_1' && block.heading_1.rich_text.length) {
        return `<h1>${block.heading_1.rich_text.map(t => t.plain_text).join('')}</h1>`
      }
      if (block.type === 'heading_2' && block.heading_2.rich_text.length) {
        return `<h2>${block.heading_2.rich_text.map(t => t.plain_text).join('')}</h2>`
      }
      return ''
    }).filter(c => c).join('\n')

    return {
      id: post.id,
      title: post.properties.Name?.title?.[0]?.plain_text || 'Sin título',
      slug: post.properties.Slug?.rich_text?.[0]?.plain_text || '',
      date: post.properties.Fecha?.date?.start || new Date().toISOString().split('T')[0],
      category: post.properties.Categoría?.select?.name || 'General',
      excerpt: post.properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      image: post.properties.Imagen?.files?.[0]?.file?.url || 
             post.properties.Imagen?.files?.[0]?.external?.url || null,
      content: content,
    }
  } catch (error) {
    console.error('Error en getPostBySlug:', error.message)
    return null
  }
}

module.exports = { getPosts, getPostBySlug }