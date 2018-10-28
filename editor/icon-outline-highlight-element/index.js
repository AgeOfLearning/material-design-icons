import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHighlightElement
 * @class IconOutlineHighlightElement
 * @extends {AoflElement}
 */
class IconOutlineHighlightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHighlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-highlight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHighlightElement.is, IconOutlineHighlightElement);

export default IconOutlineHighlightElement;
