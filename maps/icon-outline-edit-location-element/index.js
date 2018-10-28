import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEditLocationElement
 * @class IconOutlineEditLocationElement
 * @extends {AoflElement}
 */
class IconOutlineEditLocationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEditLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-edit-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEditLocationElement.is, IconOutlineEditLocationElement);

export default IconOutlineEditLocationElement;
