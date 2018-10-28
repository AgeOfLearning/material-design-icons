import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhonelinkElement
 * @class IconBaselinePhonelinkElement
 * @extends {AoflElement}
 */
class IconBaselinePhonelinkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhonelinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phonelink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhonelinkElement.is, IconBaselinePhonelinkElement);

export default IconBaselinePhonelinkElement;
