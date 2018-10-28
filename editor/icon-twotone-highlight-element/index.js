import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHighlightElement
 * @class IconTwotoneHighlightElement
 * @extends {AoflElement}
 */
class IconTwotoneHighlightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHighlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-highlight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHighlightElement.is, IconTwotoneHighlightElement);

export default IconTwotoneHighlightElement;
