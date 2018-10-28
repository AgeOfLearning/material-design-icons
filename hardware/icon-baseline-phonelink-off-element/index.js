import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhonelinkOffElement
 * @class IconBaselinePhonelinkOffElement
 * @extends {AoflElement}
 */
class IconBaselinePhonelinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhonelinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phonelink-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhonelinkOffElement.is, IconBaselinePhonelinkOffElement);

export default IconBaselinePhonelinkOffElement;
