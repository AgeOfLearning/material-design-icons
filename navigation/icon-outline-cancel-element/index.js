import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCancelElement
 * @class IconOutlineCancelElement
 * @extends {AoflElement}
 */
class IconOutlineCancelElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCancelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cancel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCancelElement.is, IconOutlineCancelElement);

export default IconOutlineCancelElement;
