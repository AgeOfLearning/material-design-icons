import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightness1Element
 * @class IconTwotoneBrightness1Element
 * @extends {AoflElement}
 */
class IconTwotoneBrightness1Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightness1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightness1Element.is, IconTwotoneBrightness1Element);

export default IconTwotoneBrightness1Element;
