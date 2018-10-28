import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTabletMacElement
 * @class IconTwotoneTabletMacElement
 * @extends {AoflElement}
 */
class IconTwotoneTabletMacElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTabletMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tablet-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTabletMacElement.is, IconTwotoneTabletMacElement);

export default IconTwotoneTabletMacElement;
