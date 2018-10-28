import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExitToAppElement
 * @class IconOutlineExitToAppElement
 * @extends {AoflElement}
 */
class IconOutlineExitToAppElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExitToAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-exit-to-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExitToAppElement.is, IconOutlineExitToAppElement);

export default IconOutlineExitToAppElement;
