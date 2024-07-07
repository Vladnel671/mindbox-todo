export const getColorClass = (filter: string, type: string) => {
    switch (type) {
      case 'block1':
        return filter === 'all'
          ? 'bg-green-500'
          : filter === 'active'
          ? 'bg-purple-700'
          : ' bg-blue-500'
      case 'block2':
        return filter === 'all'
          ? 'bg-purple-700'
          : filter === 'active'
          ? 'bg-blue-500'
          : 'bg-green-500'
      case 'block3':
        return filter === 'all'
          ? 'bg-blue-500'
          : filter === 'active'
          ? 'bg-green-500'
          : 'bg-purple-700'
      default:
        return ''
    }
  }