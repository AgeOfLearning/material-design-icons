import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEditElement
 * @class IconOutlineEditElement
 * @extends {AoflElement}
 */
class IconOutlineEditElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEditElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-edit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEditElement.is, IconOutlineEditElement);

export default IconOutlineEditElement;
