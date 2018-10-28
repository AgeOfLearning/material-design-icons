import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhonePausedElement
 * @class IconSharpPhonePausedElement
 * @extends {AoflElement}
 */
class IconSharpPhonePausedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhonePausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhonePausedElement.is, IconSharpPhonePausedElement);

export default IconSharpPhonePausedElement;
