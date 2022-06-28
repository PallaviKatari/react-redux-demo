// Books.js
import React from "react";
import { connect } from "react-redux";
import { appendData } from "./action";

class Library extends React.Component {
  componentDidMount() {
  	let name = 'John';
  	let arr = [];

  	arr.push({
  		book_id: 1,
  		title: 'Harry Potter',
  		author: 'J K Rowling',
  		year: 1997
  	});

  	arr.push({
  		book_id: 2,
  		title: 'The Lord of the Rings',
  		author: 'J R R Tolkien',
  		year: 1954
  	});

      arr.push({
        book_id: 3,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    });

    arr.push({
        book_id: 4,
        title: 'The 3 Mistakes of My Life',
        author: 'Chetan Bhagat',
        year: 2008
    });

	arr.push({
        book_id: 5,
        title: 'The 3 Mistakes of My Life',
        author: 'Chetan Bhagat',
        year: 2008
    });

	arr.push({
        book_id: 6,
        title: 'The 3 Mistakes of My Life',
        author: 'Chetan Bhagat',
        year: 2008
    });

	arr.push({
        book_id: 7,
        title: 'The 3 Mistakes of My Life',
        author: 'Chetan Bhagat',
        year: 2008
    });

    arr.push({
      book_id: 8,
      title: 'The 3 Mistakes of My Life',
      author: 'Chetan Bhagat',
      year: 2008
  });

  	this.props.appendData({
  		name: name,
  		books: [...this.props.books, ...arr]
  	});
  }

  render() {
  	const { name, books } = this.props;

    let booksList = books.length > 0
    	&& books.map((item, i) => {
      return (
        <li key={i} value={item.book_id}>
        	{item.title} by <b>{item.author} </b> <br></br>({item.year})
        </li>
      )
    }, this);

	  return (
	    <div>
	    	<h1>Hello {name}! Welcome back!!!</h1>
            <h2>List of books you are currently reading</h2>
	    	<ol>
	    		{ booksList }
	    	</ol>
	    </div>
	  );
	}
}

const mapDispatchToProps = {
	appendData
}

const mapStateToProps = state => ({
  name: state.name,
  books: state.books
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);