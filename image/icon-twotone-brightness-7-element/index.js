import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightness7Element
 * @class IconTwotoneBrightness7Element
 * @extends {AoflElement}
 */
class IconTwotoneBrightness7Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightness7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightness7Element.is, IconTwotoneBrightness7Element);

export default IconTwotoneBrightness7Element;
