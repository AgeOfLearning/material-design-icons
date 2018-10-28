import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDoneElement
 * @class IconOutlineDoneElement
 * @extends {AoflElement}
 */
class IconOutlineDoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDoneElement.is, IconOutlineDoneElement);

export default IconOutlineDoneElement;
