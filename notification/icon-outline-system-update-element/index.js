import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSystemUpdateElement
 * @class IconOutlineSystemUpdateElement
 * @extends {AoflElement}
 */
class IconOutlineSystemUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSystemUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-system-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSystemUpdateElement.is, IconOutlineSystemUpdateElement);

export default IconOutlineSystemUpdateElement;
