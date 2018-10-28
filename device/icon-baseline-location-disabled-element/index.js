import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocationDisabledElement
 * @class IconBaselineLocationDisabledElement
 * @extends {AoflElement}
 */
class IconBaselineLocationDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocationDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-location-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocationDisabledElement.is, IconBaselineLocationDisabledElement);

export default IconBaselineLocationDisabledElement;
