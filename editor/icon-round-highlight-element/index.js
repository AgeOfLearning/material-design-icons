import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHighlightElement
 * @class IconRoundHighlightElement
 * @extends {AoflElement}
 */
class IconRoundHighlightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHighlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-highlight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHighlightElement.is, IconRoundHighlightElement);

export default IconRoundHighlightElement;
