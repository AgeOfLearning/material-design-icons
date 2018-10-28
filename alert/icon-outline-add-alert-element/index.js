import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddAlertElement
 * @class IconOutlineAddAlertElement
 * @extends {AoflElement}
 */
class IconOutlineAddAlertElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddAlertElement.is, IconOutlineAddAlertElement);

export default IconOutlineAddAlertElement;
