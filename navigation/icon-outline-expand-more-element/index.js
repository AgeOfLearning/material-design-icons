import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExpandMoreElement
 * @class IconOutlineExpandMoreElement
 * @extends {AoflElement}
 */
class IconOutlineExpandMoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExpandMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-expand-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExpandMoreElement.is, IconOutlineExpandMoreElement);

export default IconOutlineExpandMoreElement;
