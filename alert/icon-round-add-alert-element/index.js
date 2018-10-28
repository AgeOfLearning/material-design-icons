import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddAlertElement
 * @class IconRoundAddAlertElement
 * @extends {AoflElement}
 */
class IconRoundAddAlertElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddAlertElement.is, IconRoundAddAlertElement);

export default IconRoundAddAlertElement;
