import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePowerInputElement
 * @class IconBaselinePowerInputElement
 * @extends {AoflElement}
 */
class IconBaselinePowerInputElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePowerInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-power-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePowerInputElement.is, IconBaselinePowerInputElement);

export default IconBaselinePowerInputElement;
