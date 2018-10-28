import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoreHorizElement
 * @class IconOutlineMoreHorizElement
 * @extends {AoflElement}
 */
class IconOutlineMoreHorizElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoreHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-more-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoreHorizElement.is, IconOutlineMoreHorizElement);

export default IconOutlineMoreHorizElement;
