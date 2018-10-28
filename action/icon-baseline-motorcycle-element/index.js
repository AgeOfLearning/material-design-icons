import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMotorcycleElement
 * @class IconBaselineMotorcycleElement
 * @extends {AoflElement}
 */
class IconBaselineMotorcycleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMotorcycleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-motorcycle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMotorcycleElement.is, IconBaselineMotorcycleElement);

export default IconBaselineMotorcycleElement;
