import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddBoxElement
 * @class IconOutlineAddBoxElement
 * @extends {AoflElement}
 */
class IconOutlineAddBoxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddBoxElement.is, IconOutlineAddBoxElement);

export default IconOutlineAddBoxElement;
