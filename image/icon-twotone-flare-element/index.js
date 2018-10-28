import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlareElement
 * @class IconTwotoneFlareElement
 * @extends {AoflElement}
 */
class IconTwotoneFlareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlareElement.is, IconTwotoneFlareElement);

export default IconTwotoneFlareElement;
