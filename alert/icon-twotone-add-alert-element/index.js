import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddAlertElement
 * @class IconTwotoneAddAlertElement
 * @extends {AoflElement}
 */
class IconTwotoneAddAlertElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddAlertElement.is, IconTwotoneAddAlertElement);

export default IconTwotoneAddAlertElement;
