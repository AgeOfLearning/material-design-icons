import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhonePausedElement
 * @class IconOutlinePhonePausedElement
 * @extends {AoflElement}
 */
class IconOutlinePhonePausedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhonePausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhonePausedElement.is, IconOutlinePhonePausedElement);

export default IconOutlinePhonePausedElement;
