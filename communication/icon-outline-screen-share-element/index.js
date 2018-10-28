import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScreenShareElement
 * @class IconOutlineScreenShareElement
 * @extends {AoflElement}
 */
class IconOutlineScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScreenShareElement.is, IconOutlineScreenShareElement);

export default IconOutlineScreenShareElement;
