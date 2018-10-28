import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddLocationElement
 * @class IconTwotoneAddLocationElement
 * @extends {AoflElement}
 */
class IconTwotoneAddLocationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddLocationElement.is, IconTwotoneAddLocationElement);

export default IconTwotoneAddLocationElement;
