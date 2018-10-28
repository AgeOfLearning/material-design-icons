import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhonelinkLockElement
 * @class IconBaselinePhonelinkLockElement
 * @extends {AoflElement}
 */
class IconBaselinePhonelinkLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhonelinkLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phonelink-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhonelinkLockElement.is, IconBaselinePhonelinkLockElement);

export default IconBaselinePhonelinkLockElement;
