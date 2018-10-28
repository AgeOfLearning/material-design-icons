import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKitchenElement
 * @class IconBaselineKitchenElement
 * @extends {AoflElement}
 */
class IconBaselineKitchenElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKitchenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-kitchen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKitchenElement.is, IconBaselineKitchenElement);

export default IconBaselineKitchenElement;
