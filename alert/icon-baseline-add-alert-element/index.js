import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddAlertElement
 * @class IconBaselineAddAlertElement
 * @extends {AoflElement}
 */
class IconBaselineAddAlertElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddAlertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-alert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddAlertElement.is, IconBaselineAddAlertElement);

export default IconBaselineAddAlertElement;
