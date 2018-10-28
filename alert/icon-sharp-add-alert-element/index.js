import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddAlertElement
 * @class IconSharpAddAlertElement
 * @extends {AoflElement}
 */
class IconSharpAddAlertElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddAlertElement.is, IconSharpAddAlertElement);

export default IconSharpAddAlertElement;
