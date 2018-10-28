import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOpenInNewElement
 * @class IconOutlineOpenInNewElement
 * @extends {AoflElement}
 */
class IconOutlineOpenInNewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOpenInNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-open-in-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOpenInNewElement.is, IconOutlineOpenInNewElement);

export default IconOutlineOpenInNewElement;
