import React from 'react';
import ReactDOM from 'react-Dom';


ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Tips for breaking down a new concept',
    React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          'Many concepts cant be tackled all at once',
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Work with the parts you can understand')
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Take breaks to stay fresh')
              )
            )
          )
        ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          'Develop a plan to learn the parts you dont know',
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Start with the parts that you know'),
              React.createElement('li', null, 'Build new concepts on top')
            )
          )
        )
      )  
    )
  ),
  document.getElementById('root')
);







// HAD TO USE THE BELOW EXAMPLE TO FOLLOW ALONG WITH HOW I WROTE OUT THIS EXTREMLY DENSE REACT ELEMENT.



// ReactDOM.render(
//   React.createElement(
//     'ul',
//     null,
//     React.createElement(
//       'li',
//       null,
//       'Item 1',
//       React.createElement(
//         'ul',
//         null,
//         React.createElement('li', null, 'Price 1')
//       )
//     ),
//     React.createElement(
//       'li',
//       null,
//       'Item 2',
//       React.createElement(
//         'ul',
//         null,
//         React.createElement('li', null, 'Price 2')
//       )
//     ),
//     React.createElement(
//       'li',
//       null,
//       'Item 2',
//       React.createElement(
//         'ul',
//         null,
//         React.createElement('li', null, 'Price 3')
//       )
//     )
//   ),
//   document.getElementById('root')
// );
