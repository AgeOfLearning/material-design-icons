import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGetAppElement
 * @class IconOutlineGetAppElement
 * @extends {AoflElement}
 */
class IconOutlineGetAppElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGetAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-get-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGetAppElement.is, IconOutlineGetAppElement);

export default IconOutlineGetAppElement;
