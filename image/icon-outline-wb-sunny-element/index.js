import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWbSunnyElement
 * @class IconOutlineWbSunnyElement
 * @extends {AoflElement}
 */
class IconOutlineWbSunnyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWbSunnyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wb-sunny';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWbSunnyElement.is, IconOutlineWbSunnyElement);

export default IconOutlineWbSunnyElement;
