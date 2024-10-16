const useCarouselHome = () => {
  const carouselItems = [
    {
      title: "Exploring the Wonders of Nature",
      excerpt:
        "Dive into the beauty of our planet's most breathtaking landscapes and ecosystems.",
      imageUrl: "/api/placeholder/800/500",
    },
    {
      title: "The Art of Mindful Living",
      excerpt:
        "Discover practical tips and insights for cultivating mindfulness in your daily life.",
      imageUrl: "/api/placeholder/800/500",
    },
    {
      title: "Culinary Adventures Around the World",
      excerpt:
        "Embark on a global gastronomic journey, exploring unique flavors and culinary traditions.",
      imageUrl: "/api/placeholder/800/500",
    },
  ];
  return {
    carouselItems,
  };
};

export default useCarouselHome;
