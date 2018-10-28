import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMoreHorizElement
 * @class IconSharpMoreHorizElement
 * @extends {AoflElement}
 */
class IconSharpMoreHorizElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMoreHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-more-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMoreHorizElement.is, IconSharpMoreHorizElement);

export default IconSharpMoreHorizElement;
