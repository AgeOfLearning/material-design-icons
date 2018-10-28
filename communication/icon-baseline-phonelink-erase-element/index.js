import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhonelinkEraseElement
 * @class IconBaselinePhonelinkEraseElement
 * @extends {AoflElement}
 */
class IconBaselinePhonelinkEraseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhonelinkEraseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phonelink-erase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhonelinkEraseElement.is, IconBaselinePhonelinkEraseElement);

export default IconBaselinePhonelinkEraseElement;
