import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWbSunnyElement
 * @class IconTwotoneWbSunnyElement
 * @extends {AoflElement}
 */
class IconTwotoneWbSunnyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWbSunnyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wb-sunny';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWbSunnyElement.is, IconTwotoneWbSunnyElement);

export default IconTwotoneWbSunnyElement;
