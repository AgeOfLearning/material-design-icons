import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePowerOffElement
 * @class IconBaselinePowerOffElement
 * @extends {AoflElement}
 */
class IconBaselinePowerOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePowerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-power-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePowerOffElement.is, IconBaselinePowerOffElement);

export default IconBaselinePowerOffElement;
