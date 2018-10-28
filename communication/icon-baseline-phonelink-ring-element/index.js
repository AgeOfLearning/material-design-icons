import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhonelinkRingElement
 * @class IconBaselinePhonelinkRingElement
 * @extends {AoflElement}
 */
class IconBaselinePhonelinkRingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhonelinkRingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phonelink-ring';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhonelinkRingElement.is, IconBaselinePhonelinkRingElement);

export default IconBaselinePhonelinkRingElement;
