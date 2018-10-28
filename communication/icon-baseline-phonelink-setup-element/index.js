import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhonelinkSetupElement
 * @class IconBaselinePhonelinkSetupElement
 * @extends {AoflElement}
 */
class IconBaselinePhonelinkSetupElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhonelinkSetupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phonelink-setup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhonelinkSetupElement.is, IconBaselinePhonelinkSetupElement);

export default IconBaselinePhonelinkSetupElement;
