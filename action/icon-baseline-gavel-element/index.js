import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGavelElement
 * @class IconBaselineGavelElement
 * @extends {AoflElement}
 */
class IconBaselineGavelElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGavelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gavel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGavelElement.is, IconBaselineGavelElement);

export default IconBaselineGavelElement;
