import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocationOnElement
 * @class IconTwotoneLocationOnElement
 * @extends {AoflElement}
 */
class IconTwotoneLocationOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-location-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocationOnElement.is, IconTwotoneLocationOnElement);

export default IconTwotoneLocationOnElement;
