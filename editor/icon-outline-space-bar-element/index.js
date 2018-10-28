import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpaceBarElement
 * @class IconOutlineSpaceBarElement
 * @extends {AoflElement}
 */
class IconOutlineSpaceBarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpaceBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-space-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpaceBarElement.is, IconOutlineSpaceBarElement);

export default IconOutlineSpaceBarElement;
