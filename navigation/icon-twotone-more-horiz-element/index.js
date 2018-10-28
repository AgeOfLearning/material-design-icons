import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoreHorizElement
 * @class IconTwotoneMoreHorizElement
 * @extends {AoflElement}
 */
class IconTwotoneMoreHorizElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoreHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-more-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoreHorizElement.is, IconTwotoneMoreHorizElement);

export default IconTwotoneMoreHorizElement;
