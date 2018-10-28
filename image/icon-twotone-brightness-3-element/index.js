import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightness3Element
 * @class IconTwotoneBrightness3Element
 * @extends {AoflElement}
 */
class IconTwotoneBrightness3Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightness3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightness3Element.is, IconTwotoneBrightness3Element);

export default IconTwotoneBrightness3Element;
