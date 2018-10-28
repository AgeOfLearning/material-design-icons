import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePowerElement
 * @class IconBaselinePowerElement
 * @extends {AoflElement}
 */
class IconBaselinePowerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePowerElement.is, IconBaselinePowerElement);

export default IconBaselinePowerElement;
