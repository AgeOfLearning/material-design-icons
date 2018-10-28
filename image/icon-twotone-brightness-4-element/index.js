import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightness4Element
 * @class IconTwotoneBrightness4Element
 * @extends {AoflElement}
 */
class IconTwotoneBrightness4Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightness4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightness4Element.is, IconTwotoneBrightness4Element);

export default IconTwotoneBrightness4Element;
