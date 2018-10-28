import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMobileOffElement
 * @class IconTwotoneMobileOffElement
 * @extends {AoflElement}
 */
class IconTwotoneMobileOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMobileOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mobile-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMobileOffElement.is, IconTwotoneMobileOffElement);

export default IconTwotoneMobileOffElement;
