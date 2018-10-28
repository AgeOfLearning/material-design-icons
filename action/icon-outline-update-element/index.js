import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineUpdateElement
 * @class IconOutlineUpdateElement
 * @extends {AoflElement}
 */
class IconOutlineUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineUpdateElement.is, IconOutlineUpdateElement);

export default IconOutlineUpdateElement;
