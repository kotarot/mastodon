// ==BEGIN== 2017-05-02 From Nyoho/mastodon @c6036293e77d3d11e5a2bada238051cdedcd9e74
import PropTypes from 'prop-types';
import emojify from '../../../emoji';
const loadScriptOnce = require('load-script-once');

class LivePreview extends React.PureComponent {

  componentDidUpdate() {
    const node  = ReactDOM.findDOMNode(this);
    if (MathJax != undefined) {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, node]);
    }
  }

  render () {
    const text = this.props.text.replace(/\n/g, '<br>');
    return <div dangerouslySetInnerHTML={{ __html: emojify(text)}} />
  }

}

LivePreview.propTypes = {
  text: PropTypes.string.isRequired,
}

export default LivePreview;
// ==END== 2017-05-02 From Nyoho/mastodon @c6036293e77d3d11e5a2bada238051cdedcd9e74
