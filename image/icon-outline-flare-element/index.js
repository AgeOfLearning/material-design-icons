import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlareElement
 * @class IconOutlineFlareElement
 * @extends {AoflElement}
 */
class IconOutlineFlareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlareElement.is, IconOutlineFlareElement);

export default IconOutlineFlareElement;
