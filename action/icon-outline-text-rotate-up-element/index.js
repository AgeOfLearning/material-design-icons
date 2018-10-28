import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextRotateUpElement
 * @class IconOutlineTextRotateUpElement
 * @extends {AoflElement}
 */
class IconOutlineTextRotateUpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextRotateUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-text-rotate-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextRotateUpElement.is, IconOutlineTextRotateUpElement);

export default IconOutlineTextRotateUpElement;
