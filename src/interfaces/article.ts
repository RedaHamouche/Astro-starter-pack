export default interface ArticleInterface {
    id: number;
    attributes: {
      title: string;
      slug: string;
      image: {
        data: {
        attributes: {
            url: string;
                };
            };
        };
    };
  }