import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMouseElement
 * @class IconTwotoneMouseElement
 * @extends {AoflElement}
 */
class IconTwotoneMouseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMouseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mouse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMouseElement.is, IconTwotoneMouseElement);

export default IconTwotoneMouseElement;
