import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowDropUpElement
 * @class IconTwotoneArrowDropUpElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowDropUpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowDropUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-drop-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowDropUpElement.is, IconTwotoneArrowDropUpElement);

export default IconTwotoneArrowDropUpElement;
