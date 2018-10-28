import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhonePausedElement
 * @class IconBaselinePhonePausedElement
 * @extends {AoflElement}
 */
class IconBaselinePhonePausedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhonePausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhonePausedElement.is, IconBaselinePhonePausedElement);

export default IconBaselinePhonePausedElement;
