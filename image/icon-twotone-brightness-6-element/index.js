import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightness6Element
 * @class IconTwotoneBrightness6Element
 * @extends {AoflElement}
 */
class IconTwotoneBrightness6Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightness6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightness6Element.is, IconTwotoneBrightness6Element);

export default IconTwotoneBrightness6Element;
