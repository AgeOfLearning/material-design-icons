import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightness5Element
 * @class IconTwotoneBrightness5Element
 * @extends {AoflElement}
 */
class IconTwotoneBrightness5Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightness5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightness5Element.is, IconTwotoneBrightness5Element);

export default IconTwotoneBrightness5Element;
