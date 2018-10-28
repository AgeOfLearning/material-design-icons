import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLeakRemoveElement
 * @class IconSharpLeakRemoveElement
 * @extends {AoflElement}
 */
class IconSharpLeakRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLeakRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-leak-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLeakRemoveElement.is, IconSharpLeakRemoveElement);

export default IconSharpLeakRemoveElement;
