import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoreElement
 * @class IconOutlineMoreElement
 * @extends {AoflElement}
 */
class IconOutlineMoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoreElement.is, IconOutlineMoreElement);

export default IconOutlineMoreElement;
