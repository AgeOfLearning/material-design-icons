import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDehazeElement
 * @class IconTwotoneDehazeElement
 * @extends {AoflElement}
 */
class IconTwotoneDehazeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDehazeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-dehaze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDehazeElement.is, IconTwotoneDehazeElement);

export default IconTwotoneDehazeElement;
