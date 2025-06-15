/*
  Use generics and interfaces to fix the error in the following classes:
*/

// Make Component generic by adding <T>
class Component<T> {
  constructor (public props: T) {

  }
}

// Define an interface for the props expected by Page
interface PageProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};